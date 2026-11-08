# 59 · The same, in production

`step: prod` · Part 5 · AI · **3:21 → 3:23** (2 мин) · демо ведущего

**На экране:** скриншот чата.
**Руки:** по PROD_DEMO.md, всё поднято заранее: v1 и v2 задеплоены (`SHOP_VERSION` / `OBSERVE_SERVICE_VERSION`), `BASE_URL=https://<shop>.vercel.app npm run load 60` после каждого деплоя, пароль UI введён до начала (залу не показывать). Модель на сервере — любая с ключом: Kitana — роутер с цепочкой `claude → codex → ollama → api-key` (`createRouter` в `@kitana-sdk/core`): на сервере без CLI — Ollama или API-ключ; либо Gemini напрямую. Ключ с оплатой: у бесплатных тарифов лимит запросов в минуту, а расследование делает 7–12 вызовов. Обзервер не перезапускать — история в памяти.
**Нет Wi-Fi:** `npx next-observer@^0.3 collector --demo` — тот же сценарий v1 → v2 локально.

## Текст

**[3:21]** The same shop, in production. The app on Vercel. The observer on a small server.

*(открыть прод-обзервер)*

What changed in the app? Nothing. One environment variable — where the OTLP goes. That's the slide from part one, one last time: the data, and where it goes, are two different things.

**[3:22]** *(показать аномалии)* After I redeployed v2, the detector raised the payment regression by itself — nobody asked.

*(в чате, вопрос набран заранее)* "Did the last deployment make anything slower?" — v1 to v2, `chargePayment`, about eight and a half times, in `lib/payment.ts`. Same pages. Same droids. Same cards. On real traffic.

## Переход
> One last story — about AI catching bugs before they ship.
