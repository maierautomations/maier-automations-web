# Maier Automations Website - Verbesserungs-Roadmap

## Phase 1: Foundation & Quick Wins (P0) - Sprint 1

### ✅ Cal.com Integration auf Kontaktseite

**Priority: P0 | Estimate: M (1-3h) | Dependencies: None**

- [x] Cal.com Embed-Package installieren (bereits vorhanden)
- [x] Inline-Widget unter Kontaktformular einbinden
- [ ] DSGVO-konforme Einbindung sicherstellen
- [ ] Mobile Responsivität testen
- [ ] Datenschutzerklärung ergänzen

### ✅ Hero-Kennzahlen aktualisieren

**Priority: P0 | Estimate: S (<1h) | Dependencies: None**

- [x] "60% weniger Routinearbeit" + Unterzeile
- [x] "Kickoff in 48h" + Go-Live Disclaimer
- [x] "500+ Integrationen" überall konsistent
- [x] AGBs mit Disclaimer-Text ergänzen

### ✅ CTA-Buttons vereinheitlichen

**Priority: P0 | Estimate: S (<1h) | Dependencies: None**

- [x] Alle CTAs auf "Analyse starten" ändern
- [x] Konsistenz über alle Seiten prüfen

### ✅ Hero-Headline mit Typewriter

**Priority: P0 | Estimate: L (3-8h) | Dependencies: None**

- [x] Neue H1 implementieren: "KI-Automatisierungen für KMU – DSGVO-konform"
- [x] GSAP TextPlugin integrieren
- [x] Typewriter-Effekt für rotierende Phrasen
- [x] prefers-reduced-motion respektieren
- [x] Container-Höhe fixieren (CLS vermeiden)
- [x] Mobile Optimierung (max. 1 Phrase)

---

## Phase 2: UI/UX & Content (P1) - Sprint 2-3

### ✅ Process-Block Zeitrahmen anpassen

**Priority: P1 | Estimate: S (<1h) | Dependencies: None**

- [x] "Schnell live 2-3 Wochen" ersetzen durch "Typischer Zeitrahmen: 2-4 Wochen"

### ✅ Trust-Leiste implementieren

**Priority: P1 | Estimate: M (1-3h) | Dependencies: None**

- [x] Trust-Leiste unter "Intelligente Automatisierung" Headline
- [x] EU-Server Frankfurt • DPA/SCCs • RBAC • n8n Cloud

### ✅ Feature-Karten erstellen

**Priority: P1 | Estimate: L (3-8h) | Dependencies: trust-leiste**

- [x] 3 gleichgroße Karten: KI-Agenten, n8n Workflows, RAG Pro
- [x] Klickbare Links zu Detailseiten
- [x] Mini-KPIs pro Karte

### ✅ KPI-Zeile hinzufügen

**Priority: P1 | Estimate: M (1-3h) | Dependencies: feature-karten**

- [x] "Messbare Ergebnisse" Zeile
- [x] 60% Zeitersparnis • 24h Verfügbarkeit • 500+ Integrationen • <3s Antwortzeit

### ✅ Security & Compliance Block

**Priority: P1 | Estimate: M (1-3h) | Dependencies: kpi-zeile**

- [x] Volle Breite Block
- [x] Kurzer Text + Link zu Details

### ✅ 4-Schritte Prozess

**Priority: P1 | Estimate: M (1-3h) | Dependencies: security-compliance**

- [x] Discovery → Blueprint → Build → Handover

### ✅ FAQ-Accordion implementieren

**Priority: P1 | Estimate: L (3-8h) | Dependencies: prozess-4-schritte**

- [x] Ausklappbare FAQ-Sektion
- [x] Häufigste Fragen integrieren
- [x] Link zur FAQ-Seite
- [ ] FAQPage Schema.org JSON-LD

---

## Phase 3: Produkt & Navigation (P1-P2) - Sprint 4-6

### ✅ Newsletter-System

**Priority: P1 | Estimate: XL (1-3d) | Dependencies: None**

- [ ] Newsletter-Formular implementieren
- [ ] Double-Opt-In Prozess
- [ ] Supabase Integration
- [ ] Datenschutz-Konformität

### ✅ CP-System Seite erstellen

**Priority: P1 | Estimate: XL (1-3d) | Dependencies: None**

- [x] Neue Unterseite für CP-System (@cp-system.md)
- [x] Stärken & Vorteile erklären
- [x] Preisspanne transparent darstellen
- [x] Add-on System dokumentieren
- [x] Berechnungslogik anzeigen

### ✅ CP-Rechner implementieren

**Priority: P1 | Estimate: L (3-8h) | Dependencies: cp-system-seite**

- [x] Interaktiver CP-Rechner
- [x] Preisberechnung live
- [x] Pakete visualisieren

### ✅ Navigation umstrukturieren - Produkte

**Priority: P1 | Estimate: L (3-8h) | Dependencies: None**

- [x] Produkte-Reiter statt RAG Pro
- [x] Dropdown für Wissensassistent (RAG PRO)
- [x] Dropdown für n8n-Workflows
- [x] Dropdown für Intelligente KI-Agenten
- [ ] Unterseiten erstellen

### ✅ Navigation - Blog & Newsletter

**Priority: P2 | Estimate: M (1-3h) | Dependencies: newsletter-system**

- [x] Blog & Newsletter Oberreiter
- [x] Dropdown-Optionen

### ✅ Navigation - FAQ-Seite

**Priority: P1 | Estimate: L (3-8h) | Dependencies: None**

- [x] FAQ-Seite erstellen
- [x] Als Dropdown in Navigation
- [x] Echte Einwände behandeln
- [x] FAQPage JSON-LD Schema

### ✅ Navigation - CP-System Dropdown

**Priority: P2 | Estimate: S (<1h) | Dependencies: cp-system-seite**

- [x] CP-System in Pakete-Navigation

### ✅ Einzelkauf-Option

**Priority: P2 | Estimate: M (1-3h) | Dependencies: produkte-navigation**

- [ ] Einzelne Workflows kaufbar machen
- [ ] Einzelne KI-Agenten kaufbar machen

### ✅ Mini-ROI-Rechner

**Priority: P2 | Estimate: M (1-3h) | Dependencies: None**

- [ ] ROI-Rechner implementieren
- [ ] Zeitersparnis × Lohnkosten = Payback

---

## Phase 4: Funnel (P1-P2) - Sprint 5-6

### ✅ Funnel-Startoptionen

**Priority: P1 | Estimate: M (1-3h) | Dependencies: None**

### ✅ Funnel-Redirect nach Analyse

**Priority: P1 | Estimate: S (<1h) | Dependencies: funnel-startoptionen**

### ✅ Branche-Feld erweitern

**Priority: P2 | Estimate: S (<1h) | Dependencies: None**

- [ ] "Sonstiges" Option mit Textfeld

### ✅ Ziele-Feld erweitern

**Priority: P2 | Estimate: S (<1h) | Dependencies: None**

- [ ] "Sonstige Ziele" mit Eingabe

### ✅ Systeme Multi-Select

**Priority: P1 | Estimate: L (3-8h) | Dependencies: None**

- [ ] Suchbares Multi-Select implementieren
- [ ] Kategorien: CRM, Kommunikation, Wissensquellen, Ticketing
- [ ] "Sonstiges + Eingabe", "Weiß nicht" Optionen

### ✅ Funnel-Felder bereinigen

**Priority: P2 | Estimate: M (1-3h) | Dependencies: None**

- [ ] Volumen entfernen
- [ ] Häufigkeit entfernen
- [ ] Datenschutz & Region entfernen
- [ ] Zeitplan optional entfernen

### ✅ Kontaktangaben zusammenführen

**Priority: P1 | Estimate: M (1-3h) | Dependencies: funnel-felder-bereinigen**

- [ ] Kontaktangaben als letzten Schritt
- [ ] Mit Pain Point zusammenführen

---

## Phase 5: QA, A11y, SEO, Performance, Launch (P0-P1, laufend)

### ✅ Accessibility-Prüfung

**Priority: P0 | Estimate: L (3-8h) | Dependencies: All UI tasks**

- [ ] Keyboard-Navigation testen
- [ ] ARIA-Labels prüfen
- [ ] Kontrast validieren
- [ ] Focus States implementieren

### ✅ Performance-Optimierung

**Priority: P0 | Estimate: L (3-8h) | Dependencies: All UI tasks**

- [ ] CLS-Probleme beheben
- [ ] LCP optimieren
- [ ] Lazy-Loading implementieren
- [ ] Animations respektieren prefers-reduced-motion

### ✅ SEO-Optimierung

**Priority: P1 | Estimate: M (1-3h) | Dependencies: All content tasks**

- [ ] Semantische Struktur prüfen
- [ ] Metadaten optimieren
- [ ] Überschriftenhierarchie korrigieren
- [ ] Schema.org implementieren

### ✅ Konsistenz-Prüfung

**Priority: P1 | Estimate: M (1-3h) | Dependencies: All tasks**

- [ ] Deutsche Sprache durchgängig
- [ ] Terminologie vereinheitlichen
- [ ] CTAs konsistent

### ✅ Testing & Launch

**Priority: P0 | Estimate: L (3-8h) | Dependencies: All tasks**

- [ ] Manuelle Tests durchführen
- [ ] Mobile Tests
- [ ] Browser-Kompatibilität
- [ ] Final Review

---

## Backlog (P3) - Langfristig

### ⏳ Mini-Case-Studies

**Priority: P3 | Estimate: L**

- Problem → Lösung → Metriken → Zitat

### ⏳ Brand-Consistency

**Priority: P3 | Estimate: L**

- Style-Guide dokumentieren
- Farb-Palette optimieren
- Typography-Scale verfeinern

### ⏳ Multi-Language Foundation

**Priority: P3 | Estimate: XL**

- i18n-System setup
- Deutsche Sprachdateien
- EN-Übersetzung vorbereiten

### ⏳ Cookie-Management

**Priority: P3 | Estimate: M**

- Cookie-Banner
- Consent-Management
- Analytics-Opt-out

### ⏳ Chatbot erstellen

**Priority: P3 | Estimate: XL**

### ⏳ Content Management System

**Priority: P3 | Estimate: XL**

- Admin-Dashboard/Panel

### ⏳ Blog-Seite reparieren

**Priority: P3 | Estimate: L**

- Artikel laden/anzeigen
