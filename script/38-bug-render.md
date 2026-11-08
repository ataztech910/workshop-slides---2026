# 38 · A render that throws (ветка из Errors)

`step: bug-render` · Part 4 · What arrives · входит в **2:15:30 → 2:18:30** (~1 мин) · возвращает на 36

**На экране:** «The error boundary hid it from the user — and from you».

## Текст

Product 4, "Show details" — and the page says "Something went wrong". Friendly. Calm. Nothing alarming.

Product 4 has no entry in `SPECS`. The type says it always has one. The type lies.

And `error.tsx` — the error boundary — catches it and shows a nice page. So the user sees a polite message, and *you* see nothing.

But React still reports it: "occurred in the `<Details>` component". The APM agent picks that up — and here it is.

An error boundary is UX. It is not observability.

## Переход
> *(вернуться к группе Errors)*
