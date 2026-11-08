# 48 · Checks

`step: checks-page` · Part 4 · What arrives · **2:39 → 2:40** (1 мин)

**На экране:** observe.checks.ts + скриншот страницы Checks.

## Текст

**[2:39]** Red in v2 — found without a single user.

The file is plain data. A name, a URL, a method, a body, how often — and what you expect: status 200, under 1000 milliseconds. Or for 99 items: status 400 — a rule that must hold.

`everySeconds: 10` matters. The default is a minute, and an anomaly needs two failures in a row — we don't have that long today.

And if the whole app is down, you get one anomaly — not one per check.

What happens with that anomaly? That's after the break.

## Переход
> Break.
