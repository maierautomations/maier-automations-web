import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-foreground mb-8">Datenschutzerklärung</h1>
            
            <div className="prose prose-lg max-w-none space-y-8">
              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
                
                <h3 className="text-lg font-medium text-foreground mb-2">Allgemeine Hinweise</h3>
                <p className="text-muted-foreground mb-4">
                  Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                  Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                  denen Sie persönlich identifiziert werden können.
                </p>

                <h3 className="text-lg font-medium text-foreground mb-2">Datenerfassung auf dieser Website</h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                  Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                  können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle" in dieser Datenschutzerklärung entnehmen.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">2. Hosting</h2>
                <p className="text-muted-foreground mb-4">
                  Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
                </p>
                
                <h3 className="text-lg font-medium text-foreground mb-2">Externes Hosting</h3>
                <p className="text-muted-foreground mb-4">
                  Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden, 
                  werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen, 
                  Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe 
                  und sonstige Daten, die über eine Website generiert werden, handeln.
                </p>
                
                <p className="text-muted-foreground mb-4">
                  Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und 
                  bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und 
                  effizienten Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">3. Allgemeine Hinweise und Pflichtinformationen</h2>
                
                <h3 className="text-lg font-medium text-foreground mb-2">Datenschutz</h3>
                <p className="text-muted-foreground mb-4">
                  Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln 
                  Ihre personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzbestimmungen 
                  sowie dieser Datenschutzerklärung.
                </p>

                <h3 className="text-lg font-medium text-foreground mb-2">Hinweis zur verantwortlichen Stelle</h3>
                <p className="text-muted-foreground mb-4">
                  Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                </p>
                <div className="text-muted-foreground mb-4">
                  <p>
                    Maier Automations GmbH<br />
                    Thomas Maier<br />
                    Maximilianstraße 35<br />
                    80539 München<br />
                    Deutschland
                  </p>
                  <p>
                    Telefon: +49 (0) 89 123 456 78<br />
                    E-Mail: info@maier-automations.de
                  </p>
                </div>

                <h3 className="text-lg font-medium text-foreground mb-2">Speicherdauer</h3>
                <p className="text-muted-foreground mb-4">
                  Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                  verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. 
                  Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung 
                  widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für 
                  die Speicherung Ihrer personenbezogenen Daten haben.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">4. Datenerfassung auf dieser Website</h2>
                
                <h3 className="text-lg font-medium text-foreground mb-2">Server-Log-Dateien</h3>
                <p className="text-muted-foreground mb-4">
                  Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, 
                  die Ihr Browser automatisch an uns übermittelt. Dies sind:
                </p>
                <ul className="text-muted-foreground mb-4 list-disc pl-6">
                  <li>Browsertyp und Browserversion</li>
                  <li>verwendetes Betriebssystem</li>
                  <li>Referrer URL</li>
                  <li>Hostname des zugreifenden Rechners</li>
                  <li>Uhrzeit der Serveranfrage</li>
                  <li>IP-Adresse</li>
                </ul>

                <h3 className="text-lg font-medium text-foreground mb-2">Kontaktformular</h3>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem 
                  Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung 
                  der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
                </p>

                <h3 className="text-lg font-medium text-foreground mb-2">Newsletter</h3>
                <p className="text-muted-foreground mb-4">
                  Wenn Sie den auf der Website angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen 
                  eine E-Mail-Adresse sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der 
                  Inhaber der angegebenen E-Mail-Adresse sind und mit dem Empfang des Newsletters einverstanden sind.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">5. Ihre Rechte</h2>
                <p className="text-muted-foreground mb-4">
                  Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer 
                  gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung 
                  oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, 
                  können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
                </p>
                
                <p className="text-muted-foreground mb-4">
                  Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer 
                  personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen 
                  Aufsichtsbehörde zu.
                </p>

                <p className="text-muted-foreground">
                  Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-foreground mb-4">6. Analyse-Tools und Werbung</h2>
                <p className="text-muted-foreground">
                  Diese Website verwendet keine Tracking-Tools oder externe Analyse-Services. Wir respektieren 
                  Ihre Privatsphäre und verzichten bewusst auf das Sammeln von Nutzerdaten zu Werbezwecken.
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