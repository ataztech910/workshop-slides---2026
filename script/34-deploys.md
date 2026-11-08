# 34 · Customers, two deployments — mission 10

`step: deploys` · Part 4 · What arrives · **2:00:30 → 2:03:30** (3 мин) · Your turn · таймер 3 мин

**На экране:** observer · dev:v1 → dev:v2 · users 60 · load 40.
**Руки:** у себя сделать то же самое — к миссии 11 нужен трафик двух версий.

## Текст

**[2:00:30]** Mission ten. Today Porto-7 ships two builds of the shop: v1, then v2. With customers on both. And every span carries its version — `service.version`, from part one — so the observer can tell one deployment from the next.

Keep the observer running. Like a real deploy — the monitoring doesn't restart with the app.

Stop `npm run dev`. Start `npm run dev:v1`. In a third terminal: `npm run users 60` — those are customers in a real Chrome, they cause the browser bugs. Then `npm run load 40` — server traffic.

Then "deploy": Ctrl+C v1, `npm run dev:v2`. And the same two commands again.

`npm run mission 10`. Three minutes — the commands do the work, you wait.

*(T — таймер)*

**[2:02]** *(по залу)* The shop started on another port? Use it: `BASE_URL=http://localhost:` and the port, before `npm run users`.

**[2:03]** *(★)* Two deployments on record, customers on both — like a real release. "Which deploy broke it?" is the first question after every release. Now it has an answer.

## Переход
> So what broke? Find it.
