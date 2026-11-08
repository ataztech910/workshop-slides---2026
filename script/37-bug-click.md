# 37 · A click that throws (ветка из Errors)

`step: bug-click` · Part 4 · What arrives · входит в **2:15:30 → 2:18:30** (~1 мин) · возвращает на 36

**На экране:** `Cannot read properties of null (reading 'push')`, код wishlist.

## Текст

"Save for later" does nothing. The user sees — nothing happens. No message, no red.

The error: cannot read properties of `null`, reading `push`. Look at the code. *(на код)* On the first visit there is no wishlist in `localStorage`. `getItem` returns `null`. `JSON.parse(null)` — is `null`. And `null.push` throws.

And see that `as string`? It silenced TypeScript. Not the error.

The fix is one line: `?? '[]'`. It's in the code, commented out. You'll get to it in mission twelve.

## Переход
> *(вернуться к группе Errors)*
