# 22 · Sensors and the captain's log

`step: sensors` · Part 2 · OpenTelemetry by hand · **1:14 → 1:15:30** (1,5 мин)

**На экране:** картинка 08, B3-EP, «It's a trap!»

## Текст

**[1:14]** B3-EP beeps. *(изобразить)* "Four hundred." That's all he can say.

The ship's sensors log every voyage. *"Voyage took 20 minutes. Status: OK-ish."* They know when it left, when it arrived, whether it arrived. They don't know why the cargo was refused.

Automatic spans are the sensors. HTTP server, fetch, page loads, browser errors — they see **what** happened.

**[1:15]** `POST /api/checkout`, `400`. The reason was in the response body — "quantity must be from 1 to 10" — and the response went to the browser and was gone.

To see a reason, somebody has to write it on a span. The captain. In the log. That's you.

## Переход
> A span of your own.
