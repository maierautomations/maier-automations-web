import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="py-20 gradient-subtle">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Allgemeine Geschäftsbedingungen
              </h1>
              <p className="text-xl text-muted-foreground">
                Gültig ab: 1. Januar 2024
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-gray max-w-4xl mx-auto">
              <h2>§ 1 Geltungsbereich</h2>
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Verträge zwischen der
                Maier Automations GmbH (nachfolgend "Auftragnehmer") und dem Auftraggeber.
              </p>

              <h2>§ 2 Leistungsumfang</h2>
              <p>
                Der konkrete Leistungsumfang ergibt sich aus der jeweiligen Auftragsbestätigung
                und der vereinbarten Paketbeschreibung.
              </p>

              <h2>§ 3 Lieferzeiten und Projektdauer</h2>
              <p>
                <strong>* Hinweis zu Lieferzeiten:</strong> Die angegebenen Projektlaufzeiten
                (z.B. "Go-Live nach 3 Wochen") gelten unter der Voraussetzung, dass:
              </p>
              <ul>
                <li>Alle erforderlichen Inhalte und Zugänge rechtzeitig bereitgestellt werden</li>
                <li>Der Umfang gemäß der vereinbarten Paketbeschreibung eingehalten wird</li>
                <li>Notwendige Entscheidungen zeitnah getroffen werden</li>
                <li>Keine unvorhergesehenen technischen Hindernisse auftreten</li>
              </ul>
              <p>
                Bei Verzögerungen, die nicht vom Auftragnehmer zu vertreten sind, verschieben
                sich die Liefertermine entsprechend.
              </p>

              <h2>§ 4 Mitwirkungspflichten des Auftraggebers</h2>
              <p>
                Der Auftraggeber stellt alle für die Projektdurchführung erforderlichen
                Informationen, Zugänge und Materialien rechtzeitig zur Verfügung.
              </p>

              <h2>§ 5 Preise und Zahlungsbedingungen</h2>
              <p>
                Es gelten die zum Zeitpunkt der Auftragserteilung vereinbarten Preise.
                Alle Preise verstehen sich zuzüglich der gesetzlichen Mehrwertsteuer.
              </p>

              <h2>§ 6 Haftung</h2>
              <p>
                Die Haftung des Auftragnehmers ist auf Vorsatz und grobe Fahrlässigkeit beschränkt,
                soweit nicht Schäden an Leben, Körper oder Gesundheit betroffen sind.
              </p>

              <h2>§ 7 Datenschutz</h2>
              <p>
                Der Auftragnehmer verpflichtet sich zur Einhaltung der datenschutzrechtlichen
                Bestimmungen gemäß DSGVO. Details regelt die separate Datenschutzerklärung.
              </p>

              <h2>§ 8 Schlussbestimmungen</h2>
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist München.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}