# 24 · 'use observe' — mission 6

`step: use-observe` · Part 2 · OpenTelemetry by hand · **1:23:30 → 1:28:30** (5 мин) · Your turn · таймер 5 мин

**На экране:** `'use observe'` в начале файла → каждый экспорт становится спаном.

## Текст

**[1:23:30]** Mission six. One line.

You know `'use client'` and `'use server'` from Next.js. This one is `'use observe'`. Put it at the top of a file — and every function that file exports becomes a span. With its duration, with the exception if it throws, and with the file it lives in: `code.filepath`.

The line is already there, commented out, at the top of four files in `lib/`: `payment.ts`, `db.ts`, `catalog.ts`, `inventory.ts`. Uncomment all four. Then in the shop: the home page, a product, buy one of anything — quantity 1 this time.

`npm run mission 6`. Five minutes.

*(T — таймер)*

**[1:26]** *(по залу)* You should see `getProductById`, `chargePayment`, `checkInventory` under the requests in your receiver.

**[1:28]** *(★)* Every function in `lib/` is a span now, with its file. When something is slow, the trace will point at the function and the file. No tracer, no try, no finally.

If you are behind — the tag `block-3-instrumentation` is exactly this state.

## Переход
> Now you have a lot of raw data. Let's answer a real question with it.
