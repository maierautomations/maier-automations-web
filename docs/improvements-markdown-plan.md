# Maier Automations Website - Verbesserungs-Roadmap

## Phase 1: Foundation & Quick Wins (P0) - Sprint 1

### ✅ Cal.com Integration auf Kontaktseite

**Priority: P0 | Estimate: M (1-3h) | Dependencies: None**

- [ ] Cal.com Embed-Package installieren
- [ ] Inline-Widget unter Kontaktformular einbinden
- [ ] DSGVO-konforme Einbindung sicherstellen
- [ ] Mobile Responsivität testen
- [ ] Datenschutzerklärung ergänzen

### ✅ Hero-Kennzahlen aktualisieren

**Priority: P0 | Estimate: S (<1h) | Dependencies: None**

- [ ] "60% weniger Routinearbeit" + Unterzeile
- [ ] "Kickoff in 48h" + Go-Live Disclaimer
- [ ] "500+ Integrationen" überall konsistent
- [ ] AGBs mit Disclaimer-Text ergänzen

### ✅ CTA-Buttons vereinheitlichen

**Priority: P0 | Estimate: S (<1h) | Dependencies: None**

- [ ] Alle CTAs auf "Analyse starten" ändern
- [ ] Konsistenz über alle Seiten prüfen

### ✅ Hero-Headline mit Typewriter

**Priority: P0 | Estimate: L (3-8h) | Dependencies: None**

- [ ] Neue H1 implementieren: "KI-Automatisierungen für KMU – DSGVO-konform"
- [ ] GSAP TextPlugin integrieren
- [ ] Typewriter-Effekt für rotierende Phrasen
- [ ] prefers-reduced-motion respektieren
- [ ] Container-Höhe fixieren (CLS vermeiden)
- [ ] Mobile Optimierung (max. 1 Phrase)

---

## Phase 2: UI/UX & Content (P1) - Sprint 2-3

### ✅ Process-Block Zeitrahmen anpassen

**Priority: P1 | Estimate: S (<1h) | Dependencies: None**

- [ ] "Schnell live 2-3 Wochen" ersetzen durch "Typischer Zeitrahmen: 2-4 Wochen"

### ✅ Trust-Leiste implementieren

**Priority: P1 | Estimate: M (1-3h) | Dependencies: None**

- [ ] Trust-Leiste unter "Intelligente Automatisierung" Headline
- [ ] EU-Server Frankfurt • DPA/SCCs • RBAC • n8n Cloud

### ✅ Feature-Karten erstellen

**Priority: P1 | Estimate: L (3-8h) | Dependencies: trust-leiste**

- [ ] 3 gleichgroße Karten: KI-Agenten, n8n Workflows, RAG Pro
- [ ] Klickbare Links zu Detailseiten
- [ ] Mini-KPIs pro Karte

### ✅ KPI-Zeile hinzufügen

**Priority: P1 | Estimate: M (1-3h) | Dependencies: feature-karten**

- [ ] "Messbare Ergebnisse" Zeile
- [ ] 60% Zeitersparnis • 24h Verfügbarkeit • 500+ Integrationen • <3s Antwortzeit

### ✅ Security & Compliance Block

**Priority: P1 | Estimate: M (1-3h) | Dependencies: kpi-zeile**

- [ ] Volle Breite Block
- [ ] Kurzer Text + Link zu Details

### ✅ 4-Schritte Prozess

**Priority: P1 | Estimate: M (1-3h) | Dependencies: security-compliance**

- [ ] Discovery → Blueprint → Build → Handover

### ✅ FAQ-Accordion implementieren

**Priority: P1 | Estimate: L (3-8h) | Dependencies: prozess-4-schritte**

- [ ] Ausklappbare FAQ-Sektion
- [ ] Häufigste Fragen integrieren
- [ ] Link zur FAQ-Seite
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

- [ ] Neue Unterseite für CP-System (@cp-system.md)
- [ ] Stärken & Vorteile erklären
- [ ] Preisspanne transparent darstellen
- [ ] Add-on System dokumentieren
- [ ] Berechnungslogik anzeigen

### ✅ CP-Rechner implementieren

**Priority: P1 | Estimate: L (3-8h) | Dependencies: cp-system-seite**

- [ ] Interaktiver CP-Rechner
- [ ] Preisberechnung live
- [ ] Pakete visualisieren

### ✅ Navigation umstrukturieren - Produkte

**Priority: P1 | Estimate: L (3-8h) | Dependencies: None**

- [ ] Produkte-Reiter statt RAG Pro
- [ ] Dropdown für Wissensassistent (RAG PRO)
- [ ] Dropdown für n8n-Workflows
- [ ] Dropdown für Intelligente KI-Agenten
- [ ] Unterseiten erstellen

### ✅ Navigation - Blog & Newsletter

**Priority: P2 | Estimate: M (1-3h) | Dependencies: newsletter-system**

- [ ] Blog & Newsletter Oberreiter
- [ ] Dropdown-Optionen

### ✅ Navigation - FAQ-Seite

**Priority: P1 | Estimate: L (3-8h) | Dependencies: None**

- [ ] FAQ-Seite erstellen
- [ ] Als Dropdown in Navigation
- [ ] Echte Einwände behandeln
- [ ] FAQPage JSON-LD Schema

### ✅ Navigation - CP-System Dropdown

**Priority: P2 | Estimate: S (<1h) | Dependencies: cp-system-seite**

- [ ] CP-System in Pakete-Navigation

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

- [ ] "Jetzt starten" Button für Funnel
- [ ] Direkte Kontaktoption mit Beschreibung
- [ ] Zwei-Wege-Auswahl implementieren

### ✅ Funnel-Redirect nach Analyse

**Priority: P1 | Estimate: S (<1h) | Dependencies: funnel-startoptionen**

- [ ] Weiterleitung zur Funnel-Seite
- [ ] Auswahl: Funnel oder Direktkontakt

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
