# 58 · The app has to ask

`step: integrity` · Part 5 · AI · **3:18:30 → 3:21** (2,5 мин)

**На экране:** `addEvent('integrity_check', { ok, expected, actual })`.

## Текст

**[3:18:30]** The app has to ask: did I get what I asked for?

Look at the code. *(на код)* I query product `id`. Then one line: an event on the active span — `integrity_check`. `ok`: is the id I got back the id I asked for? `expected`, `actual`.

That's it. One line in `lib/db.ts`.

**[3:19:30]** The observer raises an anomaly on the first `ok: false`. Not after two, not after a threshold. The first one. Because a wrong answer is never "a bit slow".

And notice: a check from outside — like the night patrol — almost never catches this. We had a check "product 1 is the mug" running all through the demo. It never failed once. One request alone never collides. And by hand: I opened product 1 forty times under normal load — always the mug. Only at thirty requests per second — two out of forty. It needs real traffic, checked from inside.

**[3:20:30]** Automatic instrumentation does not see this, and it cannot. It doesn't know what you asked for. It's the same lesson as `placeOrder` in part two: some truths only your code knows. Measure "correct", not only "fast" and "200".

## Переход
> All of this — in production.
