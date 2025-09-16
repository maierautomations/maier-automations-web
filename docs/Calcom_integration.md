## Cal.com Inline-Integration (Weg B)

Ziel: Auf der Kontaktseite unterhalb des Formulars eine Cal.com-Buchungsansicht inline einbetten, damit Kund:innen direkt einen Termin buchen können – mit sauberer UX, Datenschutz und Tracking.

### Ergebnis auf einen Blick

- **Platzierung**: Unterhalb des Kontaktformulars in `src/pages/Contact.tsx`
- **Variante**: Inline-Embed (Nutzer bleibt auf der Seite)
- **Branding**: Farben/Logo in Cal.com anpassen, optional eigene Subdomain
- **Datenschutz**: Consent beachten, DPA abschließen, Hinweis in Datenschutzerklärung
- **Tracking**: UTM-Parameter, Ereignisse in Analytics, optional Webhooks

---

### Voraussetzungen

1. Cal.com Account/Workspace ist eingerichtet und mit Kalender(n) verbunden (Google/Microsoft/Apple) ✅
2. Mindestens ein Event-Typ (z. B. 30 Minuten Beratung) existiert ✅
3. Verfügbarkeiten, Puffer, Vorlaufzeiten sind konfiguriert ✅
4. Videokonferenz-Integration (z. B. Zoom/Meet) ist verknüpft, falls benötigt ✅

Hinweis Datenschutz: Falls relevant, EU-Region in Cal.com wählen und Auftragsverarbeitungsvertrag (DPA) abschließen.

---

### Wo einbetten?

- In dieser Codebase liegt die Kontaktseite voraussichtlich in `src/pages/Contact.tsx`.
- Der Inline-Kalender kommt **unter das bestehende Kontaktformular** (siehe `docs/improvements.md`: „Auf der Kontaktseite unterhalb des Formulars Cal.com Integration hinzufügen“). So bleibt das Formular der erste Kontaktweg; Buchung ist der nächste Schritt – klare Hierarchie, gute UX.

---

### Schritt-für-Schritt Anleitung

1. Cal.com vorbereiten

   - Öffne deinen Event-Typ in Cal.com → prüfe Titel, Dauer, Beschreibung, Ort (z. B. Google Meet) und Zeitzone
   - Verfügbarkeit: Arbeitszeiten, Puffer zwischen Terminen, Tageslimit, Mindestvorlauf
   - Branding: Logo, Farben, optional Custom Domain (z. B. meet.deinedomain.com via CNAME)
   - Workflows: Erinnerungen (E-Mail/SMS), Bestätigungen, Follow-ups
   - Optional: Payments via Stripe, wenn erforderlich

2. Embed-Code generieren (ohne ihn hier abzubilden)

   - In Cal.com → gehe zum Event-Typ → „Share“ → „Embed“ → **Inline** auswählen
   - Konfiguriere die Optionen:
     - Sprache/Locale (de-DE), Zeitzonenanzeige
     - Startansicht (direkt Kalender vs. Event‑Details)
     - Sichtbarkeit von Header/Branding
     - Höhe/Breite, responsive Verhalten
     - Optional: Vorbefüllung (Name/E-Mail), Routing-Formulare
   - Kopiere den generierten Inline-Embed-Snippet für die spätere Einbindung.

   Hier ist der generierte Embed-Code:

   /_ First make sure that you have installed the package _/ ✅

```
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
export default function MyApp() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"30min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, [])
  return <Cal namespace="30min"
    calLink="dominik-maier/30min"
    style={{width:"100%",height:"100%",overflow:"scroll"}}
    config={{"layout":"month_view","theme":"auto"}}


  />;
};
```

3. Platzierung und Layout auf der Kontaktseite

   - Position: Direkt unterhalb des Formularbereichs in `src/pages/Contact.tsx`
   - Abstand: Genügend „Luft“ zum Formular (vertikales Spacing), eindeutige Überschrift wie „Direkt Termin buchen“
   - Breite: In einem Content-Container mit max. Breite (z. B. 768–960px) zentrieren
   - Höhe: Für Mobilgeräte genug Höhe einplanen (Faustregel: 900–1200px), damit der Kalender ohne Scroll-Traps nutzbar ist
   - Dark/Light Mode: Stelle sicher, dass die in Cal.com gesetzten Farben zum Theme der Seite passen
   - Fallback-Link: Unter dem Embed einen einfachen „Termin hier buchen“-Link zum Event-Typ anbieten, falls das Embed blockiert ist

4. UI/UX Best Practices

   - Überschrift + Kurze Nutzenkommunikation: „Sichere dir jetzt deinen persönlichen Beratungstermin“
   - Ladezustand: Deutlich machen, dass der Kalender geladen wird (Text oder Skeleton), um „leere Fläche“ zu vermeiden
   - Mobile: Teste auf iOS/Android; prüfe Scrollen innerhalb/außerhalb des Embeds
   - Barrierefreiheit: Ausreichender Kontrast, Fokus-Reihenfolge sinnvoll (Formular → Kalender)
   - Visuelle Konsistenz: Primärfarbe und Buttons in Cal.com an dein Design anpassen

5. Datenschutz & Consent

   - Das Inline-Embed lädt Drittinhalte. In deinem Consent-Tool (Cookie-Banner) eine Kategorie (z. B. „Funktional“) vorsehen und das Embed nur laden, wenn zugestimmt wurde
   - Datenschutzerklärung ergänzen: Zweck (Terminbuchung), Anbieter (Cal.com), Datenarten (Name, E-Mail, gebuchte Zeiten), Rechtsgrundlage, Aufbewahrung, Empfänger
   - DPA mit Cal.com, EU-Region konfigurieren, falls notwendig

6. Tracking & Erfolgsmessung

   - UTM-Parameter an deine Buchungslinks hängen (falls du zusätzlich Links verwendest)
   - In Analytics (z. B. GA4) ein Ziel/Ereignis „Termin gebucht“ definieren; verknüpfe es mit dem Cal.com-Bestätigungs-Event
   - Optional: Cal.com Webhooks/Zapier/Make nutzen, um Buchungen in CRM/Slack/Notion zu spiegeln und Conversions robuster zu zählen

7. Automatisierung (optional, aber empfehlenswert)

   - CRM synchronisieren (Kontakte & Deals bei Buchung anlegen)
   - Slack/Teams-Benachrichtigungen bei neuer Buchung
   - Videokonferenzen automatisch erzeugen (Meet/Zoom-Link)
   - Follow-up E-Mails/SMS per Cal.com-Workflows aussteuern

8. Qualitätssicherung (QA) – Checkliste

   - Testbuchung durchführen (verschiedene Geräte/Browser)
   - Zeitzonen-Handling prüfen (Anzeige und E-Mail-Kalendereintrag)
   - Pufferzeiten/Vorlauf greifen korrekt
   - Reschedule/Cancel Links funktionieren; E-Mails kommen zuverlässig an
   - Bezahlte Events: Zahlungsfluss und Rechnungen prüfen
   - Consent: Embed lädt nur nach Zustimmung; Fallback-Link vorhanden
   - Performance: Seite bleibt flüssig; keine Layout-Verschiebungen

9. Performance & Technik ohne Code
   - Embed nur auf der Kontaktseite laden (nicht global)
   - Lazy-Load nach Sichtbarkeit des Bereichs (sofern dein Setup das unterstützt)
   - Große Bilder/Assets oberhalb minimieren, damit der Kalender schnell sichtbar wird
   - Keine unnötigen weitere Embeds/Tracker auf derselben Seite

---

### Varianten & Erweiterungen

- Team-Verteilung: Round-Robin oder „Collective“ Events in Cal.com aktivieren
- Routing-Formulare: Je nach Antworten unterschiedliche Event-Typen anbieten (z. B. Sales vs. Support)
- Mehrsprachigkeit: Pro Sprache einen Event-Typ oder dynamische Locale im Embed nutzen
- Eigene Domain: meet.deinedomain.com stärkt Vertrauen und Markenauftritt

---

### Nützliche Links

- Cal.com Doku – Embed: https://cal.com/docs/embed/overview
- Cal.com Doku – Workflows: https://cal.com/docs/workflows
- Cal.com Doku – Webhooks/API: https://cal.com/docs/api/webhooks
- Cal.com Doku – Routing Forms: https://cal.com/docs/routing-forms

---

### Kurzfassung zur Umsetzung (ohne Code)

1. In Cal.com: Event-Typ prüfen → „Share“ → „Embed“ → Inline konfigurieren → Embed-Snippet kopieren
2. In deiner App: In `src/pages/Contact.tsx` den Inline-Kalender unter das Formular setzen (mit ausreichendem Abstand und sinnvoller Überschrift)
3. Branding/Theme in Cal.com auf dein Design abstimmen (Farben, Logo, ggf. Dark Mode)
4. Consent & Datenschutz klären; Datenschutzerklärung anpassen; DPA/EU-Region prüfen
5. Tracking & Automationen aufsetzen; Testbuchungen durchführen; mobile UX checken

---

Stand: 2025-09-15
