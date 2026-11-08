# 55 · These aren't the goods you ordered

`step: teleporter` · Part 5 · AI · **3:12 → 3:13:30** (1,5 мин) · демо ведущего

**На экране:** картинка 18 (glitch).
**Руки:** заранее: тег `block-6-incident-f`, обзервер запущен, v2 с нагрузкой уже в истории. На сцене: Ctrl+C v2 → `npm run dev:v3` → `npm run load 40` (нагрузка сама запрашивает разные товары, чтобы запросы пересекались). Открыть Overview. **Не обещать** увидеть это в браузере: 0 из 40 загрузок страниц при обычной нагрузке, 2 из 40 при RPS=30.

## Текст

**[3:12]** *(тяжёлое дыхание Lord Manager)*

v2 was slow. So Scrappy shipped a fix. v3. *(запустить `npm run dev:v3` и нагрузку)*

Look at Overview. No new errors — only the flaky inventory we already know. Checkout — fast again, p95 under half a second. Everything green.

Fixed?

**[3:12:30]** And then colonies start to complain. *"These aren't the goods we ordered."* Fast. Sealed. On time. And somebody else's.

How would you notice that by hand? You open the page — it's fine. You open it again — it's fine. I won't even try to show it in a browser: under normal load, zero out of forty page loads go wrong. It needs pressure.

## Переход
> This is not invented. It happened to us. Six times.
