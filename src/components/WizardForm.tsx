import { useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ArrowRight, CheckCircle, Loader2 } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface WizardData {
  // Contact
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  phone: string;
  
  // Step 1
  industry: string[];
  department: string[];
  
  // Step 2
  goals: string[];
  
  // Step 3
  currentSystems: string[];
  
  // Step 4
  documentTypes: string[];
  dataVolume: string;
  sourceRequirements: boolean;
  
  // Step 5
  monthlyQueries: string;
  usageFrequency: string;
  
  // Step 6
  dataCategory: string;
  euProcessingOnly: boolean;
  onPremiseRequired: boolean;
  
  // Step 7
  timeframe: string;
  budgetRange: string;
  
  // Step 8
  mainPainPoint: string;
}

const initialData: WizardData = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  phone: "",
  industry: [],
  department: [],
  goals: [],
  currentSystems: [],
  documentTypes: [],
  dataVolume: "",
  sourceRequirements: false,
  monthlyQueries: "",
  usageFrequency: "",
  dataCategory: "",
  euProcessingOnly: false,
  onPremiseRequired: false,
  timeframe: "",
  budgetRange: "",
  mainPainPoint: ""
};

export function WizardForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<WizardData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { toast } = useToast();

  const totalSteps = 9; // Contact + 8 steps
  const progress = ((currentStep + 1) / totalSteps) * 100;

  const handleArrayToggle = (field: keyof WizardData, value: string) => {
    setData(prev => {
      const currentArray = prev[field] as string[];
      const newArray = currentArray.includes(value)
        ? currentArray.filter(item => item !== value)
        : [...currentArray, value];
      
      // Special handling for goals (max 2)
      if (field === 'goals' && newArray.length > 2) {
        return prev;
      }
      
      return { ...prev, [field]: newArray };
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  const handleSubmit = async () => {
    if (!data.email || !data.firstName || !data.lastName) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie die Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { data: insertData, error } = await supabase.from('wizard_submissions').insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        company: data.company,
        phone: data.phone,
        industry: data.industry,
        department: data.department,
        goals: data.goals,
        current_systems: data.currentSystems,
        document_types: data.documentTypes,
        data_volume: data.dataVolume,
        source_requirements: data.sourceRequirements,
        monthly_queries: data.monthlyQueries ? parseInt(data.monthlyQueries) : null,
        usage_frequency: data.usageFrequency,
        data_category: data.dataCategory,
        eu_processing_only: data.euProcessingOnly,
        on_premise_required: data.onPremiseRequired,
        timeframe: data.timeframe,
        budget_range: data.budgetRange,
        main_pain_point: data.mainPainPoint,
        ip_address: null,
        user_agent: navigator.userAgent
      }).select('id').single();

      if (error) throw error;

      // Trigger analysis in background
      if (insertData?.id) {
        supabase.functions.invoke('analyze-submission', {
          body: { submissionId: insertData.id }
        }).catch(err => console.error('Analysis error:', err));
      }

      setIsCompleted(true);
      toast({
        title: "Vielen Dank!",
        description: "Ihre Anfrage wurde erfolgreich übermittelt. Wir analysieren Ihre Angaben und melden uns binnen 24 Stunden bei Ihnen.",
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Fehler",
        description: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isCompleted) {
    return (
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-8 text-center">
          <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold mb-4">Vielen Dank!</h2>
          <p className="text-muted-foreground mb-6">
            Ihre Anfrage wurde erfolgreich übermittelt. Unser Team analysiert Ihre Angaben und 
            meldet sich binnen 24 Stunden mit einer maßgeschneiderten Empfehlung bei Ihnen.
          </p>
          <Button onClick={() => window.location.href = '/'}>
            Zurück zur Startseite
          </Button>
        </CardContent>
      </Card>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0: // Contact Information
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Kontaktdaten</h2>
              <p className="text-muted-foreground">Damit wir uns bei Ihnen melden können.</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Vorname *</Label>
                <Input
                  id="firstName"
                  value={data.firstName}
                  onChange={(e) => setData(prev => ({ ...prev, firstName: e.target.value }))}
                  placeholder="Max"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Nachname *</Label>
                <Input
                  id="lastName"
                  value={data.lastName}
                  onChange={(e) => setData(prev => ({ ...prev, lastName: e.target.value }))}
                  placeholder="Mustermann"
                />
              </div>
            </div>
            
            <div>
              <Label htmlFor="email">E-Mail-Adresse *</Label>
              <Input
                id="email"
                type="email"
                value={data.email}
                onChange={(e) => setData(prev => ({ ...prev, email: e.target.value }))}
                placeholder="max@unternehmen.de"
              />
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="company">Unternehmen</Label>
                <Input
                  id="company"
                  value={data.company}
                  onChange={(e) => setData(prev => ({ ...prev, company: e.target.value }))}
                  placeholder="Mustermann GmbH"
                />
              </div>
              <div>
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  value={data.phone}
                  onChange={(e) => setData(prev => ({ ...prev, phone: e.target.value }))}
                  placeholder="+49 123 456 789"
                />
              </div>
            </div>
          </div>
        );

      case 1: // Branche & Abteilung
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Branche & Abteilung</h2>
              <p className="text-muted-foreground">In welchem Bereich sind Sie tätig?</p>
            </div>
            
            <div>
              <Label className="text-base font-medium">Branche</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Fertigung", "Handel", "Dienstleistung", "IT", "Gesundheit", "Finanzen", "Immobilien", "Bildung", "Sonstiges"].map((industry) => (
                  <Badge
                    key={industry}
                    variant={data.industry.includes(industry) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleArrayToggle('industry', industry)}
                  >
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <Label className="text-base font-medium">Abteilung</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Geschäftsführung", "Operations", "IT", "Vertrieb", "Marketing", "HR", "Buchhaltung", "Kundenservice"].map((dept) => (
                  <Badge
                    key={dept}
                    variant={data.department.includes(dept) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleArrayToggle('department', dept)}
                  >
                    {dept}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        );

      case 2: // Ziele
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Ihre Ziele</h2>
              <p className="text-muted-foreground">Was möchten Sie erreichen? (Wählen Sie maximal 2 aus)</p>
            </div>
            
            <div className="space-y-3">
              {[
                "Zeitersparnis durch Automatisierung",
                "Reduzierung manueller Fehler",
                "Bessere Datenqualität",
                "Schnellere Antworten auf Kundenanfragen",
                "Kostenoptimierung",
                "Compliance-Verbesserung",
                "Mitarbeiterentlastung",
                "Skalierung von Prozessen"
              ].map((goal) => (
                <div key={goal} className="flex items-center space-x-2">
                  <Checkbox
                    id={goal}
                    checked={data.goals.includes(goal)}
                    onCheckedChange={() => handleArrayToggle('goals', goal)}
                    disabled={!data.goals.includes(goal) && data.goals.length >= 2}
                  />
                  <Label htmlFor={goal} className="cursor-pointer">{goal}</Label>
                </div>
              ))}
            </div>
            
            {data.goals.length >= 2 && (
              <p className="text-sm text-muted-foreground">Sie haben die maximale Anzahl von 2 Zielen ausgewählt.</p>
            )}
          </div>
        );

      case 3: // Genutzte Systeme
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Genutzte Systeme</h2>
              <p className="text-muted-foreground">Welche Systeme verwenden Sie aktuell?</p>
            </div>
            
            <div className="space-y-4">
              <div>
                <Label className="text-base font-medium">CRM-Systeme</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Salesforce", "HubSpot", "Pipedrive", "Microsoft Dynamics", "Eigenlösung", "Kein CRM"].map((system) => (
                    <Badge
                      key={system}
                      variant={data.currentSystems.includes(system) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleArrayToggle('currentSystems', system)}
                    >
                      {system}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <Label className="text-base font-medium">Kommunikation</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["E-Mail", "Slack", "Teams", "WhatsApp Business", "Telegram", "Website-Chat"].map((system) => (
                    <Badge
                      key={system}
                      variant={data.currentSystems.includes(system) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleArrayToggle('currentSystems', system)}
                    >
                      {system}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div>
                <Label className="text-base font-medium">Wissensquellen</Label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["Confluence", "SharePoint", "Notion", "Google Drive", "Lokale Dateien", "Intranet"].map((system) => (
                    <Badge
                      key={system}
                      variant={data.currentSystems.includes(system) ? "default" : "outline"}
                      className="cursor-pointer"
                      onClick={() => handleArrayToggle('currentSystems', system)}
                    >
                      {system}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 4: // Datenlage
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Datenlage</h2>
              <p className="text-muted-foreground">Welche Art von Daten möchten Sie verarbeiten?</p>
            </div>
            
            <div>
              <Label className="text-base font-medium">Dokumententypen</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["PDFs", "Word-Dokumente", "Excel-Tabellen", "E-Mails", "Webseiten", "Datenbanken", "APIs", "Bilder/Scans"].map((type) => (
                  <Badge
                    key={type}
                    variant={data.documentTypes.includes(type) ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => handleArrayToggle('documentTypes', type)}
                  >
                    {type}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <Label className="text-base font-medium">Geschätzte Datenmenge</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["< 100 Dokumente", "100-1.000 Dokumente", "1.000-10.000 Dokumente", "> 10.000 Dokumente"].map((volume) => (
                  <Badge
                    key={volume}
                    variant={data.dataVolume === volume ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setData(prev => ({ ...prev, dataVolume: volume }))}
                  >
                    {volume}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="sourceRequirements"
                checked={data.sourceRequirements}
                onCheckedChange={(checked) => setData(prev => ({ ...prev, sourceRequirements: !!checked }))}
              />
              <Label htmlFor="sourceRequirements" className="cursor-pointer">
                Quellennachweise sind wichtig (z.B. für Compliance)
              </Label>
            </div>
          </div>
        );

      case 5: // Volumen & Häufigkeit
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Volumen & Häufigkeit</h2>
              <p className="text-muted-foreground">Wie intensiv wird das System genutzt?</p>
            </div>
            
            <div>
              <Label htmlFor="monthlyQueries">Geschätzte Anfragen pro Monat</Label>
              <Input
                id="monthlyQueries"
                type="number"
                value={data.monthlyQueries}
                onChange={(e) => setData(prev => ({ ...prev, monthlyQueries: e.target.value }))}
                placeholder="z.B. 500"
              />
            </div>
            
            <div>
              <Label className="text-base font-medium">Nutzungshäufigkeit</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Gelegentlich", "Täglich", "Mehrmals täglich", "Kontinuierlich"].map((freq) => (
                  <Badge
                    key={freq}
                    variant={data.usageFrequency === freq ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setData(prev => ({ ...prev, usageFrequency: freq }))}
                  >
                    {freq}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        );

      case 6: // Datenschutz & Region
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Datenschutz & Region</h2>
              <p className="text-muted-foreground">Welche Datenschutzanforderungen haben Sie?</p>
            </div>
            
            <div>
              <Label className="text-base font-medium">Kategorie der Daten</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Öffentlich", "Intern", "Vertraulich", "Personenbezogen"].map((category) => (
                  <Badge
                    key={category}
                    variant={data.dataCategory === category ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setData(prev => ({ ...prev, dataCategory: category }))}
                  >
                    {category}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="euProcessingOnly"
                  checked={data.euProcessingOnly}
                  onCheckedChange={(checked) => setData(prev => ({ ...prev, euProcessingOnly: !!checked }))}
                />
                <Label htmlFor="euProcessingOnly" className="cursor-pointer">
                  Datenverarbeitung nur in der EU
                </Label>
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="onPremiseRequired"
                  checked={data.onPremiseRequired}
                  onCheckedChange={(checked) => setData(prev => ({ ...prev, onPremiseRequired: !!checked }))}
                />
                <Label htmlFor="onPremiseRequired" className="cursor-pointer">
                  On-Premise-Lösung erforderlich
                </Label>
              </div>
            </div>
          </div>
        );

      case 7: // Zeit- & Budgetrahmen
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Zeit- & Budgetrahmen</h2>
              <p className="text-muted-foreground">Wann soll die Lösung implementiert werden?</p>
            </div>
            
            <div>
              <Label className="text-base font-medium">Gewünschter Zeitrahmen</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["Sofort", "In 1-3 Monaten", "In 3-6 Monaten", "In 6-12 Monaten", "Noch offen"].map((time) => (
                  <Badge
                    key={time}
                    variant={data.timeframe === time ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setData(prev => ({ ...prev, timeframe: time }))}
                  >
                    {time}
                  </Badge>
                ))}
              </div>
            </div>
            
            <div>
              <Label className="text-base font-medium">Budgetrahmen (optional)</Label>
              <div className="flex flex-wrap gap-2 mt-2">
                {["< 5.000 €", "5.000 - 15.000 €", "15.000 - 50.000 €", "> 50.000 €", "Noch offen"].map((budget) => (
                  <Badge
                    key={budget}
                    variant={data.budgetRange === budget ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setData(prev => ({ ...prev, budgetRange: budget }))}
                  >
                    {budget}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        );

      case 8: // Pain Point
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Ihr größter Pain Point</h2>
              <p className="text-muted-foreground">Beschreiben Sie kurz Ihr dringendstes Problem.</p>
            </div>
            
            <div>
              <Label htmlFor="mainPainPoint">Was beschäftigt Sie am meisten?</Label>
              <Textarea
                id="mainPainPoint"
                value={data.mainPainPoint}
                onChange={(e) => setData(prev => ({ ...prev, mainPainPoint: e.target.value }))}
                placeholder="z.B. Wir verlieren zu viel Zeit bei der Suche nach Informationen in verschiedenen Systemen..."
                rows={4}
              />
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between mb-4">
            <CardTitle>Bedarfsanalyse</CardTitle>
            <Badge variant="outline">
              Schritt {currentStep + 1} von {totalSteps}
            </Badge>
          </div>
          <Progress value={progress} className="w-full" />
        </CardHeader>
        
        <CardContent className="space-y-6">
          {renderStep()}
          
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Zurück
            </Button>
            
            <div className="flex gap-2">
              {currentStep > 0 && currentStep < totalSteps - 1 && (
                <Button variant="ghost" onClick={handleSkip}>
                  Überspringen
                </Button>
              )}
              
              {currentStep === totalSteps - 1 ? (
                <Button onClick={handleSubmit} disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Wird übermittelt...
                    </>
                  ) : (
                    "Analyse anfordern"
                  )}
                </Button>
              ) : (
                <Button onClick={handleNext}>
                  Weiter
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}