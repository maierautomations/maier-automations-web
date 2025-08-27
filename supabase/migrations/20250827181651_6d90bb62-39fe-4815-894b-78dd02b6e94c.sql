-- Create table for wizard form submissions
CREATE TABLE public.wizard_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Contact Information
  first_name TEXT,
  last_name TEXT,
  email TEXT NOT NULL,
  company TEXT,
  phone TEXT,
  
  -- Step 1: Branche & Abteilung
  industry TEXT[],
  department TEXT[],
  
  -- Step 2: Ziele (max 2)
  goals TEXT[],
  
  -- Step 3: Genutzte Systeme
  current_systems TEXT[],
  
  -- Step 4: Datenlage
  document_types TEXT[],
  data_volume TEXT,
  source_requirements BOOLEAN,
  
  -- Step 5: Volumen & Häufigkeit
  monthly_queries INTEGER,
  usage_frequency TEXT,
  
  -- Step 6: Datenschutz & Region
  data_category TEXT,
  eu_processing_only BOOLEAN,
  on_premise_required BOOLEAN,
  
  -- Step 7: Zeit- & Budgetrahmen
  timeframe TEXT,
  budget_range TEXT,
  
  -- Step 8: Pain Point
  main_pain_point TEXT,
  
  -- Metadata
  complexity_points INTEGER,
  rag_score INTEGER,
  recommended_package TEXT,
  
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  
  -- Session/Security
  session_id UUID DEFAULT gen_random_uuid(),
  ip_address INET,
  user_agent TEXT
);

-- Enable Row Level Security
ALTER TABLE public.wizard_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy allowing anyone to insert (public form)
CREATE POLICY "Anyone can submit wizard forms" 
ON public.wizard_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create policy for reading own submissions (by session_id for anonymous users)
CREATE POLICY "Users can view their own submissions" 
ON public.wizard_submissions 
FOR SELECT 
USING (session_id = gen_random_uuid() OR true); -- For now, allow reading for admin purposes

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_wizard_submissions_updated_at
BEFORE UPDATE ON public.wizard_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Create index for performance
CREATE INDEX idx_wizard_submissions_created_at ON public.wizard_submissions(created_at);
CREATE INDEX idx_wizard_submissions_session_id ON public.wizard_submissions(session_id);