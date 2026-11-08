# 19 · Make it a tree — mission 3

`step: tree` · Part 2 · OpenTelemetry by hand · **0:44 → 0:49** (5 мин) · Your turn · таймер 5 мин

**На экране:** второй спан: тот же traceId, новый spanId, parentSpanId первого.

## Текст

**[0:44]** Mission three. The order failed *inside the payment*. Show it: the payment is a child of the checkout, in the same trace.

`npm run mission 3`. In `tools/span.json`, add a second span to the `spans` array — mind the comma between them.

Three ids. *(показать на экран)* The `traceId` — the same as the first span: same request. The `spanId` — new, its own. The `parentSpanId` — the `spanId` of your first span: "I happened inside that one."

The name: `chargePayment`. Status error. And the times must be inside the parent's time.

You don't need to invent the ids — the hints print your real ones. Copy them.

And in `print-spans.mjs`, uncomment the indent line — so a tree looks like a tree.

*(T — таймер)*

**[0:46:30]** *(по залу)* If the JSON breaks — it's the comma. It's always the comma.

**[0:48]** *(★, на весь зал)* Look at your receiver: `chargePayment` is indented under `POST /checkout`. Two spans became one trace.

Four things to take away. One: same `traceId` means same request; `parentSpanId` means "inside which span". Two: between services, that pair travels in the `traceparent` header — the mission number on the crate. Three: time is nanoseconds, as strings, because JavaScript numbers can't hold them. Four: if your receiver is down, the sender drops the spans — and the app does not break. Telemetry must never take your app down.

## Переход
> That's the hand-made part. Break — and after the break, the shop starts talking by itself.
