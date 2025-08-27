import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";

export default function Imprint() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Impressum</h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    <strong>Maier Automations GmbH</strong><br />
                    Maximilianstraße 35<br />
                    80539 München<br />
                    Deutschland
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Kontakt</h2>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    <strong>Telefon:</strong> +49 (0) 89 123 456 78<br />
                    <strong>E-Mail:</strong> info@maier-automations.de<br />
                    <strong>Website:</strong> www.maier-automations.de
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Vertreten durch</h2>
                <div className="text-muted-foreground">
                  <p>Thomas Maier (Geschäftsführer)</p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Registereintrag</h2>
                <div className="text-muted-foreground space-y-2">
                  <p>
                    <strong>Handelsregister:</strong> Amtsgericht München<br />
                    <strong>Registernummer:</strong> HRB 123456<br />
                    <strong>Umsatzsteuer-ID:</strong> DE123456789
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                <div className="text-muted-foreground">
                  <p>
                    Thomas Maier<br />
                    Maximilianstraße 35<br />
                    80539 München<br />
                    Deutschland
                  </p>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">Haftungsausschluss</h2>
                
                <h3 className="text-lg font-medium text-foreground mb-2">Haftung für Inhalte</h3>
                <p className="text-muted-foreground mb-4">
                  Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den 
                  allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht 
                  unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach 
                  Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                </p>

                <h3 className="text-lg font-medium text-foreground mb-2">Haftung für Links</h3>
                <p className="text-muted-foreground mb-4">
                  Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                  Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten 
                  Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                </p>

                <h3 className="text-lg font-medium text-foreground mb-2">Urheberrecht</h3>
                <p className="text-muted-foreground">
                  Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen 
                  Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der 
                  Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">EU-Streitschlichtung</h2>
                <p className="text-muted-foreground">
                  Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
                  <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline ml-1">
                    https://ec.europa.eu/consumers/odr/
                  </a>
                  <br />
                  Unsere E-Mail-Adresse finden Sie oben im Impressum.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}