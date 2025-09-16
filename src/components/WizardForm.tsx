import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { WizardProgress } from "@/components/ui/wizard-progress";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle, 
  Loader2, 
  Globe, 
  User, 
  Building2, 
  Target, 
  Database, 
  FileText, 
  Activity, 
  Shield, 
  Calendar, 
  AlertCircle 
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

interface WizardData {
  // Step 0 - URL Analysis
  websiteUrl: string;
  websiteAnalysisConsent: boolean;
  
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
  websiteUrl: "",
  websiteAnalysisConsent: false,
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

const wizardSteps = [
  { id: 0, label: "Website", icon: <Globe className="w-5 h-5" />, isOptional: true },
  { id: 1, label: "Kontakt", icon: <User className="w-5 h-5" /> },
  { id: 2, label: "Bereich", icon: <Building2 className="w-5 h-5" /> },
  { id: 3, label: "Ziele", icon: <Target className="w-5 h-5" /> },
  { id: 4, label: "Systeme", icon: <Database className="w-5 h-5" /> },
  { id: 5, label: "Daten", icon: <FileText className="w-5 h-5" /> },
  { id: 6, label: "Volumen", icon: <Activity className="w-5 h-5" /> },
  { id: 7, label: "Sicherheit", icon: <Shield className="w-5 h-5" /> },
  { id: 8, label: "Zeitplan", icon: <Calendar className="w-5 h-5" /> },
  { id: 9, label: "Problem", icon: <AlertCircle className="w-5 h-5" /> }
];

export function WizardForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [data, setData] = useState<WizardData>(initialData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);
  const { toast } = useToast();

  const totalSteps = 10; // URL + Contact + 8 steps
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
        website_url: data.websiteUrl || null,
        website_analysis_consent: data.websiteAnalysisConsent,
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

      // Trigger CP calculation in background
      if (insertData?.id) {
        supabase.functions.invoke('cp-calculator', {
          body: { submissionId: insertData.id }
        }).catch(err => console.error('CP calculation error:', err));
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
      <div className="max-w-4xl mx-auto space-y-6">
        <Card className="text-center">
          <CardContent className="p-8">
            <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Analyse abgeschlossen!</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              Vielen Dank für Ihre Angaben. Wir berechnen gerade Ihre Complexity Points und 
              erstellen eine maßgeschneiderte Empfehlung für Sie.
            </p>
          </CardContent>
        </Card>
        
        <Card className="bg-gradient-to-br from-primary/10 to-accent/10">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold text-center mb-6">Ihre vorläufige Einschätzung</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">≈ 6-8 CP</div>
                <div className="text-sm text-muted-foreground">Geschätzte Complexity Points</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-green-600 mb-2">Core Paket</div>
                <div className="text-sm text-muted-foreground">Empfohlenes Paket</div>
              </div>
              <div className="text-center p-4 bg-background rounded-lg">
                <div className="text-2xl font-bold text-blue-600 mb-2">3-5 Wochen</div>
                <div className="text-sm text-muted-foreground">Geschätzte Umsetzungszeit</div>
              </div>
            </div>
            
            <div className="text-center space-y-4">
              <p className="text-muted-foreground">
                Diese Einschätzung basiert auf Ihren Angaben. Unser Team erstellt eine detaillierte 
                Analyse und meldet sich binnen 24 Stunden mit der finalen Empfehlung bei Ihnen.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-primary hover:bg-primary-hover">
                  <Globe className="w-4 h-4 mr-2" />
                  Termin für Beratung buchen
                </Button>
                <Button variant="outline" onClick={() => window.location.href = '/'}>
                  Zurück zur Startseite
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="p-6">
            <h4 className="font-semibold mb-3">💡 Was passiert als Nächstes?</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <div className="font-medium text-primary">1. Analyse (24h)</div>
                <div className="text-muted-foreground">Detaillierte CP-Berechnung und Roadmap-Erstellung</div>
              </div>
              <div>
                <div className="font-medium text-primary">2. Empfehlung (E-Mail)</div>
                <div className="text-muted-foreground">Persönliche Empfehlung mit Preisangabe und Zeitplan</div>
              </div>
              <div>
                <div className="font-medium text-primary">3. Beratungsgespräch</div>
                <div className="text-muted-foreground">30-Min-Gespräch zur Verfeinerung der Anforderungen</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 0: // URL Analysis (Optional)
        return (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold mb-2">Website-Analyse (Optional)</h2>
              <p className="text-muted-foreground">Geben Sie Ihre Website-URL ein für eine automatische Potenzial-Analyse.</p>
            </div>
            
            <div>
              <Label htmlFor="websiteUrl">Website-URL (optional)</Label>
              <Input
                id="websiteUrl"
                type="url"
                value={data.websiteUrl}
                onChange={(e) => setData(prev => ({ ...prev, websiteUrl: e.target.value }))}
                placeholder="https://ihr-unternehmen.de"
              />
            </div>
            
            {data.websiteUrl && (
              <div className="flex items-start space-x-2">
                <Checkbox
                  id="websiteAnalysisConsent"
                  checked={data.websiteAnalysisConsent}
                  onCheckedChange={(checked) => setData(prev => ({ ...prev, websiteAnalysisConsent: !!checked }))}
                />
                <Label htmlFor="websiteAnalysisConsent" className="cursor-pointer text-sm leading-relaxed">
                  Ich erlaube die Analyse öffentlich zugänglicher Inhalte meiner Website zur 
                  Identifikation von Automatisierungspotenzialen. Es werden keine personenbezogenen Daten erfasst.
                </Label>
              </div>
            )}
            
            <div className="p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Datenschutz:</strong> Wir analysieren nur öffentlich zugängliche Inhalte Ihrer Website 
                (keine Login-Bereiche, keine personenbezogenen Daten). Die Analyse hilft uns, bessere Empfehlungen zu geben.
              </p>
            </div>
          </div>
        );

      case 1: // Contact Information
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

      case 2: // Branche & Abteilung
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

      case 3: // Ziele
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

      case 4: // Genutzte Systeme
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

      case 5: // Datenlage
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

      case 6: // Volumen & Häufigkeit
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

      case 7: // Datenschutz & Region
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

      case 8: // Zeit- & Budgetrahmen
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

      case 9: // Pain Point
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
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Visual Progress System */}
      <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-0 shadow-soft">
        <WizardProgress 
          steps={wizardSteps} 
          currentStep={currentStep}
          className="mb-4"
        />
      </Card>
      
      {/* Main Content Card */}
      <Card className="shadow-elevated">
        <CardHeader className="pb-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-foreground">
              {wizardSteps[currentStep]?.label}
            </h2>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-6">
          {renderStep()}
          
          <div className="flex justify-between pt-6">
            <Button
              variant="outline"
              onClick={handlePrev}
              disabled={currentStep === 0}
              className="min-w-[120px]"
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
                <Button onClick={handleSubmit} disabled={isSubmitting} className="min-w-[200px]">
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Wird übermittelt...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2" />
                      Analyse anfordern
                    </>
                  )}
                </Button>
              ) : (
                <Button onClick={handleNext} className="min-w-[120px]">
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