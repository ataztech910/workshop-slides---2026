# 35 · Find the bugs — mission 11

`step: find-bugs` · Part 4 · What arrives · **2:03:30 → 2:15:30** (12 мин) · Your turn · таймер 12 мин

**На экране:** Errors · Overview · waterfall · regression banner.
**Руки:** не отвечать за зал. Неверный ответ сам говорит, где искать.

## Текст

**[2:03:30]** Mission eleven. v2 is out. Sandy-9 complains. Kevin's dashboard is green. And Lord Manager wants names.

*(тяжёлое дыхание Lord Manager — можно изобразить)*

Nine things are wrong. Six you met as a customer in part one. Three that only the telemetry shows. Find each one in the observer and name it. DevTools stay closed. No code.

`npm run mission 11` lists the nine questions. To answer one: `npm run mission 11`, then its key — for example `home`. It asks you for the answer. A wrong answer doesn't give you the answer — it tells you where to look.

**[2:04:30]** Where to look: **Errors** — what broke in the browsers, and the `400`. **Overview** — which route takes the traffic. A trace of the home page — the waterfall. And the regression card, bottom right — v1 against v2.

One trap: the observer shows the last fifteen minutes by default. Pick **1h** at the top, or nothing older shows.

Twelve minutes.

*(T — таймер)*

**[2:08]** *(по залу)* Too little in Errors? Pick 1h. Still nothing? Run `npm run users 60` again — the customers make the browser bugs happen.

**[2:11]** The slow one takes two answers: first the request, then the function inside it. Open a slow checkout and look at the waterfall.

One trap in the waterfall: the longest bar is always the request at the top — a parent is never shorter than its child. Look for the lowest step that is still long. That's the time the function spends on its own.

**[2:15]** *(★, на весь зал)* Nine bugs named from the telemetry alone. Now — be honest. How many of them did you notice by hand, in part one? *(пауза, руки)*

## Переход
> Let's go through them. Start with Errors.
