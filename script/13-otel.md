# 13 · OpenTelemetry

`step: otel` · Part 1 · Theory · **0:24 → 0:27** (3 мин)

**На экране:** API · SDK · OTLP · semantic conventions; список бэкендов.
**Главное:** данные ≠ то, куда они уходят. Бэкенды назвать вслух.

## Текст

**[0:24]** OpenTelemetry. Named after Master O'Tel, of course. *(пауза)*

OpenTelemetry is four things.
An **API** — what your code calls to create a span.
An **SDK** — what batches those spans and sends them out.
**OTLP** — the protocol on the wire. What the spans look like when they travel.
And **semantic conventions** — agreed names. An HTTP route is called `http.route` everywhere, not "path" in one place and "url" in another.

**[0:25]** And here is the most important idea of the day. Please remember it, even if you forget everything else:

**The data, and where it goes, are two different things.**

Your app speaks one protocol, out. Who reads it is your choice. Grafana Tempo reads OTLP. Dynatrace reads OTLP. Honeycomb. Datadog. All of them.

So you instrument your app once — and you can change the backend tomorrow without touching a line of code.

**[0:26]** OpenTelemetry has three signals: traces, metrics and logs. Today we work with traces — the story.

And everything you build in part two — the receiver, the spans, your own span — works with any of those backends. Not with a product. With the standard.

## Переход
> One more piece of theory, and then it's all keyboard. Today there are also AI agents — so: how does an agent actually work?
