# 42 · Groundhog cycle

`step: case-loop` · Part 4 · What arrives · **2:18:30 → 2:20** (1,5 мин)

**На экране:** картинка 10; GET /api/products.

## Текст

**[2:18:30]** This one isn't on Errors. Because nothing failed.

Open Overview. One route takes about half of all requests: `GET /api/products`. Why?

Type in the search box — and the shop asks the API again. And again. And again. An effect sets state, the new state triggers the effect. Groundhog cycle.

Search "works". The user sees results. And the API gets hammered.

Remember your receiver in part two — when someone typed in the search, the terminal flooded? That was this.

The fix is on the "Fix one" card in a minute.

## Переход
> The next one isn't an error either. And nothing is slow.
