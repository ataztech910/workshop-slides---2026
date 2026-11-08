# 39 · Hydration mismatch (ветка из Errors)

`step: bug-hydration` · Part 4 · What arrives · входит в **2:15:30 → 2:18:30** (~1 мин) · возвращает на 36

**На экране:** diff `+ 30 / - 5` в `<Viewers>`.

## Текст

Every product page says "N people are looking at this". The server rendered 5. The browser rendered 30.

Why? `Math.random()` — during render. The server rolls the dice, the browser rolls them again, and React says: hydration failed, the text doesn't match.

Nobody saw anything. The number just changed. You could click this shop for a week by hand and never notice.

And in production React gives you only an error code — not this nice diff. Invisible by hand.

## Переход
> *(вернуться к группе Errors)*
