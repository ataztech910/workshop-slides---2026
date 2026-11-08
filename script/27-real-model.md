# 27 · A real model

`step: real-model` · Part 2 · OpenTelemetry by hand · **1:46:30 → 1:49:30** (3 мин) · демо ведущего

**На экране:** Kitana или Gemini.
**Руки:** на своём стенде в терминале: `npm run agent -- --real "Why do orders fail?"`. Kitana — через залогиненный claude/codex CLI; Gemini — `GEMINI_API_KEY` + `GEMINI_MODEL` в `.env`. Дождаться ответа и **убедиться, что процесс завершился** (это одна команда, не сервер).

## Текст

**[1:46:30]** The same loop, with the thinking switched on. Watch my screen.

*(запустить)* `npm run agent -- --real "Why do orders fail?"`

Two ways to get a real model — your choice. **Kitana** is a router: it can use the claude or codex command-line tool you are already logged in to — no API key, that's what I use on my test bench, because it's simple — or a local model through Ollama, or an API key. You give it a chain — claude, codex, ollama, api-key — and it uses the first one that is available. Or **Gemini**: put `GEMINI_API_KEY` and `GEMINI_MODEL` in `.env`, and ADK talks to Gemini directly.

**[1:47:30]** *(пока идёт ответ)* Look at the lines. "Model asks" — it decided by itself to call `rejected_orders`. "Code ran it" — my code, my spans. "Model answers" — in its own words now, not a template. But the reason is the same, because it came from the same tool.

**[1:48:30]** One question is several model calls. Real calls cost money, and free tiers have limits — a free Gemini key allows a few requests per minute, and one investigation later today makes seven to twelve. So: the mock is enough for every mission today. A real model is a bonus. And the tool you'll see after this uses the same switch — mock by default, real when you ask for it.

## Переход
> That's part two. You did everything by hand. Now — why would you want a tool at all?
