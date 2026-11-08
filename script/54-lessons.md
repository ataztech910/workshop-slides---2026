# 54 · Two things that went wrong

`step: lessons` (карточки case-tool + case-hallucination) · Part 5 · AI · **3:09 → 3:12** (3 мин)

**На экране:** «The agent gave up» и «A confident hallucination».

## Текст

**[3:09]** Lesson one. *"The agent gave up."*

A user asked: "Why is checkout slow?" The agent asked the tool for the operation "checkout". The tool returned an empty list — because in the spans there is no "checkout". There is `chargePayment`. The agent answered: "no data".

The user speaks business. The spans speak code.

We didn't fix the prompt. We fixed the **tool**: when nothing matches, return everything, with a note — "no exact match, here is all you have". After that: two runs out of two, with exact p50, p95, p99.

Tool design beats prompt design.

**[3:10:30]** Lesson two. *"A confident hallucination."*

One run in three, a specialist skipped its tool. And the final report was still confident: "checkout is slow, most likely because of the same inventory problem". That was not in the data. Anywhere.

Two fixes. A report is built only from what the tools returned — no data means: say so. That's why the cards come from code.

And: an LLM is not deterministic. One run proves nothing. You need evals — many runs, PASS or FAIL, on facts.

## Переход
> Now — incident F. The one that actually happened.
