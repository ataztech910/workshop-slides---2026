# 60 · AI review found 5 of 6

`step: review-vs-observe` · Part 5 · AI · **3:23 → 3:24:30** (1,5 мин)

**На экране:** «review ≠ observability».

## Текст

**[3:23]** While I was building this shop, the pre-commit AI review blocked my commit. Because of my own deliberate bugs. *(улыбнуться)*

It found five of the six. The search loop. `null.push`. The missing entry in `SPECS`. The 204. And 20 versus 10.

It did not find `Math.random()` in render — the hydration mismatch. That only shows when the code runs.

**[3:24]** So — they catch different things. Review tells you what the code *could* do. Telemetry tells you what it *did*. You want both.

## Переход
> And Kevin?
