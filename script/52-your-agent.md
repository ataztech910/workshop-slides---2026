# 52 · Build your own droid — mission 14

`step: your-agent` · Part 5 · AI · **2:55:30 → 3:07:30** (12 мин) · Your turn · таймер 12 мин

**На экране:** observe.agents.ts — три строки ▶; вопрос в Chat.
**Руки:** у себя сделать миссию на проекторе к концу таймера — показать карточки.

## Текст

**[2:55:30]** Mission fourteen. The patrol raised the alarm. Now somebody has to find out why. Build your own latency droid: what it may use, and how it works. Then ask it.

Open `observe.agents.ts` in the shop folder. It starts with an empty list. Three lines:

`tools.push('search_traces', 'get_trace')` — what your droid may use. Without these it can't open a trace.

Step three of its instruction — "open one slow trace, find the highest self time". How it works.

And `specialists.push(latencyAgent)` — your droid replaces the built-in one.

Save. The observer reloads the file — its terminal lists your `latency_agent`.

**[2:57]** Then the observer, Chat. Ask: *"Checkout is slow. What is causing it, and which deployment introduced it?"*

Watch the steps — which droid calls which tool. And the cards under the answer.

With a real model, an orchestrator and three specialists take thirty to fifty seconds — every droid is its own model call. That's why the chat shows the steps as they happen. Otherwise half a minute of silence looks like it hung.

`npm run mission 14`. Twelve minutes.

*(T — таймер)*

**[2:59]** *(по залу)* No regression card? The observer forgets everything on a restart. It needs both versions: `dev:v1` with `npm run load 30`, then `dev:v2` with `load 30` again. The mission prints exactly that.

A question you asked *before* you saved the file was answered by the built-in droid. Ask again.

**[3:02]** It's the mock model again — it calls every tool once and opens the slowest trace. That's enough to get the cards. With a real model: `npm run observer:real`.

Bonus: comment the tools line out again, save, ask again. No trace tools — no function. See what's left.

**[3:06:30]** *(★, на весь зал, показать у себя)* Two cards. Regression: `chargePayment`, v1 to v2, p95 almost ten times higher. Hotspot: `chargePayment`, in `lib/payment.ts` — the file, from `'use observe'` in mission six.

Your droid found the slow deployment and the function behind it. And every claim has a card — built from a tool result, not from the model.

## Переход
> Now — what happens when you leave this running all night?
