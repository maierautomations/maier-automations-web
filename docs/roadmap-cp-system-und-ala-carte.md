# Aufgabenplan: CP‑System, Pakete und À‑la‑carte‑Ausbau

Ziel: Einheitliche, wertorientierte Preis- und Angebotsdarstellung (CP‑System) plus ausgebauter Produktbereich mit getrennten Seiten „KI‑Agenten" und „n8n Workflows". Zuerst Content‑Schwerpunkt (Wozu? Nutzen? Probleme? Beispiele), später à‑la‑carte‑Katalog.

---

## 1) Preise & CP‑System harmonisieren (überprüfe @cp-system.md für Details und ggfs. die CP-System Seite anpassen)

- [x] CP‑Preisband finalisieren
  - [x] CP‑Satz schriftlich festlegen (1.000–1.200€ / CP statt 800-1200€)
  - [x] Klarheit: Add‑ons erhöhen CP‑Anzahl gemäß Heuristiken (Connector, HITL, On‑Prem, Advanced Evals, Custom UI)
- [x] Care/Retainer sauber definieren
  - [x] Care‑Prozentsatz staffeln (10% Lite, 12.5% Standard, 15% Plus)
  - [x] SLA/Response‑Zeiten und Leistungsumfang je Stufe klar benennen
- [x] Rechtliche/Kommerzielle Hinweise
  - [x] „Preise netto, zzgl. MwSt." prominent platzieren
  - [x] Drittanbieter‑Kosten (LLM, Cloud, DB) explizit exkludieren und Beispiele nennen
  - [ ] IP/Übergabe‑Regeln und Geheimhaltung kurz aufführen

---

## 2) Preisdarstellung in allen Oberflächen vereinheitlichen

- [x] Paketseiten angleichen
  - [x] `src/pages/Packages.tsx`: „Preis noch nicht fix" durch Ab‑Preis + Care‑Band ersetzen
  - [x] `src/components/Home/PackageGrid.tsx`: gleiche Logik/Benennung wie Paketseite
  - [x] `src/components/Home/PackageTeaser.tsx`: veraltete Fixpreise (z. B. 1.990€/4.990€) entfernen/ersetzen
- [x] CP‑System‑Seite und FAQ aktualisieren
  - [x] `src/pages/CPSystem.tsx`: Bänder, Beispiele, Formeln mit finalem CP‑Satz harmonisieren
  - [x] `src/pages/FAQ.tsx`: Preisantwort auf neue Bänder/Mindest‑Retainer anpassen
- [x] CP‑Rechner (Server‑Funktion) anpassen
  - [x] `supabase/functions/cp-calculator/index.ts`: Preisbereiche auf neue Bänder mappen
  - [x] Ergebnis‑Copy: Paketempfehlung + Ab‑Preis + Care‑Band + Dauer (in Wochen)

---

## 3) Produktseiten zuerst als Content‑Seiten (getrennt)

- [x] Navigation
  - [x] `Header.tsx`: Untermenü Produkte mit zwei Einträgen: „KI‑Agenten" → `/produkte/ki-agenten`, „KI Workflows" → `/produkte/workflows`
- [x] Seite „KI‑Agenten" (Content‑First)
  - [x] Einleitung: Was sind KI‑Agenten? Wo helfen sie? (Repetitive Aufgaben, Entscheidungsunterstützung, 24/7, Kontext)
  - [x] Probleme → Nutzen: 3–5 Kernprobleme und Outcomes (z. B. Antwortzeit, Qualität, Kostenersparnis)
  - [x] DSGVO/EU‑Hosting/On‑Prem Hinweise
  - [x] Abschnitt „Wie wir arbeiten": Discovery → Implementierung → QA/Evals → Handover → Care
  - [x] CTA: Kostenlose Analyse
  - [x] Optionaler Block „Beispiel‑Agenten" (2–4 Beispiele mit CP‑Angabe als Teaser, ohne kompletten Katalog)
- [x] Seite „KI Workflows" (Content‑First)
  - [x] Einleitung: Was leisten Workflows? Typische Muster (Trigger, Validierung, Fehlerpfade)
  - [x] Probleme → Nutzen: 3–5 Kernprobleme und Outcomes (Zeitersparnis, Datenqualität, Compliance)
  - [x] DSGVO/EU‑Hosting/On‑Prem Hinweise
  - [x] Abschnitt „Wie wir arbeiten": Discovery → Implementierung → QA → Handover → Care
  - [x] CTA: Kostenlose Analyse
  - [x] Optionaler Block „Beispiel‑Workflows" (2–4 Beispiele mit CP‑Angabe als Teaser)

  Je KI Workflow ist 1 CP und je KI Agent ist 2 CP. (Verweis auf CP-System Seite)

\*Beispiele für KI Workflows & KI Agenten findest du in der `docs/ala-carte-ki-agenten-und-workflows.md` Datei.

---

## 4) Content & Nutzenkommunikation

- [ ] Copy‑Guidelines erstellen
  - [ ] Problem → Lösung → Outcome (KPI) in 3 Sätzen
  - [ ] CP‑Angabe + typische Dauer (z. B. 1–3 Wochen)
  - [ ] Typische Integrationen (CRM, Support, Files, DB, Cal.com, Slack, etc.)
- [ ] ROI‑Hinweis standardisieren
  - [ ] Vereinfachte Formel und Beispiel (Zeitersparnis × Stundensatz − Monatskosten)
- [ ] Case‑Snippets kuratieren (aus Blog/Projekten)
  - [ ] 3–5 Mini‑Cases mit Kennzahlen (z. B. −35% Antwortzeit, +20% Conversion)

## 5) À‑la‑carte (späterer Schritt)

- [ ] Datenquelle
  - [ ] zwei Arrays (agents, workflows) aus `docs/ala-carte-ki-agenten-und-workflows.md`
- [ ] Katalogseiten (Sektionen unterhalb der Content‑Seiten - verwende KI Agenten & KI Workflows Seite als Platzierungspunkt)
  - [ ] Filter: Kategorie, Integrationen, CP‑Range
  - [ ] Kartenlayout: Name, Problem/Outcome, CP‑Wert, Dauer, Integrationen, „Ab‑Preis = CP × CP‑Satz", CTA
  - [ ] Mini‑Case‑Snippets (optional)

---

## 6) Care‑Angebote (Produktisierung)

- [ ] Drei Care‑Stufen definieren (Leistungen, SLA, Preislogik)
  - [ ] Lite (Monitoring, kleinere Fixes, E‑Mail‑Support)
  - [ ] Standard (Tuning/Optimierung, Telefon‑Support, Monatsreport)
  - [ ] Plus (Priorität, kürzere SLAs, Erweiterungen im Retainer‑Rahmen)
- [ ] Sichtbar auf Paketen + den beiden Produktseiten verlinken

---

## 7) Funnel & Analyse

- [ ] Analyse‑CTA konsistent einbinden (Hero, Katalog/Teaser, Detail, Footer)
- [ ] Formular/Onboarding prüfen (Felder, Validierung, Terminauswahl)
- [ ] Tracking/Analytics
  - [ ] Events: CTA‑Klicks, Formular‑Abschlüsse, Paket/Item‑Interesse
  - [ ] UTM‑Konventionen und Zielvorhaben (z. B. Analyse‑Buchung)

---

## 8) Vertriebsassets

- [ ] Angebotsvorlage nach CP (SOW)
  - [ ] Leistungsbeschreibung je CP‑Baustein, Abnahmekriterien, Meilensteine
  - [ ] Add‑ons mit Preistags (Connector, HITL, On‑Prem, Advanced Evals, Custom UI)
- [ ] One‑Pager je Paket + RAG Pro
  - [ ] Nutzen, Umfang, CP‑Band, Care, Ab‑Preis, Referenzen

---

## Anhänge/Referenzen (intern)

- CP‑Definitionen & Heuristiken (Workflows, Agenten, RAG, Add‑ons)
- Compliance/DSGVO‑Hinweise, EU‑Hosting, On‑Prem‑Option
- Drittanbieter‑Kostenliste (Orientierung)
