# Bestseller‑KI‑Agenten für KMU (DACH) – n8n‑fähig, DSGVO‑konform

Diese kuratierte Shortlist fokussiert auf verkaufstarke, agentische KI‑Lösungen für den DACH‑Mittelstand. Alle Use Cases sind mit n8n umsetzbar und unterscheiden sich klar von „einfachen Workflows“: Die Agenten verfügen über Tool‑Nutzung, persistente Memory/Verlauf, Planungs‑ und Entscheidungslogik sowie mehrschrittige Autonomie.

Querverweis: Siehe auch Katalog in `docs/ala-carte-ki-agenten-und-workflows.md` (hier priorisiert auf „Agenten“, nicht reine Workflows).

---

## Executive Summary (Top 5, verkaufstark)

- **Support‑Triage‑Agent (Zendesk/Freshdesk, Slack/Teams)**

  - **Impact**: −20–40% Ticket‑Workload, schnellere Erstreaktion, bessere SLA‑Einhaltung
  - **Warum Agent**: kontinuierliche Fall‑Memory, Tool‑Ausführung (Wissensbasis, Statuswechsel, Routing), mehrschrittige Entscheidungen

- **Forderungsmanagement/Mahnwesen‑Agent (lexoffice/DATEV)**

  - **Impact**: −15–30% DSO/Offene Posten, +5–15% Einzugserfolg, verbesserter Cashflow
  - **Warum Agent**: Debitoren‑Memory, Eskalationslogik, Verhandlungsoptionen, kanalübergreifend

- **Sales Follow‑Up & Lead‑Qualification Agent (HubSpot/Pipedrive)**

  - **Impact**: +15–25% Reply‑Rate, mehr qualifizierte Termine, kürzere Sales‑Zyklen
  - **Warum Agent**: Sequenzen mit Gedächtnis, Channel‑Wechsel, Kontextbezug aus CRM & Doks

- **Termin‑/Scheduling‑Agent (Microsoft 365/Google Cal, Cal.com)**

  - **Impact**: 10–25 h/Monat Zeitgewinn pro Person, No‑Show‑Rate ↓
  - **Warum Agent**: mehrschrittige Konfliktlösung, Re‑Scheduling, proaktive Erinnerungen, Voice‑Option

- **HR‑Screening‑Agent (Personio/ATS, M365)**
  - **Impact**: −30–50% Screening‑Zeit, schnellere Time‑to‑Hire
  - **Warum Agent**: CV‑Parsing mit Memory, dialogische Vorqualifikation, Kalender‑Orchestrierung

---

## Auswahlkriterien

- **Agentisch statt Workflow**: Tool‑Nutzung (API/DB/Docs), persistente **Memory**, autonome mehrschrittige Entscheidungen, Feedback‑Loops.
- **Sofortschmerz im KMU**: Support‑Backlog, Liquidität/DSO, Lead‑Follow‑Ups, Terminlast, Fachkräftemangel.
- **n8n‑fähig**: Vorhandene Integrationen (Zendesk, Freshdesk, HubSpot, Pipedrive, M365, Slack/Teams, lexoffice/DATEV via API/Connector/Email), LLM‑Knoten, Vektor‑/DB‑Knoten.
- **DSGVO/AI‑Act‑ready**: EU‑Hosting, Auditierbarkeit, Rechte/Rollen.

---

## 1) Support‑Triage‑Agent

**Problem (DACH‑KMU)**: Überlastete Support‑Teams, lange Antwortzeiten, SLA‑Risiken; stark wachsender KI‑Einsatz im Kundenservice.

**Warum Agent (vs Workflow)**:

- Nutzt Wissensbasis/RAG, kategorisiert & priorisiert, fragt bei Kunden nach, hält **Fall‑Memory** (Verlauf, frühere Antworten), eskaliert mit Begründung.
- Führt Tools aus: Ticketstatus setzen, Makros, interne Notizen, Wissensartikel vorschlagen, Slack/Teams Handover.

**n8n‑Bausteine**:

- `Zendesk`/`Freshdesk` Nodes; `LLM` (OpenAI/Anthropic/OpenRouter); `Postgres` + `pgvector`/`Supabase` für Memory; `Slack`/`Microsoft Teams`; `HTTP Request` für Wissenssuche; `Rate Limit`/`Queue`.

**KPI/ROI**:

- −20–40% Ticket‑Workload, 2–3× schnellere Erstreaktion; höhere CSAT/NPS.

**Quellen**: [Zendesk CX Trends 2024 (DE)](https://www.zendesk.de/blog/cx-trends-2024/), [CX Trends 2025 (DE)](https://cxtrends.zendesk.com/de/), [Horizont: Chatbots → KI‑Agenten](https://www.horizont.net/planung-analyse/nachrichten/cx-trends-2024-die-10-wichtigsten-cx-trends-fuer-die-kundeninteraktion-223002).

---

## 2) Forderungsmanagement/Mahnwesen‑Agent (Receivables)

**Problem**: Hohe Außenstände, manuelles Mahnwesen, Liquiditätsdruck.

**Warum Agent**:

- Übernimmt **mehrstufige** Zahlungserinnerungen, passt Tonalität an, verhandelt Raten, prüft Zahlungseingänge; merkt sich Debitoren‑Historie und Reaktionen.
- Kanäle: E‑Mail, ggf. WhatsApp/Brief via Dienstleister; Eskalationslogik mit Cut‑off‑Zeitpunkten.

**n8n‑Bausteine**:

- `lexoffice`/`DATEV` via API/Exports; `Email` In/Out; `LLM` für Texte; `Scheduler`; `Postgres` Memory (Debitorenprofil, Kontaktlog, Promises‑to‑Pay).

**KPI/ROI**:

- −15–30% Days‑Sales‑Outstanding (DSO), +5–15% Einzugserfolg, weniger manuelle Arbeit.

**Quellen**: [Lexware: KI in der Buchhaltung](https://www.lexware.de/wissen/buchhaltung-finanzen/kuenstliche-intelligenz-in-der-buchhaltung/), [autoMahntion (lexoffice‑Ökosystem)](https://automahntion.de/), [lexpand MahnExpert](https://www.lexpand.de/mahnexpert/).

---

## 3) Sales Follow‑Up & Lead‑Qualification Agent

**Problem**: Leads versanden, manuelle Nachfass‑Sequenzen, geringe Reply‑Rate.

**Warum Agent**:

- Plant **mehrschrittige** Sequenzen über Mail/LinkedIn/Telefon, erinnert sich an Interaktionen/Einwände, qualifiziert mit Fragen, bucht Termine, aktualisiert CRM‑Felder.

**n8n‑Bausteine**:

- `HubSpot`/`Pipedrive` Nodes; `LLM` (personalisierte Copy); `Scheduler`/`Wait`/`If`; `Microsoft 365`/`Google Calendar`; `Slack`/`Teams` Alerts; `Postgres` Memory.

**KPI/ROI**:

- +15–25% Reply‑Rate, mehr SQLs/Meetings, kürzere Zyklen; 10–25 h/Monat pro Rep frei.

**Quellen**: [n8n Integrationen: HubSpot](https://n8n.io/integrations/hubspot/), [Pipedrive↔Zendesk](https://n8n.io/integrations/pipedrive/and/zendesk/).

---

## 4) Termin‑/Scheduling‑Agent (mit Voice‑Option)

**Problem**: Hoher Koordinationsaufwand, Termin‑No‑Shows, ständiges Rescheduling.

**Warum Agent**:

- Versteht Präferenzen/Constraints, schlägt Slots vor, verschiebt eigenständig, sendet Erinnerungen, kann via **Voice** annehmen (Hotline/Bot), führt Kontext‑Memory.

**n8n‑Bausteine**:

- `Microsoft 365`/`Google Calendar`; `Cal.com`; `LLM`; `Webhook`/`Call` Provider; `Slack`/`Teams` Bestätigungen; `Postgres` Memory (Teilnehmer‑Historie).

**KPI/ROI**:

- 10–25 h/Monat Zeitgewinn/Person; No‑Show ↓, Customer Experience ↑.

**Quellen**: [Microsoft 365 Copilot für KMU (DE)](https://adoption.microsoft.com/de-de/copilot/smb/), [Copilot Business (DE)](https://www.microsoft.com/de-de/microsoft-365-copilot/business).

---

## 5) HR‑Screening‑Agent

**Problem**: Fachkräftemangel, hohe Screening‑Last, lange Time‑to‑Hire.

**Warum Agent**:

- Parst CVs, führt dialogische Vorqualifikation (Fragen/Antworten), bewertet nach Kriterien, koordiniert Interviews, hält **Kandidaten‑Memory**.

**n8n‑Bausteine**:

- `Personio`/ATS via API; `LLM` (Bewertung/Fragen); `Email`/`Teams`; `Calendar`; `Postgres` Memory (Scorecards, Gesprächsnotizen).

**KPI/ROI**:

- −30–50% Screening‑Zeit; mehr Pipeline‑Transparenz; bessere Candidate Experience.

**Quellen**: [Personio Assistant (DE)](https://www.personio.de/funktionen/assistant/), [Ankündigung AI‑Funktionen](https://www.personio.com/about-personio/press/Personio-announces-new-AI-driven-features/).

---

## „Runner‑ups“ (verkaufbar, aber oft 2. Welle)

- **Vertrags‑/Angebots‑Prüf‑Agent**: scannt Verträge/RFQs, checkt fehlende Angaben/Policies, markiert Risikoklauseln, erstellt Review‑Zusammenfassungen, lernt aus Feedback.

  - n8n: `SharePoint/Drive/Email` → `LLM` → `Reviewer Handover` (`Teams/Slack`), Memory in `Postgres`/`pgvector`.
  - ROI: −25–40% Review‑Zeit; geringeres Risiko.

- **IT‑Self‑Service‑Agent (intern)**: RAG über Confluence/Notion/Handbücher, geführte Troubleshoots, Ticketerstellung mit sauberem Kontext, Verlauf je Mitarbeiter:in.

  - n8n: `Confluence/Notion` → `Embeddings`/`pgvector` → `LLM` → `Helpdesk` Node; `Slack`/`Teams` Chat.

- **Compliance‑Checker für E‑Mail/Dokumente**: policy‑basiertes Flagging (DSGVO, Prozesse), Feedback‑Loop zur Präzisionssteigerung; Abweichungs‑Memory pro Abteilung.
  - n8n: `Email` Ingest → `LLM`/`Policy` → `Reviewer` → `Archive`/`DMS`.

---

## n8n‑Referenz‑Architektur (Agenten‑Bausteine)

- **LLM & Planning**: OpenAI/Anthropic via `LLM` Knoten; Tool‑Ausführung über `HTTP Request`/App‑Nodes; Guardrails & Retries.
- **Memory**: `Postgres` + `pgvector`/`Supabase` (Session‑/Fall‑/Kunden‑Kontext, Embeddings, Feedback‑Scores).
- **Integrationen**: `Zendesk`, `Freshdesk`, `HubSpot`, `Pipedrive`, `Microsoft 365`, `Google`, `Slack`, `Teams`, `lexoffice`/`DATEV` (API/Exports), `Cal.com`.
- **Orchestrierung**: `Webhook`, `Scheduler`, `Queue`, Fehlertoleranz/Idempotenz, Observability (Logs/Alerts).
- **DSGVO**: EU‑Hosting, Löschkonzepte, Rollen/Rechte, Audit‑Trails.

---

## Adoption‑Signale (DACH) & Belege

- Jedes dritte Unternehmen in Deutschland nutzt bereits KI; weitere 47% planen oder diskutieren Einsatz. Quelle: [Bitkom (DE)](https://www.bitkom.org/Presse/Presseinformation/Durchbruch-Kuenstliche-Intelligenz), Coverage: [ZDFheute](https://www.zdfheute.de/wirtschaft/ki-einsatz-unternehmen-bitkom-studie-100.html), [heise](https://www.heise.de/news/Bitkom-Jedes-dritte-Unternehmen-nutzt-Kuenstliche-Intelligenz-10644810.html).
- Kundenservice‑KI wird erwachsen: Von Chatbots zu **KI‑Agenten** mit Aufgabenverantwortung. Quellen: [Zendesk CX Trends 2024/25 (DE)](https://cxtrends.zendesk.com/de/), [Horizont](https://www.horizont.net/planung-analyse/nachrichten/cx-trends-2024-die-10-wichtigsten-cx-trends-fuer-die-kundeninteraktion-223002).
- Microsoft investiert in Copilot‑Adoption im KMU‑Segment. Quellen: [Copilot für KMU (DE)](https://adoption.microsoft.com/de-de/copilot/smb/), [Copilot Business (DE)](https://www.microsoft.com/de-de/microsoft-365-copilot/business).

---

## Umsetzung & Angebot (Kurz)

- Start mit 1 Pilot‑Team/Abteilung, 2–4 Wochen Time‑to‑Value; danach Roll‑out.
- Paketierung mit Care (Monitoring, Tuning, kleine Changes, Report); DSGVO‑Checkliste inklusive.
- Querverweis auf Preiskalkulation/CP in `docs/ala-carte-ki-agenten-und-workflows.md`.
