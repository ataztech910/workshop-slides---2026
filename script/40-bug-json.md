# 40 · A 204 read as JSON (ветка из Errors)

`step: bug-json` · Part 4 · What arrives · входит в **2:15:30 → 2:18:30** (~1 мин) · возвращает на 36

**На экране:** «The server is healthy. The page is stuck.»

## Текст

Product 2. "Loading reviews…" Forever.

The API answers `204` — no content — when there are no reviews. That's correct HTTP. The client calls `res.json()` on an empty body. That throws. And nobody catches it.

So: the server is healthy. Every server dashboard is green. And the page is stuck.

This one is visible only from the browser. Without browser telemetry, it doesn't exist.

## Переход
> *(вернуться к группе Errors)*
