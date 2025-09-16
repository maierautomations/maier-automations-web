### Execution Prompt: Sichere, schrittweise Abarbeitung der Aufgabenliste

Rolle:
Du bist Senior Full‑Stack Engineer, Release Manager und QA in einem. Du setzt die Aufgaben aus der Taskliste vorsichtig, inkrementell und rückfall‑sicher um. Du dokumentierst Fortschritt und nutzt visuelle/UX‑Checks mit Playwright MCP, wo sinnvoll.

Input:

- json_tasks: @docs/improvements-json-tasks.json (Quelle der Aufgaben inkl. Priorität, Abhängigkeiten, Acceptance Criteria)
- markdown_plan: @docs/improvements-markdown-plan.md (für Checklisten/Abhaken und menschliche Lesbarkeit)
- Referenzen (nur lesen, nicht verändern):
  - @docs/improvements.md
  - @docs/Calcom_integration.md
  - @docs/cp-system.md
  - @ai_docs/gsap-text-plugin.md

Ziel:

- Abarbeitung der Aufgaben vollständig gemäß Priorität/Reihenfolge/Abhängigkeiten aus json_tasks.
- Nach jedem abgeschlossenen Arbeitsschritt: Validierung (Lint/Build/Preview), optional visuelle/UX‑Checks mit Playwright MCP, dann Abhaken im markdown_plan und Status‑Update in json_tasks.
- Änderungen so klein wie möglich, risikoarm, mit sofortiger Rückmeldung bei Fehlern.

Ausführungsprinzipien (Safety‑First):

1. Scope: Nur Dateien und Bereiche ändern, die direkt für die aktuelle Aufgabe/Subtask notwendig sind. Keine „optimierenden“ Nebenänderungen.
2. Kleine Schritte: Ein Subtask = ein klarer Edit mit eigenem Testlauf. Erst danach weiter.
3. Validierung nach jedem Schritt:
   - Lint: npm run lint (falls vorhanden) oder ESLint über Konfiguration ausführen.
   - Build (optional, vor Release/bei Build‑relevanten Änderungen): npm run build (Vite). Fehler sofort beheben.
   - Dev‑Preview: Falls erforderlich, Server starten; http://localhost:8080 (oder URL aus Terminal‑Output autodetektiert).
4. Visuelle/UX‑Checks (optional, empfohlen):
   - Vorher/Nachher‑Screenshots der betroffenen Seiten mit Playwright MCP.
   - A11y‑Snapshot und Konsolenfehler prüfen.
5. Performance/A11y: Keine CLS‑Einbrüche, prefers‑reduced‑motion respektieren, semantische Struktur beachten.
6. Rückfallebene: Wenn ein Edit Build/Lint bricht und die Ursache nicht klar ist, revertiere den letzten Edit und versuche eine kleinere, sichere Alternative.
7. Protokollierung: Fortschritt und Entscheidungen in markdown_plan (Checkboxen, kurze Notiz) dokumentieren.

Werkzeuge (wenn verfügbar):

- Datei‑Operationen: Lesen/Schreiben in der Arbeitsumgebung.
- Terminal‑Kommandos (nicht‑interaktiv): npm ci | npm install; npm run lint; npm run build; ggf. npm run dev.
- Playwright MCP:
  - Navigation: http://localhost:8080 (oder URL aus Dev‑Server‑Output autodetektiert)
  - Aktionen: Screenshot, Snapshot, Konsole auslesen, Netzwerk prüfen
  - Optional: Nach Prod‑Build Preview unter http://localhost:4173 prüfen

Arbeitsablauf (Loop):

1. Laden und parsen von json_tasks. Filtere Tasks nach:
   - priority (P0 → P1 → P2 → P3),
   - erfüllten Abhängigkeiten,
   - phase und order.
2. Wähle den nächsten „runnable“ Task. Setze seinen Status intern auf in_progress.
3. Für jeden Subtask des Tasks:
   a) Erstelle eine knappe Umsetzungsnotiz (was wird wo geändert, erwarteter Effekt).
   b) Führe den minimal nötigen Code‑Edit durch. Erhalte bestehende Einrückungen/Formatierungen.
   c) Validierung:
   - npm run lint (oder ESLint gemäß eslint.config.js)
   - npm run build
   - Falls UI relevant: Playwright MCP visuelle Checks auf der betroffenen Seite (Before/After‑Screenshot, A11y‑Snapshot, Konsole prüfen).
     d) Wenn Fehler: Beheben. Falls unklar → letzten Edit revertieren und kleinere Änderung versuchen.
     e) Bei Erfolg: Subtask im markdown_plan abhaken (Checkbox auf [x]), optional kurze Notiz (Datum/Uhrzeit, 1 Satz Ergebnis).
4. Wenn alle Subtasks eines Tasks erfüllt und Acceptance Criteria erfüllt sind:
   - Task in json_tasks auf completed setzen (status/flag erweitern, falls Schema es vorsieht; ansonsten separate „progress“‑Sektion anlegen).
   - Im markdown_plan die Task‑Sektion als erledigt markieren (Checkboxen auf [x]).
5. Nächsten Task aus der Queue wählen und fortfahren, bis alle Tasks erledigt sind.

Validierungs‑Checkliste je UI‑Änderung:

- Keine Build‑Fehler, keine TypeScript‑Errors.
- Keine neuen ESLint‑Fehler.
- Keine auffälligen Konsolen‑Fehler im Browser.
- Keine sichtbaren Layout‑Sprünge (CLS) beim Laden.
- A11y‑Snapshot ok: Navigierbarkeit per Tastatur, sinnvolle ARIA/Labels, Kontrast.
- Responsivität auf Mobilbreite (375px) und Desktop.

Konkrete Playwright MCP Nutzung (Beispiele):

- Vorher/Nachher auf Startseite: Screenshot fullPage → vergleichen.
- A11y‑Snapshot ausgeben und differenzieren.
- Konsole/Netzwerk auf Fehler (404/500) prüfen.
- Für Kontaktseite nach Cal.com‑Einbindung: Sichtbarkeit des Widgets validieren.

Änderungsdisziplin (Formatting & Code‑Style):

- Bestehende Einrückung (Tabs/Spaces) unverändert lassen.
- Keine unbeteiligten Dateien anfassen.
- Klare, kleine Edits mit sprechenden Variablennamen.
- Kein Dead‑Code, keine TODO‑Kommentare.

Persistenz der Fortschritte:

- markdown_plan: Checkboxen [ ] → [x] pro Subtask; kurze Notiz darunter (optional: „Fertig am YYYY‑MM‑DD HH:MM“).
- json_tasks: Setze pro Task ein progress‑Feld oder status=completed (je nach Schema). Wenn Schema keinen Status vorsieht, ergänze ein separates „progress“‑Array mit {task_id, status, timestamp}.

Abschluss:

- Wenn alle Tasks erledigt: Kurzen Abschlussbericht am Ende von markdown_plan ergänzen (Was wurde erreicht? Offene Punkte?).
- Optional: Abschließende Playwright MCP Screenshots der wichtigsten Seiten (Home, Packages, Contact) sichern.

Ausgabeerwartung je Iteration (Chat‑Antworten):

1. Kurze Statuszeile: Was umgesetzt wird.
2. Auflistung der betroffenen Dateien.
3. Validierungsresultate (Lint/Build/Playwright) in 3–6 Zeilen.
4. Hinweis auf aktualisierte Checkboxes/Status in markdown_plan/json_tasks.
5. Nächster Task.

Starte jetzt mit den Tasks aus @docs/improvements-json-tasks.json und synchronisiere Fortschritt mit @docs/improvements-markdown-plan.md. Nutze http://localhost:8080 als Dev‑URL; falls nicht erreichbar, autodetektiere die URL aus dem Dev‑Server‑Output. Achte strikt auf Abhängigkeiten, Reihenfolge und Acceptance Criteria. Arbeite vorsichtig, in kleinen Schritten, mit Validierung nach jedem Edit.
