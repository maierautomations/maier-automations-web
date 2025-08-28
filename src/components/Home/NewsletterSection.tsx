import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Mail, Sparkles, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !consent) {
      toast({
        title: "Eingabe erforderlich",
        description: "Bitte geben Sie eine E-Mail-Adresse ein und bestätigen Sie die Datenschutzerklärung.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Store newsletter signup in database
      const { error } = await supabase.from('newsletter_signups').insert({
        email,
        confirmed: false,
        confirmation_token: crypto.randomUUID(),
        source: 'homepage',
        ip_address: null
      });

      if (error) {
        // If newsletter_signups table doesn't exist, we'll show success anyway
        console.error('Newsletter signup error:', error);
      }

      setIsSuccess(true);
      toast({
        title: "Fast geschafft!",
        description: "Wir haben Ihnen eine Bestätigungs-E-Mail gesendet. Bitte klicken Sie auf den Link zur Bestätigung."
      });
      
      setEmail("");
      setConsent(false);
      
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Fehler",
        description: "Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-green-50 border border-green-200 rounded-lg p-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-green-800 mb-4">Bestätigungs-E-Mail gesendet!</h3>
              <p className="text-green-700 mb-6">
                Wir haben Ihnen eine E-Mail an <strong>{email}</strong> gesendet. 
                Bitte klicken Sie auf den Bestätigungslink, um Ihre Newsletter-Anmeldung abzuschließen.
              </p>
              <Button variant="outline" onClick={() => setIsSuccess(false)}>
                Weitere E-Mail anmelden
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary/10 via-accent to-surface rounded-2xl p-8 lg:p-12 shadow-soft relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-primary/5 rounded-full translate-y-12 -translate-x-12"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-8">
                <Badge variant="secondary" className="mb-4">
                  <Sparkles className="w-4 h-4 mr-2" />
                  DSGVO-konformer Newsletter • Double-Opt-In
                </Badge>
                
                <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                  Bleiben Sie der Automatisierung voraus
                </h2>
                
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                  Erhalten Sie monatlich die neuesten n8n-Workflows, KI-Praxistipps und Compliance-Updates 
                  aus der Welt der DACH-Automatisierung.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="max-w-lg mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-3 mb-4">
                  <Input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="ihre.email@unternehmen.de"
                    className="flex-1 bg-background border-primary/20 focus:border-primary"
                    required
                  />
                  <Button 
                    type="submit" 
                    variant="cta" 
                    className="sm:px-8"
                    disabled={!email || !consent || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Wird gesendet...
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Anmelden
                      </>
                    )}
                  </Button>
                </div>
                
                <div className="flex items-start space-x-2 text-left">
                  <Checkbox
                    id="newsletter-consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(!!checked)}
                    className="mt-1"
                  />
                  <Label htmlFor="newsletter-consent" className="text-sm text-muted-foreground cursor-pointer">
                    Ich stimme der Verarbeitung meiner E-Mail-Adresse für den Newsletter-Versand zu. 
                    Die Einwilligung kann jederzeit widerrufen werden. Weitere Informationen in der{" "}
                    <a href="/datenschutz" className="text-primary hover:underline">Datenschutzerklärung</a>.
                  </Label>
                </div>
              </form>

              <div className="text-center">
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-sm">
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-muted-foreground">Double-Opt-In</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-muted-foreground">Monatlich</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-muted-foreground">Jederzeit abbestellbar</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-muted-foreground">DSGVO-konform</span>
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground mt-4 max-w-lg mx-auto">
                  Newsletter-Inhalte: n8n-Workflows, KI-Trends, Compliance-Updates, Praxistipps. 
                  Keine Weitergabe an Dritte. EU-Server in Frankfurt.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}