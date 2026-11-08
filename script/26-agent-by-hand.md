# 26 · Your first agent, by hand — mission 8

`step: agent-by-hand` · Part 2 · OpenTelemetry by hand · **1:36:30 → 1:46:30** (10 мин) · Your turn · таймер 10 мин

**На экране:** `tools/agent.mjs`, три строки ▶, вывод `model asks / code ran it / model answers`.

## Текст

**[1:36:30]** Mission eight. Your first AI agent.

Mission seven answered "why are orders refused?" with a script you wrote the filter for. Now a model answers it. But a model has never seen your shop. Remember the loop from part one: a model, an instruction, tools.

Open `tools/agent.mjs`. Read the tool first — `rejectedOrders`. A name. A **description** — the model reads that to decide when to call it. And the code — it reads your `spans.ndjson`, the same file, with the same filter as mission seven.

**[1:37:30]** Then three lines, **in this order**, and after each one run `npm run agent "Why do orders fail?"`:

The loop first — `runner.runAsync`. Run it: the model has no tools. It says it could only guess — so it won't.

Then the tool — `tools.push`. Run it again: it *has* the tool. And it still doesn't look. Because nothing in the instruction says when to use it.

Then the step — `steps.push`. Run again: "model asks", "code ran it", "model answers" — with the reason from your own `placeOrder` span.

It's a mock model by default — no key, no network, the same loop. `npm run mission 8` checks it.

*(T — таймер)*

**[1:41]** *(по залу)* Watch the printout change between the runs — that's the whole lesson. Three lines, three different agents.

**[1:44]** Behind: `npm run agent -- --solution`.

**[1:45:30]** *(★, на весь зал)* Look at what happened. The model asked for the tool. *Your* code ran it on *your* file. The result went back. And the model answered. Every fact in that answer came from a tool — and you watched every step of the loop.

You built it with Google ADK — the same toolkit the AI agents later today are made of.

## Переход
> The mock is the loop without the thinking. Let me switch the thinking on.
