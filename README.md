# Maier Automations Website

## 1. Wer wir sind & für wen

Maier Automations entwickelt maßgeschneiderte Automatisierungen und KI-Agenten auf Basis von n8n Cloud (EU/Frankfurt) für KMU in der DACH-Region.
Zielgruppe: Geschäftsführung, Operations, IT/Digital in kleinen und mittleren Unternehmen.

## 2. Nutzenversprechen (Nutzen vor Technik)

• Routinearbeit reduzieren, damit Teams sich auf wertschöpfende Aufgaben konzentrieren.
• Antwortzeiten verkürzen in Vertrieb und Support (Priorisierung, Vorqualifizierung, Entwürfe).
• Fehler senken durch Validierungen, Freigaben und klare Schritte.
• Transparenz erhöhen: Benachrichtigungen, nachvollziehbare Abläufe, einfache Auswertungen.
• Nahtlose Integration in bestehende Systeme (CRM, Tickets, ERP/Finance, Kommunikation, Wissensquellen).
• DSGVO-konform: EU-Region, Datenminimierung, klare Einwilligungen.

## 3. Angebote & Pakete (CP-Modell – knapp erklärt)

Wir planen Umfang mit Complexity Points (CP) – einfach, transparent, erweiterbar.
• 1 Workflow = 1 CP (typischer Automationsfluss mit 1–2 Integrationen, Fehlerpfad, Idempotenz).
• 1 Agent = 2 CP (Tools-Orchestrierung, klare Regeln, Memory).
• RAG Pro = 3–4 CP (Antworten mit Quellen; Tabellen werden exakt ausgewertet – Details genügen hier).
• +1 CP bei zusätzlicher Komplexität (z. B. >2 Integrationen, Freigabe/HITL, kleines Custom-UI).

Formel (Richtwert):
CP ≈ (#Workflows) + 2×(#Agenten) + (RAG Pro? 3–4 : 0) + Summe der Extras.
Pakete: Starter (3 CP) • Core (6 CP) • Scale (10 CP) • Custom (>10 CP).
Ablauf: Vorläufige CP-Schätzung über den Funnel → verbindlich im Blueprint; Änderungen nur in +1 CP.

## 4. RAG Pro (Premium) – kurz & verständlich

Wissens- & Analyse-Agent: liefert Antworten mit Quellen und wertet Tabellen korrekt aus. Sinnvoll, wenn viel Wissen/Dokumente verteilt sind (Support-Wissen, interne Nachschlagefälle, Backoffice-Prüfungen). Optional On-Prem/Private.

## 5. Arbeitsweise (kundenverständlich)

Discovery → Blueprint → Build → Handover → optional Run/Monitoring
• Discovery/Funnel: Ziele, Systeme, Datenlage, EU-Vorgaben.
• Blueprint: Scope per CP, klare Abnahmekriterien, Zeithinweise.
• Build: kleine, testbare Einheiten; saubere Benennung; Fehlerpfade/Benachrichtigungen.
• Handover: Runbook, kurze Schulung; optional leichter Betrieb/Health-Review.

##6. Website-Zielbild (für Conversion & Klarheit)

Navigation: Start • Pakete • RAG Pro • Blog • Analyse (CTA) • Kontakt • Impressum • Datenschutz
• Above-the-Fold: klare Aussage Was/Für wen/Nutzen + Primär-CTA „Kostenlose Prozess-Analyse starten“ + kleine Trust-Leiste (EU-Hosting (Frankfurt) • DPA/SCCs • RBAC • keine Tracker ohne Einwilligung).
• Pakete/CP: drei Karten (Starter/Core/Scale) mit kurzem CP-Tooltip und Preisband „noch nicht fix“.
• RAG Pro Seite: Nutzen, kurzer Prozessüberblick (Quellen, Tabellen korrekt), „Wann passt es?“, Hinweis auf Qualität/Eval.
• Blog & Newsletter (DOI): praxisnahe Inhalte, klare CTAs; Newsletter stets Double-Opt-In.
• Analyse (Funnel): siehe unten.

##7. Funnel-Wizard (Lead-Erfassung & CP-Schätzung)
• Schritt 0 (optional, empfohlen): Website-URL – wir analysieren nur öffentliche Inhalte (keine personenbezogenen Daten).
• Danach 8 kurze Schritte (je 2–3 Felder, Chips, „Überspringen“ möglich): Branche/Abteilung • Ziele (max. 2) • Systeme • Datenlage (Dokumente/Tabellen, Mengen, Quellenpflicht ja/nein) • Volumen/Häufigkeit • Datenschutz/Region (EU-only? On-Prem?) • Zeit/Budget-Range • größter Pain-Point (kurz).
• Ergebnis: „≈ X CP → Paketvorschlag (Starter/Core/Scale)“, ggf. „RAG Pro empfohlen“. Zeithinweis indikativ, Preise „noch nicht fix“. CTA: Termin/Analyse per E-Mail.

## 8. Content & SEO (kurz)

• Kategorien: Playbooks (n8n) • Agenten-Praxis • RAG-Wissen • Compliance • Cases (kurz) • How-Tos.
• On-Page-Basics: klare Titles/Meta-Descriptions, OG-Bilder, sitemap.xml, robots.txt, interne Links auf Pakete, RAG Pro, Analyse.
• Jeder Beitrag endet mit CTA „Analyse starten“ + Newsletter (DOI).

## 9. n8n-Umsetzung – pragmatische Leitplanken

• Pro Kunde eigener n8n-Cloud-Workspace (Kunde ist Owner), wir per RBAC (Least-Privilege).
• Workflows: klein & testbar; Idempotenz; Retry/Backoff; Benachrichtigungen bei Fehlern; sinnvolle Namensgebung.
• Agenten: klare Regeln, nur erlaubte Schritte; Memory, Freigabe (HITL) bei kritischen Aktionen.
• Logging leichtgewichtig: nur notwendige Metadaten (keine sensiblen Inhalte); Aufbewahrung kurz halten.
• Integration: an bestehende Systeme andocken statt „neue Tools erzwingen“.

## 10. Compliance (DACH-tauglich, ohne Overkill)

    • EU-Region, Datenminimierung, Double-Opt-In beim Newsletter; Cookie-Banner nur, wenn technisch nötig.
    • Verträge: DPA/SCCs mit n8n; DPA zwischen Kunde und Maier Automations; LLM-Provider möglichst über Kundenaccounts.
    • Transparenz statt Rechtsberatung: klare Hinweise, Checklisten, Runbooks – keine juristischen Bewertungen.

## 11. Qualitäts- und Abnahmekriterien (Kurzfassung)

    • Website: Above-the-Fold verständlich + CTA; Pakete mit CP-Tooltip; RAG Pro Nutzen klar; Funnel mit Schritt 0 URL und Ergebnis (≈ CP + Paket); Pflichtseiten/DOI sauber; SEO-Basics vorhanden; mobil und barrierearm.
    • Lösungen: definierte Abnahmekriterien je Workflow/Agent (messbar), nachvollziehbare Abläufe, Fehlerpfad & Benachrichtigungen, Runbook für Übergabe.

## 12. Du hast zudem Zugriff auf meinen Supabase Account mit dem Supabase MCP Server. Hier sind meine Datenbanken hinterlegt.

⸻

### Essenz:

Wir liefern custom n8n-Workflows und KI-Agenten, die Routine entfernen, Antworten beschleunigen und Fehler senken – DSGVO-konform, im bestehenden Tool-Stack der Kunden. Das CP-Modell macht Umfang transparent; RAG Pro liefert Antworten mit Quellen und korrekten Tabellen-Ergebnissen. Die Website führt klar zu Paketen, RAG Pro und dem Analyse-Funnel.

---

## Recent Updates (2025)

### ✅ Phase 1-4: CP-System & Product Pages (Completed)
1. **CP Pricing Finalized** - €1.000-€1.200/CP, Care at 10-15%
2. **Unified Pricing** - All pages show consistent "Ab €X.XXX" format
3. **Product Pages Created** - /produkte/ki-agenten & /produkte/workflows
4. **Dark Mode Transformation** - Complete premium dark UI (Phases 1-6)

### ✅ Dark Mode Design System
- **Palette**: Slate-950/900/800 + Emerald/Cyan/Amber accents
- **Style**: Glassmorphism, gradient CTAs, smooth animations
- **Inspiration**: Vercel/Linear/Notion aesthetic
- **Pages**: All 8+ pages transformed (homepage, pakete, products, RAG, CP-system, FAQ, etc.)

## Tech Stack

**Frontend:** React 18 + TypeScript, Vite 5, Tailwind CSS, shadcn/ui v4
**Animations:** GSAP ScrollTrigger, Framer Motion, react-countup
**Backend:** Supabase (PostgreSQL + Auth), n8n Cloud (EU)
**Design:** Premium dark mode with glassmorphism

## Quick Start

```bash
npm install
npm run dev      # localhost:8080
npm run build    # Production
npm run lint     # Check code
```

## Project Structure

```
src/
├── pages/              # Routes (Index, Packages, ProductAgents, ProductWorkflows, etc.)
├── components/
│   ├── Home/          # Homepage sections (Hero, PackageGrid, etc.)
│   ├── ui/            # shadcn/ui + custom (glass-card, gradient-button, etc.)
│   └── Layout/        # Header, Footer
├── hooks/             # use-scroll-animation, use-toast
└── integrations/      # Supabase client
```

## Design Patterns

### Colors
```css
bg-slate-950           /* Page background */
glass-card             /* Cards (glassmorphic utility) */
text-slate-50          /* Headlines */
text-emerald-500       /* Primary accents */
```

### Components
```tsx
// Gradient CTA
<Button variant="gradient-primary">CTA</Button>

// Badge
<Badge className="bg-emerald-500/10 text-emerald-500 border-emerald-500/20">3 CP</Badge>

// Glass Card
<Card className="glass-card hover:-translate-y-2 hover:shadow-xl hover:shadow-emerald-500/20">
```

## CP System Quick Reference

- **Formulas**: 1 Workflow = 1 CP | 1 Agent = 2 CP | RAG Pro = 3-4 CP
- **Pricing**: €1.000-€1.200 per CP + 10-15% monthly care
- **Packages**: Starter (3 CP: €3.000-€3.600), Core (6 CP: €6.000-€7.500), Scale (10 CP: €10.000-€12.000)
- **Pages**: /pakete, /cp-system, /produkte/ki-agenten, /produkte/workflows

## Development Guidelines

- Use `.glass-card` for all cards
- Use `gradient-primary` for CTAs
- Ensure slate-950/900 backgrounds (NO white)
- Text: slate-50 (headlines), slate-300 (body)
- Test mobile (min 375px width)
- Add German content for customer-facing pages

## Supabase MCP Access

Direct access for: SQL queries, table management, edge functions, auth

## License

Proprietary - Maier Automations
