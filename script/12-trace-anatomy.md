# 12 · Anatomy of a trace

`step: trace-anatomy` · Part 1 · Theory · **0:20 → 0:24** (4 мин)

**На экране:** дерево POST /api/checkout → placeOrder → chargePayment, ниже span / resource / context.

## Текст

**[0:20]** This is one trace. One request: somebody pressed "Buy". `POST /api/checkout` — almost two seconds.

Inside it: `getProductById`, 18 milliseconds — fine. Then `placeOrder`, 1.9 seconds. And inside `placeOrder` — `chargePayment`, 1.9 seconds. *(показать на «← here»)* Here. That is where the time went.

You didn't read a single log line to know that. The shape tells you.

**[0:21]** So a trace is a tree of spans in time. The tree answers **where**. The attributes answer **under which conditions**.

Each span: a name, a start, a duration, a status, attributes.

When something throws, the exception becomes an **event** on the span — a timestamped note — and the status says "error".

**[0:22]** Then the **resource**. That is not about one span — it is about who sent it. `service.name` — "porto-shop". And `service.version` — "v2". It goes on every single span.

Remember `service.version`. In two hours it will tell you which deployment broke the shop.

**[0:23]** And **context**. When a request goes from one service to another, how does the second one know it is the same trace? A header: `traceparent`. The trace ID and the parent span ID, glued to the request.

On Porto-7, that is the mission number glued to every crate. Whoever unloads the crate on the other station writes into the same voyage log.

**[0:23:30]** One promise: in ten minutes you will see this exact thing as JSON. On your own screen.

## Переход
> But first — who defines what this JSON looks like?
