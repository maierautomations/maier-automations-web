## General Improvements

- Auf der Kontaktseite unterhalb des Formulars Cal.com Integration hinzufügen (für Cal.com Integration bitte docs/Calcom_integration.md beachten - dort ist der Code für die Integration)
- Auf der Hero-Sektion auf der Startseite unter den CTA Buttons: Statt 100% DSGVO: '60% weniger Routinearbeit' und darunter in kleiner Schrift "durch KI-Agenten & Workflows", statt 3 Wochen Bis Go-Live: 'Kickoff in 48h' und darunter in kleiner Schrift "Go‑Live nach 3 Wochen.\*" (Das Sternchen in den AGBs als Disclaimer mit "Voraussetzung: Inhalte und Zugänge liegen vor; Umfang gemäß Paketbeschreibung."), statt n8n Cloud: '500+ Integrationen' (überall wo 50 Integrationen stehen, bitte 500+ Integrationen verwenden) und darunter in kleiner Schrift "über n8n-Cloud"
- CTA konsistent: “Analyse starten” überall gleich benennen
- Hero-Headline H1 auf Startseite ändern zu: H1 & Typewriter - Neue H1 (statisch): 'KI‑Automatisierungen für KMU – DSGVO‑konform' dann: Typed‑Zeile (darunter, rotiert 2–3x, dann Stopp):
  - Routinearbeit reduzieren
  - Antwortzeiten verkürzen
  - Fehler senken
    Optional: Transparenz erhöhen
    Timing: ~0.8–1.2s tippen, ~1–1.5s halten, dann nächste Phrase
    Mobil: max. 1 Phrase oder Effekt deaktivieren
    A11y/Perf: prefers-reduced-motion respektieren; Containerhöhe fixieren (kein CLS); H1 bleibt statisch für LCP/SEO
    Siehe dafür eventuell @gsap-text-plugin.md für die Implementierung

## UI/UX Improvements

- Ersetze die isolierte Kacheln im Hero Bereich und im Process‑Block (und überall wo es vorkommt): “Schnell live 2–3 Wochen” durch:
  im Process‑Block: “Typischer Zeitrahmen: 2–4 Wochen”
- Bei dem Bereich auf der Startseite bei "Intelligente Automatisierung mit messbaren Ergebnissen" unter der Unterzeile eine Trust‑Leiste: EU‑Server Frankfurt • DPA/SCCs • RBAC • n8n Cloud hinzufügen und darunter 3 gleichgroße Feature‑Karten in einer Reihe (klickbar auf Detailseiten):
  - Intelligente KI‑Agenten:
  - n8n Workflows
  - Wissensassistent (RAG Pro)
    Jede Karte: 1 Satz Nutzen + Mini‑KPI (z. B. “50+ Integrationen”, “<2s Antwort”)
- Danach: Messbare Ergebnisse als KPI‑Zeile - Bspw: 60% Zeitersparnis • 24h Verfügbarkeit • 50+ Integrationen • <3s Antwortzeit
- Danach: Sicherheit & Compliance als volle Breite (kurz + Link auf Details)
- Danach: Ablauf (Process) in 4 Schritten: Discovery → Blueprint → Build → Handover
- Danach: Ausklappbare FAQ-Bereich mit den häufigsten Fragen und Antworten und auch weiterführenden Link auf die FAQ-Seite
- Danach: CTA "Analyse starten"

## Product & NavigationImprovements

- Newsletter System implementieren (Double-Opt-In)
- Eigene Seite für CP-System erstellen (Weiterführend auf der Pakete-Seite) und als Dropdown-Option auf der Pakete-Navigationsleiste hinzufügen
- Das CP System auf der Unterseite mit Stärken und Vorteilen genau erklären, Preisspanne erklären, Add-on System erklären und Berechnung anzeigen (maximale Transparenz) - siehe dafür bitte docs/cp-system.md
- Einen eigenen CP-Rechner auf der CP-System-Seite erstellen, damit der Kunde damit "rumspielen" kann und sich die Preise anzeigen lassen
- Eigenen Reiter für Produkte statt RAG Pro erstellen, RAG Pro sollte dann als Wissensassistent (RAG PRO) als Dropdown-Option auf der Produkt-Seite hinzufügen, dort sollte auch ein Dropdown für n8n-Workflows und Intelligente KI-Agenten hinzugefügt werden mit jeweils eigenen Unterseiten
- Oberreiter für Blog & Newsletter erstellen und als Dropdown-Option auf der Navigationsleiste hinzufügen
- FAQ-Seite als Dropdown-Option auf der Navigationsleiste hinzufügen mit Schema.org: Echte Einwände (Datenschutz, On‑Prem, Kostenkontrolle, Laufzeit) + FAQPage‑JSON‑LD.
- Möglichkeit geben, einzelne Workflows oder KI Agenten zu kaufen (unter den einzelnen Paketen zentral auf der Produkt-Seite)
- Mini‑ROI‑Rechner erstellen und sinnvoll platzieren: Zeitersparnis × Lohnkosten = Payback (Monate).

## Preise für Pakete/CP-System

- siehe dafür bitte docs/cp-system.md

## Funnel Improvements

Generelle Improvements der Funnel-Seite:

Spezifische Improvements der Funnel-Seite:

- Bei Branche unter Option 'Sonstiges' einen Textfeld für die Branche hinzufügen
- Bei Ziele als Option bitte sonstige Ziele mit Eingabe hinzufügen
- Bei Systeme bitte folgende Antworttypen implementieren:
  Suchbares Multi-Select (Command/Combobox) mit Kategorien
  CRM: Salesforce, HubSpot, Pipedrive, MS Dynamics, Eigenlösung, Kein CRM
  Kommunikation: E‑Mail, Slack, Teams, WhatsApp Business, Telegram, Website-Chat
  Wissensquellen: Confluence, SharePoint, Notion, Google Drive, Lokale Dateien, Intranet
  Ticketing/Projekt: Zendesk, Freshdesk, Jira, Asana (optional erweitern)
  Bei allen Antworttypen: "Sonstiges + Eingabe”, “Weiß nicht”
- Volumen und Häufigkeit entfernen
- Datenschutz & Region rausnehmen
- Zeitplan könnte auch entfernt werden
- Kontaktangaben als letzten Schritt implementieren & mit Pain Point zusammenfügen

### Hinweis zum Scope

Bitte keine Elemente (Texte, Buttons, Layouts etc.) ändern, die hier nicht explizit genannt sind. Ausnahmen nur, wenn die Anpassung direkt zur Umsetzung der oben gelisteten Verbesserungen erforderlich ist.

## Mögliche weitere Aufgaben (erstmal nicht wichtig)

- 1–2 Mini‑Case‑Studies: Problem → Lösung (Workflows/Agenten) → Metriken → Zitat → CTA “Analyse starten”.
  Brand-Consistency:

- Style-Guide dokumentieren
- Farb-Palette optimieren
- Typography-Scale verfeinern

Multi-Language Foundation:

- i18n-System setup
- Deutsche Texte in Sprachdateien
- EN-Übersetzung vorbereiten

Cookie-Management:

- Cookie-Banner (nur wenn nötig)
- Consent-Management
- Analytics-Opt-out

## Langfristige Aufgaben (erstmal noch nicht)

- eigenen Chatbot erstellen
- Content Management System erstellen mit eigenem Admin-Dashboard/Panel
- Blog Seite erstellen (Artikel werden nicht geladen/sind nicht anzeigbar - eventuell aufgrund von fehlendem Content in Supabase?)
