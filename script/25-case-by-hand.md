# 25 · One case, by script — mission 7

`step: case-by-hand` · Part 2 · OpenTelemetry by hand · **1:28:30 → 1:36:30** (8 мин) · Your turn · таймер 10 мин (закончить на 8)

**На экране:** `tools/cases/rejected.mjs`, три строки `checks.push`, `npm run case checkout-400`.

## Текст

**[1:28:30]** Mission seven. "Payment failed." Which orders were refused — and why? Find it in your raw spans.

First: buy 20 in the shop once more, so there is a fresh refused order with your reason on it.

Open `tools/cases/rejected.mjs`. Three lines. Each one narrows the search:
— the span is a request the shop *received* — that's `kind` 2, a server span;
— its route is `/api/checkout`;
— its status code is `400`.

Uncomment them **one by one**, and after each one run `npm run case checkout-400`. Watch the number go down. And at the end the script finds your `placeOrder` in the same trace and reads the reason.

`npm run mission 7`. Eight minutes.

*(T — таймер)*

**[1:31]** *(по залу)* It found refused orders, but "no reason"? Those were refused before mission five — before your span existed. Buy 20 again.

**[1:34]** Stuck: `npm run case checkout-400 -- --solution`.

**[1:35:30]** *(★, на весь зал)* Filter. Group by trace. Read the attributes. That's what an observability backend does all day — you just did it with a script. There are five more cases in `tools/cases/` if you want to explore at home.

## Переход
> Now let's not write the filter. Let's ask a model.
