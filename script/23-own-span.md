# 23 · A span of your own — mission 5

`step: own-span` · Part 2 · OpenTelemetry by hand · **1:15:30 → 1:23:30** (8 мин) · Your turn · таймер 8 мин

**На экране:** `app/api/checkout/route.ts`, четыре строки ▶.

## Текст

**[1:15:30]** Mission five. Make the `400` say why.

Open `app/api/checkout/route.ts`. Four lines with a triangle.

The import: `trace` from `@opentelemetry/api`. That's the OpenTelemetry API — the part your own code talks to. It came with next-observe. Nothing to install.

`startSpan('placeOrder')` — a span with a business name. Not "POST something". "Place order".

`setAttribute('order.quantity', …)` — what was asked for.

And `setAttribute('order.rejected', …)` — **the reason**. Right where the code decides to refuse.

The span ends in `finally` — that one is already there. A span that never ends is never sent.

Save — the dev server picks it up. Then in the shop: product 1, quantity 20, Buy. `npm run mission 5`. Eight minutes.

*(T — таймер)*

**[1:18]** *(по залу)* There is a little stand-in object above the line — it does nothing, so the shop works before you uncomment. Don't delete it, just uncomment the line under it.

**[1:22:30]** *(★, на весь зал)* Look at the receiver: `placeOrder`, inside `POST /api/checkout`, and on it: `order.rejected = quantity 20, allowed 1–10`.

No automatic instrumentation in the world knows what an order is. Your code does. Put the reason where the telemetry is — and nobody has to guess at 3 am.

## Переход
> That was a tracer, a try and a finally. For plain functions there's a shorter way.
