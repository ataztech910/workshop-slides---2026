# 57 · Fast. No error. Wrong data.

`step: wrong-data` · Part 5 · AI · **3:16 → 3:18:30** (2,5 мин)

**На экране:** скриншот чата «Wrong data · asked for 1, got back 3».
**Руки:** в обзервере открыть аномалию `data_integrity` → её трейс: плашка «Wrong data», метка `wrong data` на строке `getProductById` в waterfall, в событии `ok: false · expected: 1 · actual: 3`. Потом карточку в чате.

## Текст

**[3:16]** Asked for product 1. Got product 3.

Status: 200. Time: 20 milliseconds. No error. Somebody else's row.

The cause: a database pooler in transaction mode. Our driver sent several queries at once over one connection — pipelined. And under load, the pooler mixed up the answers. Not "no answer". An answer — to somebody else's query.

**[3:17]** We proved it with a script: thirty parallel queries. In five seconds only five completed — and two of those five returned another query's data.

**[3:17:30]** Here it is in the shop, v3. *(открыть трейс)* The trace page says "Wrong data — fast and without an error, so neither the status nor the duration shows it". On the waterfall, `getProductById` is marked `wrong data`. And the event on it: `ok: false`, expected 1, actual 3.

The chat says: "Wrong data — asked for 1, got back 3". With a real model: on v2, zero out of 31. On v3, eleven out of 191.

No latency chart catches this. No status code catches this. It's fast and green and wrong.

## Переход
> So how did the observer see it at all?
