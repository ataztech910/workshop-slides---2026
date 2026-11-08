# 18 · Your first span — mission 2

`step: first-json` · Part 2 · OpenTelemetry by hand · **0:39 → 0:44** (5 мин) · Your turn · таймер 5 мин

**На экране:** картинка 07b — Kevin счастлив видеть JSON. «Report Sandy-9's failed order by hand».

## Текст

**[0:39]** Mission two. Kevin has never been so happy to see JSON.

Remember Sandy-9? Their order failed, and Kevin's dashboard is all green. Now *you* are the app. Write the span that reports that failed order — with the reason.

`npm run mission 2`. Then edit `tools/span.json` and send it with the same `curl`. After every send, your receiver prints a checklist under the span.

What it wants: the name `POST /checkout`. A full second — so the end time is one second after the start. A status that says error — that's code 2. And two attributes: `order.quantity`, 20, and `order.rejected` — the reason, in words.

Every cross tells you which field and what to put there. Five minutes.

*(T — таймер)*

**[0:41]** *(по залу)* Times are in nanoseconds, as strings. Nine zeros per second. If your duration looks like a week — count the digits.

Edited the file and nothing changed? You have to send it again. Save is not send.

**[0:43:30]** *(★)* Stop for a second and look at the checklist. You just wrote, by hand, every field your telemetry will have all day: a name, a time, a status — and attributes. The name, time and status say **that** something failed. The attributes say **why**. Soon the shop will fill these fields by itself. Thousands of times a second.

## Переход
> One span is a line. Let's make it a story.
