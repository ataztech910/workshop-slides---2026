# 56 · Six fixes in two days

`step: six-fixes` · Part 5 · AI · **3:13:30 → 3:16** (2,5 мин)

**На экране:** три «причины», каждая «fixed, it came back».

## Текст

**[3:13:30]** A real incident. In October we moved an app from Vercel to our own server. Six incidents in two days.

The symptom, every time: requests hang. And the database says nothing is running.

First diagnosis: a dead TCP connection. We fixed it. It came back.

**[3:14:30]** Second: a memory leak. We fixed it — a real leak, by the way. It came back.

Third: the connection pool is stuck — and our own watchdog makes it worse. We fixed that. It came back.

**[3:15:30]** Every fix was a real improvement. Every one. And none of them was the cause.

## Переход
> The cause was something no dashboard shows.
