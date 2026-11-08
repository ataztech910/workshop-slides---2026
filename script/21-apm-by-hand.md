# 21 · The APM agent, by hand — mission 4

`step: apm-by-hand` · Part 2 · OpenTelemetry by hand · **1:04 → 1:14** (10 мин) · Your turn · таймер 10 мин

**На экране:** `npm install next-observe`, три файла, `npm run mission 4`.
**Слово:** «APM agent» — библиотека внутри приложения. Не путать с AI-агентами.

## Текст

**[1:04]** Welcome back.

Typing JSON does not scale. Nobody writes spans by hand for every request. What does it is an **APM agent** — a library inside your app that writes those spans for you: for every request, on the server and in the browser — and sends them to your receiver.

A word of warning: "agent" today means two things. An APM agent is a library. No AI in it. The AI agents come later. Different animal.

**[1:05]** Mission four. `npm install next-observe`. Then three files, the same ▶ lines as before:

`instrumentation.ts` — the server half.
`instrumentation-client.ts` — the browser half.
`next.config.ts` — the browser's route to port 4318. Two lines there.

Then stop the shop — Ctrl+C — and start the dev server: `npm run dev`. Until now you had the production build, like your users. From here on we change code, so we need the dev server — it picks up every change on save. In the shop: product 1, "Save for later". Then quantity 20, Buy. And `npm run mission 4` ticks it off.

Ten minutes.

*(T — таймер)*

**[1:07]** *(по залу)* Your receiver terminal is flooding? Good — that is Next.js, it sends a dozen spans per page. The last thing in the mission is the noise-filter line in `print-spans.mjs`. Uncomment it and the terminal becomes readable.

No browser spans? Reload the page in the browser — the page needs the new client file.

**[1:10]** Stuck? The tag `block-3-instrumentation` — the command is in the mission.

**[1:13]** *(★, на весь зал)* Look at your receiver. The shop now writes the spans you typed by hand forty minutes ago — by itself, server and browser. And two bugs from part one are data now: the uncaught error from "Save for later", and the `400` from Buy times 20.

But read that `400` carefully. It says **that** the order failed. Does it say why?

## Переход
> No. And that's a trap.
