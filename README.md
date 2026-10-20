# Workshop slides — AI-Native Observability

The deck for the workshop "Building Self-Debugging Next.js Applications with OpenTelemetry" (Porto, 10 Nov 2026).
Slides are cards on one canvas; a camera glides between them. The engine is the graph presentation from
`../../presentation` (copied, not linked); only the deck, the screenshots and three labels differ.

```sh
npm install
npm run dev -- --port 3080    # the config wants port 3000 — the shop uses it during the workshop
npm run pack                  # → dist-deck/, a folder that opens without a server
```

## Driving it

- `→` / `Space` — next step, `←` — previous; at "Six everyday bugs" press `1`–`6` to open one, or `→` to walk them in order
- `N` — presenter notes (in Russian; each starts with the minutes the card should take)
- `O` — the whole workshop on one screen; click a card to jump there
- `T` — start or pause the countdown on a hands-on card or a break, `R` — reset it; the clock keeps running if you
  step away from the card and come back
- `F` — full screen, `?` — the list of keys
- the deck ends on the links slide; the observer is a separate tab, open since block 2

## Editing

A card where the room works on its own gets `timer: { minutes: 15 }`. Everything is in `src/deck/deck.ts` (its header explains nodes, edges, steps and branches). One row per part of the
workshop: opening and theory · the ladder of frontend bugs · instrumentation and AI agents · demo and finale.
Screenshots live in `public/shots/`, cropped wide so they stay readable inside a card.

The story and the timing come from `../nextjs-observe/docs/WORKSHOP_PLAN.md` — change the plan first, then the deck.
