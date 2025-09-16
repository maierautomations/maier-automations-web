```text
Rolle:
Du bist Technical Program Manager und Staff Engineer. Du transformierst die unten eingefügte Spezifikation in einen vollständigen, priorisierten, umsetzbaren Aufgabenplan mit klaren Abhängigkeiten, Subtasks, Akzeptanzkriterien und lückenloser Abdeckung aller Punkte.

Input:
- improvements_md: (füge den gesamten Inhalt von docs/improvements.md zwischen <<<IMPROVEMENTS>>> … <<<END>>> ein)
- optionale Referenzen (falls vorhanden):
  - docs/Calcom_integration.md
  - docs/cp-system.md
  - ai_docs/gsap-text-plugin.md

Ziel:
- Erzeuge eine umfassende Aufgabenliste mit Subtasks in sinnvoller Reihenfolge (phasenweise Roadmap), die JEDEN einzelnen Punkt aus improvements_md abdeckt.
- Halte strikt den Scope ein: „Nur die explizit genannten Elemente ändern; Ausnahmen nur, wenn direkt zur Umsetzung erforderlich“.
- Liefere zusätzlich eine Nachverfolgbarkeit (Traceability), welche Aufgaben welchen Bullet‑Points der Quelle zugeordnet sind.

Arbeitsanweisungen:
1) Strukturierung in Epics/Phasen
   - Epics: General Improvements; UI/UX Improvements; Product & Navigation Improvements; Preise/CP-System; Funnel Improvements; Backlog (Mögliche weitere Aufgaben); Langfristig.
   - Phasen (chronologisch):
     1. Foundation & Quick Wins (P0)
     2. UI/UX & Content (P1)
     3. Produkt & Navigation (P1–P2)
     4. Funnel (P1–P2)
     5. QA, A11y, SEO, Performance, Launch (P0–P1, laufend).
   - Ordne jede Aufgabe genau einer Phase zu und gib eine Reihenfolge (order) innerhalb der Phase an.

2) Aufgabenformat (für JEDE Aufgabe)
   - id: kebab-case, stabil
   - title: prägnant, deutsch
   - epic: s. o.
   - phase: s. o.
   - order: integer (1..N innerhalb der Phase)
   - priority: P0 (kritisch), P1 (hoch), P2 (mittel), P3 (niedrig)
   - description: knappe Zielbeschreibung (Outcome-orientiert)
   - dependencies: [ids] (vorab zu erledigende Tasks)
   - references: z. B. ["docs/Calcom_integration.md"] falls relevant
   - estimate: S (≤1h), M (1–3h), L (3–8h), XL (1–3d)
   - labels: z. B. ["frontend","content","SEO","A11y","perf","schema-org"]
   - acceptance_criteria: stichpunktartig, testbar
   - subtasks: Array von Objekten:
     - id, title, steps (2–6 Schritte, konkret), acceptance_criteria, estimate, dependencies?

3) Abdeckung & Traceability
   - JEDEN Bullet‑Point aus improvements_md in min. eine Aufgabe übersetzen.
   - Erzeuge eine „traceability“‑Sektion: Liste aller Originalpunkte (mit Abschnitt/Zeile oder paraphrasiertem Bullet) → zugehörige task_ids.
   - Markiere Punkte, die „erstmal nicht wichtig“ bzw. „langfristig“ sind, explizit in Backlog/Long‑term mit Priority P3 und ohne kurzfristige Phase.

4) Wichtige inhaltliche Leitplanken (aus improvements_md extrahieren und berücksichtigen)
   - CTA vereinheitlichen: “Analyse starten”.
   - Hero: neue H1, Typewriter‑Zeile (Timing), prefers-reduced-motion, fixe Containerhöhe (kein CLS), mobil ggf. 1 Phrase/aus.
   - Kennzahlen/Texte anpassen: z. B. „500+ Integrationen“ statt 50 (konsistent).
   - Trust-Leiste, KPI-Zeile, Security & Compliance, Prozess (Discovery → Blueprint → Build → Handover), FAQ (inkl. FAQPage JSON‑LD).
   - Cal.com Integration auf Kontaktseite nach Vorgabe (docs/Calcom_integration.md).
   - CP‑System: eigene Seite, Dropdown in Navigation, Transparenz & Rechner (docs/cp-system.md).
   - Newsletter (Double-Opt-In).
   - Produkte/Navigation: neue Struktur mit Dropdowns (Produkte, RAG Pro/Wissensassistent, n8n‑Workflows, Intelligente KI‑Agenten), Blog & Newsletter, FAQ.
   - Funnel-Änderungen (Formfelder/Typen, Optionen „Sonstiges + Eingabe“, bestimmte Felder entfernen/zusammenführen).
   - Scope‑Guardrail: Keine Änderungen außerhalb der explizit genannten Punkte, außer zwingend nötig zur funktionalen Umsetzung.

5) Qualitätsanforderungen (Definition of Done je Aufgabe + global)
   - A11y: keyboard‑navigierbar, ARIA wo sinnvoll, Kontrast, Focus states.
   - Performance: vermeide CLS/LCP‑Probleme; animations respects prefers-reduced-motion; lazy-loading wo sinnvoll.
   - SEO: semantische Struktur, Metadaten, korrekte Überschriftenhierarchie, Schema.org (FAQPage).
   - Konsistenz: Sprache Deutsch, Terminologie einheitlich (CTA, Integrationen etc.).
   - Testing: manuelle Prüfschritte in acceptance_criteria; wo sinnvoll Unit/Smoke‑Checks benennen.

6) Output
   - Liefere ZWEI Artefakte:
     A) markdown_plan: Menschlich lesbarer Projektplan (Phasen → Aufgaben → Subtasks) als Markdown mit Checklisten und Abhängigkeiten.
     B) json_tasks: Maschinenlesbares JSON nach folgendem Schema:

{
  "phases": [
    { "id": "phase-foundation", "name": "Foundation & Quick Wins", "order": 1, "task_ids": ["..."] }
  ],
  "tasks": [
    {
      "id": "task-calcom-kontaktseite",
      "title": "Cal.com auf Kontaktseite integrieren",
      "epic": "General Improvements",
      "phase": "Foundation & Quick Wins",
      "order": 1,
      "priority": "P0",
      "description": "Cal.com unterhalb des Kontaktformulars integrieren.",
      "dependencies": [],
      "references": ["docs/Calcom_integration.md"],
      "estimate": "M",
      "labels": ["frontend","integration"],
      "acceptance_criteria": [
        "Cal.com Widget wird unter dem Formular geladen.",
        "Keine CLS; mobil responsiv; DSGVO‑konforme Einbindung."
      ],
      "subtasks": [
        {
          "id": "sub-calcom-embed",
          "title": "Widget einbinden",
          "steps": ["Embed‑Code einfügen", "Stile prüfen", "Mobil testen"],
          "acceptance_criteria": ["Widget lädt und ist nutzbar auf Desktop/Mobil"],
          "estimate": "S"
        }
      ]
    }
  ],
  "traceability": [
    { "source": "General Improvements > Cal.com Integration", "task_ids": ["task-calcom-kontaktseite"] }
  ]
}

7) Prüfe vor Abgabe:
   - Vollständigkeit: Jeder Bullet aus improvements_md ist abgedeckt.
   - Reihenfolge: Alle Abhängigkeiten bilden eine DAG; P0 zuerst; keine Zirkeln.
   - Klarheit: Jede Aufgabe hat messbare acceptance_criteria und ausführbare subtasks.
   - Scope: Keine extrahierten Wünsche außerhalb der Spezifikation (außer zwingende Implementierungsdetails).

Jetzt verarbeite den folgenden Inhalt:

<<<IMPROVEMENTS>>>
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

- Am Anfang des Funnels ein "Jetzt starten" Button für den Funnel hinzufügen & man sollte auf der Funnel-Seite auch die Möglichkeit haben, direkt mich kontaktieren zu können mit einem Button und optional kurzer Beschreibung der Pain Points oder was für Lösungen gewünscht werden, ohne dass man den Funnel durchlaufen muss.
- Also sollte die Seite, nachdem man auf "Kostenlose Analyse" klickt, direkt auf die Funnel-Seite weiterhin weiterleiten, wobei man zwei Option hat: 1. Funnel durchlaufen oder 2. direkt mich kontaktieren mit der kurzen Beschreibung der Pain Points oder was für Lösungen gewünscht werden.

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
<<<END>>>
```
