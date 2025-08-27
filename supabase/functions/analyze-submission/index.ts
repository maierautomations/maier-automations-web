import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.56.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SubmissionData {
  industry: string[];
  department: string[];
  goals: string[];
  currentSystems: string[];
  documentTypes: string[];
  dataVolume: string;
  sourceRequirements: boolean;
  monthlyQueries: number;
  usageFrequency: string;
  dataCategory: string;
  euProcessingOnly: boolean;
  onPremiseRequired: boolean;
  timeframe: string;
  budgetRange: string;
  mainPainPoint: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      "https://ldszagprtplqmznissjk.supabase.co",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") || "",
      {
        auth: {
          autoRefreshToken: false,
          persistSession: false,
        },
      }
    );

    const { submissionId }: { submissionId: string } = await req.json();

    // Get submission data
    const { data: submission, error: fetchError } = await supabase
      .from('wizard_submissions')
      .select('*')
      .eq('id', submissionId)
      .single();

    if (fetchError || !submission) {
      throw new Error('Submission not found');
    }

    // Calculate Complexity Points
    let complexityPoints = 0;
    
    // Base points for automation type
    if (submission.goals?.includes('Zeitersparnis durch Automatisierung')) {
      complexityPoints += 1;
    }
    if (submission.goals?.includes('Bessere Datenqualität')) {
      complexityPoints += 1;
    }
    
    // System integration complexity
    const systemCount = submission.current_systems?.length || 0;
    if (systemCount >= 3) {
      complexityPoints += 2;
    } else if (systemCount >= 1) {
      complexityPoints += 1;
    }
    
    // Data volume complexity
    switch (submission.data_volume) {
      case '< 100 Dokumente':
        complexityPoints += 0.5;
        break;
      case '100-1.000 Dokumente':
        complexityPoints += 1;
        break;
      case '1.000-10.000 Dokumente':
        complexityPoints += 2;
        break;
      case '> 10.000 Dokumente':
        complexityPoints += 3;
        break;
    }
    
    // Usage frequency
    switch (submission.usage_frequency) {
      case 'Gelegentlich':
        complexityPoints += 0.5;
        break;
      case 'Täglich':
        complexityPoints += 1;
        break;
      case 'Mehrmals täglich':
        complexityPoints += 1.5;
        break;
      case 'Kontinuierlich':
        complexityPoints += 2;
        break;
    }
    
    // On-premise requirement
    if (submission.on_premise_required) {
      complexityPoints += 2;
    }
    
    // EU processing requirement
    if (submission.eu_processing_only) {
      complexityPoints += 0.5;
    }

    // Calculate RAG Score (0-10)
    let ragScore = 0;
    
    // Document types diversity
    const docTypeCount = submission.document_types?.length || 0;
    ragScore += Math.min(docTypeCount * 0.5, 3);
    
    // Source requirements
    if (submission.source_requirements) {
      ragScore += 2;
    }
    
    // Data category complexity
    switch (submission.data_category) {
      case 'Öffentlich':
        ragScore += 1;
        break;
      case 'Intern':
        ragScore += 2;
        break;
      case 'Vertraulich':
        ragScore += 3;
        break;
      case 'Personenbezogen':
        ragScore += 4;
        break;
    }
    
    // Monthly queries volume
    if (submission.monthly_queries) {
      if (submission.monthly_queries > 1000) {
        ragScore += 2;
      } else if (submission.monthly_queries > 100) {
        ragScore += 1;
      } else {
        ragScore += 0.5;
      }
    }

    // Determine recommended package
    let recommendedPackage = '';
    
    if (complexityPoints <= 2 && ragScore <= 3) {
      recommendedPackage = 'Starter';
    } else if (complexityPoints <= 4 && ragScore <= 6) {
      recommendedPackage = 'Core';
    } else if (complexityPoints <= 6 && ragScore <= 8) {
      recommendedPackage = 'Scale';
    } else {
      recommendedPackage = 'Enterprise';
    }
    
    // Special case: if RAG score is high, recommend RAG Pro
    if (ragScore >= 7) {
      recommendedPackage = 'RAG Pro';
    }

    // Update submission with calculated values
    const { error: updateError } = await supabase
      .from('wizard_submissions')
      .update({
        complexity_points: Math.round(complexityPoints * 10) / 10, // Round to 1 decimal
        rag_score: Math.round(ragScore * 10) / 10,
        recommended_package: recommendedPackage
      })
      .eq('id', submissionId);

    if (updateError) {
      throw updateError;
    }

    // Log successful analysis
    console.log('Analysis completed:', {
      submissionId,
      complexityPoints: Math.round(complexityPoints * 10) / 10,
      ragScore: Math.round(ragScore * 10) / 10,
      recommendedPackage
    });

    return new Response(
      JSON.stringify({
        success: true,
        complexityPoints: Math.round(complexityPoints * 10) / 10,
        ragScore: Math.round(ragScore * 10) / 10,
        recommendedPackage
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );

  } catch (error: any) {
    console.error("Error in analyze-submission function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { 
          "Content-Type": "application/json", 
          ...corsHeaders 
        },
      }
    );
  }
};

serve(handler);