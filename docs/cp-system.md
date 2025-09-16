## CP‑System (Complexity Points): Transparente Preislogik für Workflows & KI‑Agenten

Das CP‑System macht Preise nachvollziehbar, planbar und fair. Statt Stunden zu schätzen, bemessen wir Komplexität und Ergebnisumfang in „Complexity Points“ (CP). So sehen Kund:innen bereits vor Projektstart, wie sich der Setup‑Preis und die monatliche Betreuung („Care“) zusammensetzen.

### Kurzfassung

- **Prinzip**: Ergebnisorientierte Kalkulation auf Basis von Komplexität – nicht auf Stunden.
- **Einheit**: 1 CP ≈ 1 signifikanter Workflow. Ein typischer n8n‑Agent (Tools + Memory) ≈ 2 CP. Ein RAG‑Agent (Premium) ≈ 3–4 CP.
- **Preisrahmen**: Standard‑CP‑Satz für Setup: **€800–€1.200** pro CP. Monthly Care: **10–15%** des Setup‑Preises/Monat.
- **Pakete**: Starter (3 CP), Core (6 CP), Scale (10 CP), sowie „RAG Agent Premium“ (3–4 CP als feste SKU).

---

## Was ist ein CP?

Ein Complexity Point (CP) ist eine neutrale Maßeinheit für Umfang und Schwierigkeit.

- **1 Workflow ≈ 1 CP**: Ein klar abgegrenzter, geschäftlich sinnvoller Automationsfluss mit Ein-/Ausgaben, Fehlerpfaden und QA.
- **n8n‑Agent (Tools + Memory) ≈ 2 CP**: Zustandsbehafteter Agent inkl. Tooling (z. B. Suche, DB, Kalender) und Kurzzeit‑Speicher.
- **RAG‑Agent (Premium) ≈ 3–4 CP**: Retrieval‑Augmented‑Generation inklusive Vektordatenbank, Chunking/Pipeline, Evaluations und Guardrails.

Heuristiken (Richtwerte) zur Selbst‑Einschätzung:

| Baustein                                                       | Typischer CP‑Wert |
| -------------------------------------------------------------- | ----------------- |
| Eigenständiger Workflow (inkl. QA)                             | 1,0 CP            |
| n8n‑Agent mit Tools + Memory                                   | 2,0 CP            |
| RAG‑Agent (Premium)                                            | 3,0–4,0 CP        |
| Neuer Connector (API/System), Standard‑Komplexität             | +0,25–0,5 CP      |
| Approval/HITL‑Schritt (Human‑in‑the‑Loop)                      | +0,5 CP           |
| On‑Prem/Local Deployment                                       | +0,5–1,0 CP       |
| Advanced Evaluations (z. B. Halluzinations‑Checks, Benchmarks) | +0,25–0,5 CP      |
| Custom UI/Frontend für Workflows/Agenten                       | +0,5–1,0 CP       |

Nicht jeder Sonderwunsch kostet extra: Was „typisch“ zum Paket gehört (sinnvolle Fehlerbehandlung, Logging, Basis‑Dokumentation) ist inklusive. Add‑ons fallen erst an, wenn explizit gewünscht oder erhöhte Anforderungen bestehen.

---

## Preislogik & Formeln

Standard‑CP‑Satz (Setup): **€800–€1.200 je CP**

Monthly Care (Monitoring/Tuning/Kleinänderungen): **10–15% des Setup‑Preises/Monat**

Formeln:

- \( Setup\text{-Preis} = CP\_{gesamt} \times CP\text{-Satz} \)
- \( Care\_{Monat} = Setup\text{-Preis} \times (10\%\ \text{bis}\ 15\%) \)

Hinweis: Für besonders anspruchsvolle Premium‑Komponenten (z. B. RAG) kann der effektive CP‑Satz am oberen Band liegen, um zusätzliche QA/Evals abzudecken.

---

## Pakete (DACH‑SMB‑freundliche Transparenz)

| Paket   | Enthaltene CP | Typischer Setup‑Preis | Monthly Care (10–15%) | Typischer Einsatz                                 |
| ------- | ------------- | --------------------- | --------------------- | ------------------------------------------------- |
| Starter | 3 CP          | €2.400–€3.600         | €240–€480             | 1–3 Kern‑Workflows, schneller Start               |
| Core    | 6 CP          | €4.800–€7.500         | €480–€900             | Mehrere Workflows + 1 Agent oder komplexere Kette |
| Scale   | 10 CP         | €8.000–€12.000        | €800–€1.500           | Größeres Setup, mehrere Teams/Abteilungen         |

Besondere SKU:

- **RAG Agent Premium (3–4 CP)**: Setup typ. **€3.500–€6.500**, Monthly Care **€350–€800**
  - Enthalten: Vektordatenbank/Index, Ingestion/Chunking, Retrieval‑Tuning, Evaluations, Guardrails, Basis‑Dokumentation
  - Optional/als Add‑on: On‑Prem, Advanced Evals, Custom UI, externe Compliance‑Audits

Alle Preise verstehen sich als Richtwerte je nach Systemlandschaft und QA‑Tiefe.

---

## Was ist im Setup enthalten?

- Discovery & Design: Zielbild, Datenflüsse, Schnittstellen, CP‑Feinspezifikation
- Implementierung: Workflows/Agenten, Konnektoren, Fehlerpfade, Basis‑Instrumentation
- Qualitätssicherung: Tests, Evals (bei KI), Security/Privacy‑Checks (angemessen für SMB)
- Dokumentation & Handover: technische Doku, Runbooks, kurze Schulung

## Was umfasst die Monthly Care?

- Proaktives Monitoring und Ausfall‑Alarmierung
- Tuning/Optimierungen, kleine Änderungswünsche (im Retainer‑Rahmen)
- Regelmäßige Reports (Nutzung, Qualität, Auffälligkeiten)
- Empfehlung von Verbesserungen (Roadmap)

---

## Add‑ons mit klaren Preistags

- Extra Connector (neues System, API): +0,25–0,5 CP
- Approval/HITL‑Schritt: +0,5 CP
- On‑Prem/Local Deployment: +0,5–1,0 CP
- Advanced Evaluations/Benchmarks: +0,25–0,5 CP
- Custom UI/Frontend: +0,5–1,0 CP

Wir sprechen Add‑ons vorab transparent ab. Viele „kleine Dinge“ sind paketüblich und kosten nichts extra

Feinschliff: „Inklusive vs. Add-on“: 3 konkrete Beispiele je Kategorie, damit es glasklar ist.

---

## Ablauf & Transparenz‑Mechaniken

1. Unverbindlicher Scoping‑Call (30–45 Min.)
2. CP‑Schätzung und Angebotsband (z. B. 5–6 CP, Standard‑Satz)
3. Angebot mit klaren Positionen (Setup, Care, evtl. Add‑ons)
4. Umsetzung mit Zwischenabnahmen; CP werden laufend gespiegelt
5. Go‑Live, Handover, Start der Care‑Phase

Leitlinien:

- Wir nennen einen **CP‑Rahmen** (z. B. 5–6 CP). Liegen wir darunter, zahlen Sie nur die tatsächlich gelieferten CP. Darüber gehen wir nur nach schriftlicher Freigabe.
- Der **CP‑Satz** wird begründet (Systemkomplexität, QA‑Tiefe). Wir bleiben im vereinbarten Band.
- **Retainer** ist monatlich kündbar oder nach Projektphase anpassbar.

---

## Rechenbeispiele

- Starter (3 CP), CP‑Satz €1.000: Setup = 3 × 1.000 = **€3.000**; Care = **€300–€450**
- Core (6 CP + 0,5 CP HITL), CP‑Satz €1.100: Setup = 6,5 × 1.100 = **€7.150**; Care = **€715–€1.072**
- RAG Agent Premium (4 CP, Premium‑Satz), Setup ≈ **€5.600**; Care = **€560–€840**

Diese Beispiele sind repräsentativ – konkrete Angebote hängen von Systemlandschaft, Sicherheit/Compliance und QA‑Tiefe ab.

---

## Warum CP statt Stunden?

- **Transparenz**: Sie sehen früh, wofür Sie zahlen – Workflows/Agenten statt abstrakter Stunden.
- **Planbarkeit**: Klare Pakete, klarer Rahmen, optionale Add‑ons.
- **Qualität**: CP beinhaltet QA/Evals – nicht „weggespart“, sondern kalkuliert.
- **Fairness**: Nur tatsächlich gelieferte CP werden abgerechnet; Änderungen nur nach Freigabe.

---

## Rahmenbedingungen

- Preise netto, **zzgl. MwSt.** (falls anwendbar)
- Kosten für **Drittanbieter** (z. B. OpenAI, Cloud, DBs, Cal.com) sind exklusive
- IP/Übergabe: Der erstellte Code/Workflows gehören dem Kunden; sensible Secrets verbleiben vertraulich

Wenn Sie möchten, erstellen wir anhand dieser Seite eine verständliche Web‑Unterseite, inkl. einfachem CP‑Rechner (interaktive Beispiele) und FAQs.
