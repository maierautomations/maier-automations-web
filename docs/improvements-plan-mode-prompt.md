### Plan Mode Prompt: Kontextaufnahme & Umsetzungsplan (READ‑ONLY)

Rolle:
Du bist Senior Full‑Stack Engineer, Technical Program Manager und QA. Arbeite im Plan Mode ausschließlich READ‑ONLY: Untersuche die Codebasis und Artefakte, erstelle einen fundierten Umsetzungsplan mit Risiken und Prüfschritten. Keine Code‑Edits, keine Schreib‑Operationen.

Kontextquellen (nur lesen):

- Aufgaben & Roadmap:
  - @docs/improvements-json-tasks.json
  - @docs/improvements-markdown-plan.md
  - @docs/improvements.md
  - @docs/improvements-execution-prompt.md
  - @docs/improvements-tasklist-prompt.md
- Relevante App‑Struktur (Beispiele, nur überfliegen, nicht ändern):
  - src/pages/ (Index.tsx, Packages.tsx, Contact.tsx, RagPro.tsx, etc.)
  - src/components/Home/ (HeroSection.tsx, SocialProofSection.tsx, etc.)
  - src/components/Layout/ (Header.tsx, Footer.tsx)
  - src/components/ui/ (Accordion, Navigation, Tooltip, usw.)
  - src/contexts/, src/integrations/supabase/, src/index.css, tailwind.config.ts, vite.config.ts, tsconfig\*.json
  - package.json (Scripts/Dev‑Port verifizieren)
- Optional als Referenzen: @docs/Calcom_integration.md, @docs/cp-system.md, @ai_docs/gsap-text-plugin.md

Annahmen/Umgebung:

- Dev‑URL: http://localhost:8080 (falls abweichend, aus package.json/vite.config.ts ableiten).
- Tools optional: Playwright MCP (Screenshots/A11y/Konsole), Shadcn MCP (v4 Komponenten/Demos) – nur als Vorschlag im Plan, nicht ausführen.

Ziel des Plan Mode:

- Erzeuge einen klaren, risikoarmen Umsetzungsplan für die nächsten Schritte auf Basis der Aufgabenliste. Fokussiere auf:
  - Reihenfolge gemäß Priorität/Abhängigkeiten
  - klein‑schrittige, sichere Edits
  - Validierungsstrategie (Dev‑Checks, optional Build‑Check vor Release)
  - visuelle/UX‑Validierung mit Playwright MCP (wann, wie, wo)
  - potenzielle Stolpersteine und Gegenmaßnahmen

Was du im Plan Mode konkret tun sollst (nur lesen/analysieren):

1. Repo‑Überblick: Nenne kurz die zentralen Bereiche/Dateien, die für die ersten P0/P1‑Tasks relevant sind (Seiten, Komponenten, Configs).
2. Dev‑Setup verifizieren: Zeige an, welcher Port/Script wahrscheinlich genutzt wird (package.json/vite.config.ts), ob 8080 plausibel ist.
3. Abgleich Aufgaben ↔ Code: Skizziere, wo voraussichtlich implementiert wird (Dateipfade) – ohne Änderungen.
4. Risiken & Stolpersteine: Liste konkrete Risiken (z. B. CLS beim Typewriter, prefers‑reduced‑motion, Navigation‑Duplikate in ui/ vs. shadcn, Supabase/Security, SEO/FAQ JSON‑LD) und nenne Gegenmaßnahmen.
5. Validierungsplan: Definiere, wann Lint/Dev‑Check, optional Build/Preview sinnvoll sind; wo Playwright MCP Screenshots/A11y/Konsole eingesetzt werden.
6. Shadcn MCP Einsatz (optional): Empfehle, wann neue UI‑Bausteine über MCP geholt werden könnten und wie Duplikate vermieden werden.
7. Startplan (nur die nächsten 2 Tasks):
   - Für Task 1 und Task 2: geplante Edits (Dateien), minimaler Umfang, Prüfschritte (Dev, Playwright), erwartetes Ergebnis. Keine Änderungen ausführen.
8. Offene Fragen/Annahmen: Liste Punkte, die vor Umsetzung geklärt werden sollten (z. B. Textquellen, genaue KPI‑Werte, Navigationshierarchie, rechtliche Texte für Newsletter DOi).

Ausgabeformat (nur Plan, keine Änderungen):

- Überblick & Kontext (2–6 Stichpunkte)
- Umsetzungsvorgehen (Priorität/Abhängigkeiten, klein‑schrittig)
- Risiken & Gegenmaßnahmen (Liste)
- Validierungsplan (Lint/Dev/Build/Playwright)
- Shadcn MCP Einsatz (optional, wo sinnvoll)
- Start mit nächsten 2 Tasks (Dateien, Schritte, Checks, erwartetes Ergebnis)
- Offene Fragen/Annahmen
- Stopp‑Hinweis: „Plan erstellt – auf Bestätigung warten. Keine Edits vorgenommen.“

Hinweise:

- Halte Dich strikt an den Scope aus @docs/improvements.md. Keine Erweiterungen außerhalb, außer zwingend zur Umsetzung nötig.
- Formuliere präzise, knapp und umsetzungsorientiert. Vermeide vage Aussagen.
- Ziel ist ein ausführbarer Plan, der danach mit @docs/improvements-execution-prompt.md umgesetzt werden kann.
