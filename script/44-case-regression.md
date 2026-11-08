# 44 · New firmware

`step: case-regression` · Part 4 · What arrives · **2:21:30 → 2:23** (1,5 мин)

**На экране:** картинка 11, Scrappy.

## Текст

**[2:21:30]** Scrappy: *"I'm givin' her all she's got, Kevin!"*

New firmware. v2. The regression card says: `chargePayment` — around 230 milliseconds in v1, around 2,000 in v2. Ten times slower.

Open the operation page: two speeds, one per version.

And look at `getProductById` — no change. So it's not the database. It's the payment.

**[2:22:30]** That is why `service.version` is on every span. Without it, you'd see "checkout got slow sometime today". With it, you see: it was this deploy.

## Переход
> And the last one — the hardest kind.
