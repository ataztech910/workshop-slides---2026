# Текст воркшопа слово в слово

Один файл на каждый шаг колоды (`src/deck/deck.ts`, массив `steps`), в порядке показа. Ветки 37–41 открываются из группы Errors (36) и возвращаются в неё.

- **Текст** — то, что говорится, по-английски, с метками времени `[h:mm]` от начала (0:00 — первый слайд).
- *Курсив в скобках* и строки «На экране / Руки» — ремарки для себя, по-русски.
- **Переход** — последняя фраза перед следующим слайдом.
- В «Your turn»: вводная, реплики по залу по таймеру, разбор на ★ в последние 30–60 с.

## Тайминг: 210 минут

Минуты в заметках карточек (`detail.note`) складываются в 198, вместе с перерывами в 228. Ещё без минут идут карточки багов, уроки, Checks и вопросы. Перебор появился, когда добавили миссию 8 и «A real model» (+13 мин): план их не перераспределил. Чтобы уложиться в 210, здесь ужато:

- теория части 1 (span, trace, otel, agents): 20 → 13,5 мин;
- миссия 7: 10 → 8 мин (таймер на карточке 10, останавливать на 8);
- разбор багов: группа Errors 3 мин, открыть 1–2 карточки; loop, N+1, regression, flaky по 1–1,5 мин;
- перерыв 2: 15 → 12 мин;
- часть 5: droid-crew 3, бюджет 1,5, уроки 3, инцидент F с продом 11 (было 15), эпилог 2, вопросы 3,5.

Остальные миссии и первый перерыв не тронуты. Чтобы вернуть перерыв 2 к 15 минутам, сними ещё 3 минуты с разговорных слайдов части 5.

| # | Файл | Время | Мин |
|---|---|---|---|
| 01 | [AI-Native Observability](01-title.md) | 0:00 → 0:02 | 2 мин |
| 02 | [Andrei Tazetdinov](02-about-me.md) | 0:02 → 0:03 | 1 мин |
| 03 | [GDG Linz](03-gdg-linz.md) | 0:03 → 0:03:30 | 30 с |
| 04 | [Is your machine ready?](04-doctor.md) | 0:03:30 → 0:06:30 | 3 мин |
| 05 | [Part 1 · Theory](05-part-1.md) | 0:06:30 → 0:07 | 30 с |
| 06 | [Meet Kevin](06-kevin.md) | 0:07 → 0:07:30 | 30 с |
| 07 | [The crew of Porto-7](07-crew.md) | 0:07:30 → 0:08:30 | 1 мин |
| 08 | [Porto-7](08-station.md) | 0:08:30 → 0:09:30 | 1 мин |
| 09 | [Be a customer](09-use-shop.md) | 0:09:30 → 0:14:30 | 5 мин |
| 10 | ["No errors here"](10-no-errors.md) | 0:14:30 → 0:16:30 | 2 мин |
| 11 | [Logs you have. Story you have not.](11-span.md) | 0:16:30 → 0:20 | 3,5 мин |
| 12 | [Anatomy of a trace](12-trace-anatomy.md) | 0:20 → 0:24 | 4 мин |
| 13 | [OpenTelemetry](13-otel.md) | 0:24 → 0:27 | 3 мин |
| 14 | [How an agent works](14-agents-theory.md) | 0:27 → 0:30 | 3 мин |
| 15 | [Part 2 · OpenTelemetry by hand](15-part-2.md) | 0:30 → 0:30:30 | 30 с |
| 16 | [The black box](16-black-box.md) | 0:30:30 → 0:32 | 1,5 мин |
| 17 | [Your own receiver — mission 1](17-receiver.md) | 0:32 → 0:39 | 7 мин |
| 18 | [Your first span — mission 2](18-first-json.md) | 0:39 → 0:44 | 5 мин |
| 19 | [Make it a tree — mission 3](19-tree.md) | 0:44 → 0:49 | 5 мин |
| 20 | [Break](20-break-1.md) | 0:49 → 1:04 | 15 мин |
| 21 | [The APM agent, by hand — mission 4](21-apm-by-hand.md) | 1:04 → 1:14 | 10 мин |
| 22 | [Sensors and the captain's log](22-sensors.md) | 1:14 → 1:15:30 | 1,5 мин |
| 23 | [A span of your own — mission 5](23-own-span.md) | 1:15:30 → 1:23:30 | 8 мин |
| 24 | ['use observe' — mission 6](24-use-observe.md) | 1:23:30 → 1:28:30 | 5 мин |
| 25 | [One case, by script — mission 7](25-case-by-hand.md) | 1:28:30 → 1:36:30 | 8 мин |
| 26 | [Your first agent, by hand — mission 8](26-agent-by-hand.md) | 1:36:30 → 1:46:30 | 10 мин |
| 27 | [A real model](27-real-model.md) | 1:46:30 → 1:49:30 | 3 мин |
| 28 | [Part 3 · The observer](28-part-3.md) | 1:49:30 → 1:50 | 30 с |
| 29 | [There has to be a better way](29-three-am.md) | 1:50 → 1:51 | 1 мин |
| 30 | [Two packages, one letter apart](30-words.md) | 1:51 → 1:52 | 1 мин |
| 31 | [Good evening, Kevin — mission 9](31-wakes-up.md) | 1:52 → 1:57 | 5 мин |
| 32 | [A tour on your own spans](32-tour.md) | 1:57 → 2:00 | 3 мин |
| 33 | [Part 4 · What arrives](33-part-4.md) | 2:00 → 2:00:30 | 30 с |
| 34 | [Customers, two deployments — mission 10](34-deploys.md) | 2:00:30 → 2:03:30 | 3 мин |
| 35 | [Find the bugs — mission 11](35-find-bugs.md) | 2:03:30 → 2:15:30 | 12 мин |
| 36 | [Errors — pick one to open](36-errors.md) | 2:15:30 → 2:18:30 | 3 мин, вместе с открытыми карточками 37–41 |
| 37 | [A click that throws (ветка из Errors)](37-bug-click.md) | 2:15:30 → 2:18:30 | ~1 мин |
| 38 | [A render that throws (ветка из Errors)](38-bug-render.md) | 2:15:30 → 2:18:30 | ~1 мин |
| 39 | [Hydration mismatch (ветка из Errors)](39-bug-hydration.md) | 2:15:30 → 2:18:30 | ~1 мин |
| 40 | [A 204 read as JSON (ветка из Errors)](40-bug-json.md) | 2:15:30 → 2:18:30 | ~1 мин |
| 41 | [Front and back disagree (ветка из Errors)](41-bug-400.md) | 2:15:30 → 2:18:30 | ~1 мин |
| 42 | [Groundhog cycle](42-case-loop.md) | 2:18:30 → 2:20 | 1,5 мин |
| 43 | [The loader droid](43-case-n1.md) | 2:20 → 2:21:30 | 1,5 мин |
| 44 | [New firmware](44-case-regression.md) | 2:21:30 → 2:23 | 1,5 мин |
| 45 | [The asteroid mine](45-case-flaky.md) | 2:23 → 2:24 | 1 мин |
| 46 | [Fix one — mission 12](46-fix-some.md) | 2:24 → 2:29 | 5 мин |
| 47 | [The night patrol — mission 13](47-night-patrol.md) | 2:29 → 2:39 | 10 мин |
| 48 | [Checks](48-checks-page.md) | 2:39 → 2:40 | 1 мин |
| 49 | [Break](49-break-2.md) | 2:40 → 2:52 | 12 мин |
| 50 | [Part 5 · AI](50-part-5.md) | 2:52 → 2:52:30 | 30 с |
| 51 | [The droid crew](51-droid-crew.md) | 2:52:30 → 2:55:30 | 3 мин |
| 52 | [Build your own droid — mission 14](52-your-agent.md) | 2:55:30 → 3:07:30 | 12 мин |
| 53 | [I'm afraid I can't investigate that](53-budget.md) | 3:07:30 → 3:09 | 1,5 мин |
| 54 | [Two things that went wrong](54-lessons.md) | 3:09 → 3:12 | 3 мин |
| 55 | [These aren't the goods you ordered](55-teleporter.md) | 3:12 → 3:13:30 | 1,5 мин |
| 56 | [Six fixes in two days](56-six-fixes.md) | 3:13:30 → 3:16 | 2,5 мин |
| 57 | [Fast. No error. Wrong data.](57-wrong-data.md) | 3:16 → 3:18:30 | 2,5 мин |
| 58 | [The app has to ask](58-integrity.md) | 3:18:30 → 3:21 | 2,5 мин |
| 59 | [The same, in production](59-prod.md) | 3:21 → 3:23 | 2 мин |
| 60 | [AI review found 5 of 6](60-review-vs-observe.md) | 3:23 → 3:24:30 | 1,5 мин |
| 61 | [Impressive. Most impressive.](61-epilogue.md) | 3:24:30 → 3:26:30 | 2 мин |
| 62 | [Take it with you](62-links.md) | 3:26:30 → 3:30 | 3,5 мин |

## Что держать в голове

- До части 3 не называть обзервер и `next-observer`. В части 2 есть только «a tool» и «AI agents later today».
- «Agent» без уточнения не говорить: APM agent — это библиотека, AI agents — дроиды в обзервере.
- Демо с реальной моделью (27, 52) — одна команда: дождаться ответа и убедиться, что процесс завершился.
- Перед 52 у себя: в обзервере должны быть v1 и v2. После рестарта он их забывает.
- Перед частью 5 у себя: тег `block-6-incident-f` с v2 в истории (55–58); прод по PROD_DEMO.md поднят и не перезапускался, пароль UI введён (59).

Источники фактов: `nextjs-observe/docs/WORKSHOP_PLAN.md` (история, кейсы агентов), `REHEARSAL.md` (где спотыкались), `WORKSHOP_LOG.md` шаг 70 (инцидент F), `APM_FINDINGS.md` (шесть фиксов), `PROD_DEMO.md` (прод), `tools/missions.mjs` магазина (шаги и ★ каждой миссии).
