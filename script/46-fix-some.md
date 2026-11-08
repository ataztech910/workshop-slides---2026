# 46 · Fix one — mission 12

`step: fix-some` · Part 4 · What arrives · **2:24 → 2:29** (5 мин) · Your turn · таймер 5 мин

**На экране:** три фикса — wishlist, reviews, search.

## Текст

**[2:24]** Mission twelve. Fix one. And prove it.

The fix for three bugs is already in the code, commented out, right next to the bug:
`app/product/[id]/wishlist.tsx` — "Save for later".
`app/product/[id]/reviews.tsx` — the reviews.
`app/search.tsx` — the search loop.

Pick one. **Before** you fix it, look: observer, Errors, 1h, its entry. Note how many times it happened and "last seen".

Then uncomment the line, read the "Why". And `npm run mission 12` — it opens the shop in its own browser, does exactly that thing, and asks the observer whether the error came during that run.

Then look at Errors again. Five minutes.

*(T — таймер)*

**[2:26]** *(по залу)* If you use an AI assistant — the Errors card has a "Copy prompt" button. That works too. The check is the same.

**[2:28:30]** *(★, на весь зал)* The entry did not grow. "Last seen" is still from before your fix. That's the proof. Fixed means the error stopped coming — not "it works on my machine".

## Переход
> That works while somebody uses the shop. Who tells you at 3 am?
