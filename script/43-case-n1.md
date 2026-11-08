# 43 · The loader droid

`step: case-n1` · Part 4 · What arrives · **2:20 → 2:21:30** (1,5 мин)

**На экране:** картинка 09; N+1.

## Текст

**[2:20]** *"Fear is the mind-killer. N+1 is the page-killer."*

Open a trace of the home page. The waterfall. `listProducts` — and then `getProductById`, five times. One after another.

The loader droid flies to the warehouse once per crate. Five crates, five trips.

Each call is fast. p50 equals p95. Nothing is "slow" on any chart. The only thing that shows it is the **structure** of one trace. The shape. That's why we drew trees in part two.

And it's not only humans who miss it. When we tested the AI agents on this exact page, one run in five the agent looked only at the statistics — p50, p95, all the same — never opened a trace, and said "no bottleneck found". Keep that in mind for part five.

## Переход
> And now — something did get slow. After a deploy.
