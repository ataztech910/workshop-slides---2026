# 16 · The black box

`step: black-box` · Part 2 · OpenTelemetry by hand · **0:30:30 → 0:32** (1,5 мин)

**На экране:** картинка 06, TR-4CE с «чёрным ящиком»; OTLP/HTTP, :4318.

## Текст

**[0:30:30]** TR-4CE hands Kevin a black box. And he says: *"I am fluent in over six million formats. Sadly, only one of them matters."*

That one is **OTLP**. The format every backend reads.

**[0:31]** Three facts, and you will use all three in the next five minutes.

It goes over HTTP: a `POST` to `/v1/traces`. The body is JSON — or protobuf, which is the same thing, smaller.

The port is **4318**. That is the standard OTLP port. Every SDK sends there by default.

And one POST is one **batch**: who sent it, which library made the spans, and the spans themselves.

## Переход
> Before any tool — you build the thing that receives that box.
