# 17 · Your own receiver — mission 1

`step: receiver` · Part 2 · OpenTelemetry by hand · **0:32 → 0:39** (7 мин) · Your turn · таймер 7 мин

**На экране:** `npm run mission 1`, структура пачки, цель `porto-shop  GET /api/products  42.0 ms  ok`.
**Руки:** показать у себя на экране один раз Cmd+/ на строке с ▶. Потом **T**.

## Текст

**[0:32]** Mission one. Your own receiver. This is the first thing every telemetry backend does — and it is not much.

Open a second terminal in the shop folder and type `npm run mission 1`. *(пауза)* It tells you the story, the steps, and a checklist with crosses.

Open `tools/receiver.mjs`. The plumbing is ready — an HTTP server on 4318. Five lines are commented out. Each one has a small triangle at the end, and under it a line that starts with "Why". *(показать у себя)* Put the cursor on the line, press Cmd+slash — on Linux and Windows Ctrl+slash. The line is alive. Read the "Why" before you uncomment the next one. The "Why" is the lesson, the line is just the line.

**[0:33]** Those five lines: keep the chunks of the body, decode the batch, save it, print it, answer `200` with an empty object. Until you uncomment them, the receiver answers `501` — with a hint.

Then `tools/print-spans.mjs` — the first four lines with a triangle. Each one fills one field of the printed line: who sent it, how many milliseconds, was it an error.

Start it: `npm run receiver`. Send the sample span with the `curl` from the mission. When your terminal says `porto-shop  GET /api/products  42.0 ms  ok` — you are done.

Seven minutes. Go.

*(T — таймер)*

**[0:35]** *(по залу)* If your receiver says `501` — that's not a bug, that's a hint. Read it: it says which line is still commented out.

**[0:37]** Who has the star already? *(руки)* Good. If you are stuck: `npm run receiver -- --solution` — the same file, all lines uncommented.

**[0:38:30]** *(★, на весь зал)* Look at what you have. A server, a JSON body, an answer. That is all a telemetry backend is, at its core. Grafana, Dynatrace, Datadog take the same POST, on the same port. Everything you send from now on is kept in one file: `.telemetry/spans.ndjson` — one batch per line.

## Переход
> You have a receiver. Now you are the app. Send it something that matters.
