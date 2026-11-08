# 47 · The night patrol — mission 13

`step: night-patrol` · Part 4 · What arrives · **2:29 → 2:39** (10 мин) · Your turn · таймер 10 мин

**На экране:** картинка 16, патрульный зонд; observe.checks.ts.

## Текст

**[2:29]** Mission thirteen. At 3 am nobody buys. So nobody complains. And v2 is slow.

The observer can be the customer. It asks the shop, on a timer, what must stay true. A check that fails twice in a row becomes an anomaly. Nobody needs to click.

**[2:30]** Make sure the shop runs as v2 — `npm run dev:v2`. And stop `users` and `load`. No traffic at all.

Open `observe.checks.ts` in the shop folder. Three checks, commented out: the home page shows the shop; checkout takes under a second; checkout refuses 99 items. Uncomment them. The observer picks the file up while it runs — its terminal says "checks reloaded".

Wait half a minute, then open the observer — Checks. `npm run mission 13`.

Bonus: copy a line, and make a check of your own. Another page, another limit.

Ten minutes.

*(T — таймер)*

**[2:33]** *(по залу)* The checks don't appear? The observer reads the file from the folder it was started in. Start it in the shop folder.

**[2:38]** *(★, на весь зал)* "Checkout takes under a second" — red. By itself. Nobody was buying. This is how Kevin hears about it at 3 am — before Sandy-9 does.

## Переход
> Let's look at that red row.
