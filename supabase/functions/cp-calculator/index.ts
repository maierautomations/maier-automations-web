import "jsr:@supabase/functions-js/edge-runtime.d.ts";

interface WizardSubmission {
  goals: string[];
  current_systems: string[];
  document_types: string[];
  data_volume: string;
  source_requirements: boolean;
  monthly_queries: number;
  usage_frequency: string;
  data_category: string;
  eu_processing_only: boolean;
  on_premise_required: boolean;
  main_pain_point: string;
  industry: string[];
  department: string[];
  website_url?: string;
}

interface CPCalculationResult {
  total_cp: number;
  breakdown: {
    workflows: number;
    agents: number;
    rag_pro: number;
    extras: number;
  };
  recommended_package: string;
  rag_recommended: boolean;
  reasoning: string[];
  price_range: string;
  timeframe_estimate: string;
}

function calculateComplexityPoints(submission: WizardSubmission): CPCalculationResult {
  let workflows = 0;
  let agents = 0;
  let ragPro = 0;
  let extras = 0;
  const reasoning: string[] = [];
  
  // Base workflows based on goals and systems
  const systemCount = submission.current_systems?.length || 0;
  const goalCount = submission.goals?.length || 0;
  
  // Base workflows (1 CP each)
  workflows = Math.min(goalCount, 3); // Max 3 base workflows
  if (systemCount > 2) {
    workflows += 1; // Additional workflow for complex integrations
    reasoning.push("Zusätzlicher Workflow für komplexe System-Integrationen");
  }
  
  // Determine if agents are needed (2 CP each)
  const needsAgent = submission.goals?.some(goal => 
    goal.includes("Kundenanfragen") || 
    goal.includes("Antworten") || 
    goal.includes("Entscheidung") ||
    goal.includes("Priorisierung")
  ) || false;
  
  if (needsAgent) {
    agents = 1;
    reasoning.push("KI-Agent für intelligente Entscheidungsfindung empfohlen");
  }
  
  // Check if RAG Pro is recommended (3-4 CP)
  const documentTypes = submission.document_types?.length || 0;
  const hasLargeDataVolume = submission.data_volume === "> 10.000 Dokumente" || 
                             submission.data_volume === "1.000-10.000 Dokumente";
  const needsSources = submission.source_requirements;
  const highQueryVolume = (submission.monthly_queries || 0) > 100;
  
  if ((documentTypes >= 3 || hasLargeDataVolume || needsSources || highQueryVolume) && 
      submission.document_types?.some(type => type.includes("PDF") || type.includes("Word") || type.includes("Excel"))) {
    ragPro = 4; // Higher CP for complex RAG requirements
    reasoning.push("RAG Pro empfohlen für umfangreiche Wissensverarbeitung mit Quellenangaben");
  }
  
  // Extra complexity points
  if (systemCount > 3) {
    extras += 1;
    reasoning.push("+1 CP für mehr als 3 System-Integrationen");
  }
  
  if (submission.on_premise_required) {
    extras += 1;
    reasoning.push("+1 CP für On-Premise-Deployment");
  }
  
  if (submission.data_category === "Personenbezogen" && submission.eu_processing_only) {
    extras += 1;
    reasoning.push("+1 CP für erhöhte Compliance-Anforderungen");
  }
  
  const totalCP = workflows + (agents * 2) + ragPro + extras;
  
  // Package recommendation
  let recommendedPackage: string;
  let priceRange: string;
  let timeframeEstimate: string;
  
  if (totalCP <= 3) {
    recommendedPackage = "Starter";
    priceRange = "€3.000 - €3.600 Setup + €300-€540/Monat";
    timeframeEstimate = "2-3 Wochen";
  } else if (totalCP <= 6) {
    recommendedPackage = "Core";
    priceRange = "€6.000 - €7.500 Setup + €600-€1.125/Monat";
    timeframeEstimate = "3-5 Wochen";
  } else if (totalCP <= 10) {
    recommendedPackage = "Scale";
    priceRange = "€10.000 - €12.000 Setup + €1.000-€1.800/Monat";
    timeframeEstimate = "4-7 Wochen";
  } else {
    recommendedPackage = "Custom";
    priceRange = "Individuell (>€12.000)";
    timeframeEstimate = "6-12 Wochen";
  }
  
  return {
    total_cp: totalCP,
    breakdown: {
      workflows,
      agents,
      rag_pro: ragPro,
      extras
    },
    recommended_package: recommendedPackage,
    rag_recommended: ragPro > 0,
    reasoning,
    price_range: priceRange,
    timeframe_estimate: timeframeEstimate
  };
}

Deno.serve(async (req: Request) => {
  // CORS headers
  const corsHeaders = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  };

  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const { submissionId } = await req.json();
    
    if (!submissionId) {
      return new Response(
        JSON.stringify({ error: 'Missing submissionId' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Get Supabase client (this would need to be set up properly)
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    
    // Fetch submission data
    const response = await fetch(`${supabaseUrl}/rest/v1/wizard_submissions?id=eq.${submissionId}`, {
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      }
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch submission');
    }
    
    const submissions = await response.json();
    const submission = submissions[0];
    
    if (!submission) {
      return new Response(
        JSON.stringify({ error: 'Submission not found' }),
        { 
          status: 404, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Calculate CP
    const cpResult = calculateComplexityPoints(submission);
    
    // Update submission with results
    const updateResponse = await fetch(`${supabaseUrl}/rest/v1/wizard_submissions?id=eq.${submissionId}`, {
      method: 'PATCH',
      headers: {
        'apikey': supabaseKey,
        'Authorization': `Bearer ${supabaseKey}`,
        'Content-Type': 'application/json',
        'Prefer': 'return=representation'
      },
      body: JSON.stringify({
        complexity_points: cpResult.total_cp,
        rag_score: cpResult.rag_recommended ? cpResult.breakdown.rag_pro : 0,
        recommended_package: cpResult.recommended_package,
        updated_at: new Date().toISOString()
      })
    });
    
    if (!updateResponse.ok) {
      throw new Error('Failed to update submission');
    }

    return new Response(
      JSON.stringify({
        success: true,
        submissionId,
        calculation: cpResult
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('CP Calculation error:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Internal server error',
        details: error.message 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});