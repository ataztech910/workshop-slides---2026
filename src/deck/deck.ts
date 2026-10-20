/**
 * README — editing the deck
 * 1. Node: add an object to `nodes` with a unique `id`, a `title`, and world `x`/`y` (px, top-left).
 *    Optional: subtitle, chips, badge, flag, status, size, `effect` ("glyphs" | "glitch"), `photo`
 *    (an illustration inside the card), and `detail` (shown when focused alone). `detail.image` is a
 *    screenshot from public/shots.
 * 2. Edge: add `{ from, to }` to `edges` (ids of nodes). Edges run right-middle → left-middle,
 *    so they only connect cards of one row.
 * 3. Step: add `{ id, focus: [nodeIds] }` to `steps`. One id = single card, several = framed group.
 *    Steps advance in array order; set `next: "<stepId>"` to jump, or `next: null` to end the deck.
 *    `part` names the part of the workshop in the bottom bar.
 * 4. Branch: give a step `choices: [{ key, label, goToStep }]`. Put branch steps AFTER the spine's
 *    final step (which has `next: null`). The last step of each branch sets
 *    `returnToStep: "<branch point id>"`.
 * 5. Timer: `timer: { minutes: 15 }` on a node shows a countdown while that card is in focus (T starts and
 *    pauses, R resets) — every "Your turn" card has one, and the breaks.
 * 6. Captions (`caption`) show in the bottom bar; `detail.note` shows with the N key —
 *    the notes are the presenter's, hidden until N, and start with the minutes the card should take.
 *
 * Layout: one row per part of the workshop, each starting with the part's title card. Slides are in English;
 * the source of truth for timing and the story is nextjs-observe/docs/WORKSHOP_PLAN.md: small pieces by hand first
 * (parts 1–2), then the observer (3), what arrives (4), AI (5). The story is "Porto-7": Kevin, a junior on-call
 * engineer on a trading space station. Illustrations: public/porto7. A card with a photo expands with the picture on
 * the left and a narrow text column on the right — keep code off photo cards (it goes on the card next to them).
 */
import type { Deck, DeckNode, Step } from "./types";

/** Horizontal spacing between cards. Must exceed EXPANDED_WIDTH (920) so a focused,
 *  expanded card never overlaps its neighbour. */
const COL = 1020;
const col = (n: number) => 200 + n * COL;
/** One row per part. */
const ROW = { p1: 420, p2: 1700, p3: 2980, p4: 4260, p5: 5540 };
/** Part 4's five bugs found on the Errors page: a grid of small cards, three across. */
const BUG_X = (i: number) => col(3) + i * 440;
const BUG_Y: [number, number] = [ROW.p4 - 190, ROW.p4 + 150];

const PART = {
  p1: "Part 1 · Theory",
  p2: "Part 2 · OpenTelemetry by hand",
  p3: "Part 3 · The observer",
  p4: "Part 4 · What arrives",
  p5: "Part 5 · AI",
};

const mono = (label: string) => ({ label, mono: true });
const art = (n: string) => `porto7/${n}.jpg`;
/** A hands-on task: amber badge with its minutes, and the countdown on screen. */
const yourTurn = (minutes: number): Pick<DeckNode, "badge" | "timer"> => ({
  badge: { label: `Your turn · ${minutes} min`, tone: "amber" },
  timer: { minutes, label: "your turn" },
});
const inPart = (part: string, steps: Step[]): Step[] => steps.map((s) => ({ ...s, part }));

export const deck: Deck = {
  meta: {
    title: "AI-Native Observability",
    subtitle: "Self-debugging Next.js with OpenTelemetry",
    badges: [mono("Porto · 10 Nov 2026"), mono("3 h 30")],
  },
  nodes: [
    /* ================= Row 1 — Part 1 · Theory ================= */
    {
      id: "title",
      title: "AI-Native Observability",
      subtitle: "Building self-debugging Next.js applications with OpenTelemetry",
      status: "ok",
      size: "hero",
      chips: [mono("Next.js 16"), mono("OpenTelemetry"), mono("AI agents")],
      badge: { label: "Hands-on · bring your laptop", tone: "green" },
      x: col(0),
      y: ROW.p1 - 40,
      detail: {
        heading: "Five parts",
        bullets: [
          "1 · Theory — what telemetry is, and why",
          "2 · OpenTelemetry by hand — receive, send and add spans yourself",
          "3 · The observer — the same data, in a tool",
          "4 · What arrives — six bugs, found in seconds",
          "5 · AI — agents that investigate on their own",
        ],
        note: "2 min. Who I am, what we build by hand. Small pieces by hand first, the tool later. Everything runs locally; model keys are optional — there is a mock.",
      },
    },
    {
      id: "about-me",
      title: "Andrei Tazetdinov",
      subtitle: "Dynatrace · GDG Linz",
      photo: "about/me.jpg",
      textWidth: 720,
      status: "ok",
      size: "md",
      x: col(1),
      y: ROW.p1 - 330,
      detail: {
        heading: "Who is talking",
        bullets: [
          "I work at Dynatrace — yes, one of the backends on the OpenTelemetry slide",
          "today nothing is vendor-specific: plain OpenTelemetry, any backend",
          "LinkedIn — scan the code",
        ],
        image: "about/dynatrace.jpg",
        qr: { value: "https://www.linkedin.com/in/andrei-tazetdinov/", caption: "LinkedIn" },
        note: "1 min. Who I am and where I work. Dynatrace is on the OTel slide — say it with a smile: today is about the standard, not a product.",
      },
    },
    {
      id: "gdg-linz",
      title: "GDG Linz",
      subtitle: "Google Developer Group · Linz, Austria",
      photo: "about/gdg-linz.jpg",
      textWidth: 720,
      status: "ok",
      size: "md",
      x: col(1),
      y: ROW.p1 + 330,
      detail: {
        heading: "Developers meeting developers",
        bullets: ["meetups, talks and workshops in Linz", "come by — or come and speak"],
        qr: { value: "https://gdg.community.dev/gdg-linz/", caption: "GDG Linz" },
        note: "30 s. The community I am part of — the QR goes to the group's page.",
      },
    },
    {
      id: "doctor",
      timer: { minutes: 3, label: "check your machine" },
      title: "Is your machine ready?",
      subtitle: "scan, copy one command, “All set”",
      status: "running",
      size: "lg",
      chips: [mono("Node 22.18+"), mono("git"), mono("npm"), mono("Chrome")],
      x: col(2),
      y: ROW.p1,
      detail: {
        heading: "Scan the code — the README's first block is the one command to copy",
        code: {
          lang: "bash",
          text: `# github.com/ataztech910/workshop-ai-observability
curl -fsSL https://raw.githubusercontent.com/\\
ataztech910/workshop-ai-observability/master/start.sh | bash

# fell behind at any point?
git stash -u && git checkout -B workshop <tag> && npm install
#   block-3-instrumentation · block-5-observer`,
        },
        qr: { value: "https://github.com/ataztech910/workshop-ai-observability", caption: "the shop on GitHub" },
        note: "3 min. Scan, open the README, copy the first command — it clones, installs, checks and starts the shop. Anyone without “All set” fixes it now. Better: share the link before the workshop so people run ./start.sh --check at home.",
      },
    },
    {
      id: "part-1",
      title: "Part 1 · Theory",
      subtitle: "what telemetry is — and why you need it",
      status: "running",
      size: "hero",
      chips: [mono("the pain"), mono("span"), mono("trace"), mono("OTel")],
      x: col(3),
      y: ROW.p1 - 40,
      detail: {
        heading: "In this part",
        bullets: [
          "meet Kevin and the station",
          "be a customer — and miss most of the bugs",
          "spans, traces, attributes, context",
          "OpenTelemetry: the data and where it goes are two things",
        ],
        note: "30 s. Part title. Then the story.",
      },
    },
    {
      id: "kevin",
      title: "Meet Kevin",
      subtitle: "junior on-call engineer, first shift",
      photo: art("01"),
      status: "running",
      size: "lg",
      badge: { label: "everything breaks on him", tone: "amber" },
      x: col(4),
      y: ROW.p1,
      detail: {
        heading: "Hopeful, slightly panicked, always holding coffee",
        bullets: ["he goes through today with you", "everything that breaks on the station breaks on him"],
        note: "30 s. Kevin goes through the day with the room.",
      },
    },
    {
      id: "crew",
      title: "The crew of Porto-7",
      subtitle: "you will recognise them",
      photo: art("02"),
      status: "ok",
      size: "lg",
      x: col(5),
      y: ROW.p1,
      detail: {
        heading: "Who is who",
        bullets: [
          "Lord Manager — wants answers, now",
          "Master O'Tel — teaches telemetry, speaks backwards",
          "TR-4CE — six million formats · B3-EP — beeps HTTP codes",
          "Scrappy — the engineer · a red eye in the wall, switched off",
        ],
        note: "30 s. Do not explain the characters at length. The red eye is still off — it wakes up in part 3.",
      },
    },
    {
      id: "station",
      title: "Porto-7",
      subtitle: "In space, no one can hear your users scream.",
      photo: art("03"),
      status: "error",
      size: "lg",
      x: col(6),
      y: ROW.p1,
      detail: {
        heading: "Colony Sandy-9 stopped ordering",
        bullets: [
          "the station is our shop; the colonies are your users",
          "their order terminal broke — on their planet",
          "Lord Manager: “Why did Sandy-9 stop buying?”",
        ],
        note: "1 min. A simple pain to start with: a user's button does not work.",
      },
    },
    {
      id: "use-shop",
      ...yourTurn(5),
      title: "Be a customer",
      subtitle: "npm run dev — DevTools closed",
      status: "running",
      size: "lg",
      x: col(7),
      y: ROW.p1,
      detail: {
        heading: "Use the shop. Write down what felt broken.",
        bullets: [
          "product 1 — “Save for later”, then quantity 20 and Buy",
          "product 2 — read the reviews",
          "product 4 — “Show details”",
          "home page — search for “mug”",
        ],
        note: "5 min. The bare shop, no telemetry. DevTools stay closed — on purpose. Result: a list of what felt broken.",
      },
    },
    {
      id: "no-errors",
      title: "“No errors here”",
      subtitle: "your console is clean — the error is in their browser",
      photo: art("07"),
      status: "error",
      size: "lg",
      badge: { label: "How would you know?", tone: "red" },
      x: col(8),
      y: ROW.p1,
      detail: {
        heading: "How many did you notice? There are six.",
        bullets: [
          "two you will never see by hand — they happen in someone else's browser",
          "your logs show a 200 — the server did nothing wrong",
          "“cannot reproduce” is the absence of data",
        ],
        note: "2 min. Ask the room — usually 1–2. “There are six.” That is the “why” of the whole day.",
      },
    },
    {
      id: "span",
      title: "Logs you have. Story you have not.",
      subtitle: "Master O'Tel teaches Kevin what a span is",
      photo: art("05"),
      status: "ok",
      size: "lg",
      chips: [mono("trace"), mono("span"), mono("attributes"), mono("events")],
      x: col(9),
      y: ROW.p1,
      detail: {
        heading: "A span: what happened, how long, with which attributes",
        bullets: ["a trace is the log of one whole voyage", "logs: every crew member keeps their own diary"],
        note: "5 min. “Grep leads to anger. Anger leads to more grep.” A span = one leg of a voyage, a trace = the voyage log.",
      },
    },
    {
      id: "trace-anatomy",
      title: "Anatomy of a trace",
      subtitle: "a tree of spans in time",
      status: "ok",
      size: "lg",
      chips: [mono("resource"), mono("traceparent"), mono("events")],
      x: col(10),
      y: ROW.p1,
      detail: {
        heading: "Where it was slow, and under which conditions",
        code: {
          lang: "text",
          text: `POST /api/checkout ..................... 1 942 ms
├─ getProductById .......................... 18 ms
└─ placeOrder ........................... 1 910 ms
   └─ chargePayment ..................... 1 905 ms  ← here

span:      name · start · duration · status · attributes
resource:  service.name="porto-shop" service.version="v2"
context:   traceparent: 00-<traceId>-<spanId>-01`,
        },
        bullets: [
          "an exception is an event on a span; the status says error",
          "service.version on every span — remember it",
          "traceparent is the mission number glued to every crate",
        ],
        note: "5 min. The tree answers “where”, attributes answer “under which conditions”. Promise: in ten minutes you will see this as JSON.",
      },
    },
    {
      id: "otel",
      title: "OpenTelemetry",
      subtitle: "the data and where it goes are two different things",
      status: "ok",
      size: "lg",
      chips: [mono("API"), mono("SDK"), mono("OTLP"), mono("semantic conventions")],
      x: col(11),
      y: ROW.p1,
      detail: {
        heading: "One protocol out of your app. Who reads it is your choice.",
        bullets: [
          "API to create spans · SDK to batch and export · OTLP on the wire · conventions for names",
          "Grafana Tempo, Dynatrace, Honeycomb, Datadog — all speak OTLP",
          "signals: traces, metrics, logs — today we work with traces",
          "everything you build in part 2 works with any of them",
        ],
        note: "6 min. The key point: the data is not where it goes. Name the alternatives out loud.",
      },
    },
    /* ================= Row 2 — Part 2 · OpenTelemetry by hand ================= */
    {
      id: "part-2",
      title: "Part 2 · OpenTelemetry by hand",
      subtitle: "receive it, send it, add your own — small pieces, your keyboard",
      status: "running",
      size: "hero",
      chips: [mono("OTLP"), mono("receiver"), mono("the shop"), mono("your span")],
      x: col(0),
      y: ROW.p2 - 40,
      detail: {
        heading: "Seven small tasks",
        bullets: [
          "your own OTLP receiver · your first span · make it a tree",
          "the shop sends its own spans · a span of your own · 'use observe'",
          "one case, by script, over your own raw spans",
        ],
        note: "30 s. Part title. From here, a “Your turn” every 5–10 minutes.",
      },
    },
    {
      id: "black-box",
      title: "The black box",
      subtitle: "“I am fluent in over six million formats. Sadly, only one of them matters.”",
      photo: art("06"),
      status: "ok",
      size: "lg",
      chips: [mono("OTLP/HTTP"), mono(":4318")],
      x: col(1),
      y: ROW.p2,
      detail: {
        heading: "OTLP: the one format every backend reads",
        bullets: [
          "over HTTP: POST /v1/traces, JSON or protobuf",
          "port 4318 — the standard OTLP port",
          "one batch: who sent it, which library, the spans",
        ],
        note: "2 min. TR-4CE hands over the “black box”.",
      },
    },
    {
      id: "receiver",
      ...yourTurn(7),
      title: "Your own receiver",
      subtitle: "the first thing every telemetry backend does",
      status: "running",
      size: "lg",
      x: col(2),
      y: ROW.p2,
      detail: {
        heading: "npm run receiver — and uncomment the ▶ lines in two files",
        code: {
          lang: "text",
          text: `1. tools/receiver.mjs     ▶ receive, keep, answer {}
2. tools/print-spans.mjs  ▶ one line per span  (Cmd+/)

a batch:
resourceSpans[]
  resource.attributes   ← who: service.name, service.version
  scopeSpans[]
    scope.name          ← which library made the spans
    spans[]             ← traceId spanId parentSpanId name
                          start/end (ns) status attributes events

goal:  porto-shop  GET /api/products  42.0 ms  ok
stuck? npm run receiver -- --solution`,
        },
        note: "7 min. The plumbing of tools/receiver.mjs is ready; the five lines that make it a receiver are commented out with a ▶ and a \"why\" each — keep the chunks, decode the batch, save, print, answer 200 {}. Until they are uncommented it answers 501 with a hint. Then print-spans.mjs the same way: each ▶ line fills one field of the printed line (service, ms, error); the last two (noise filter, indent) wait until the shop sends spans. The receiver reloads on save. Every batch goes to .telemetry/spans.ndjson. Later, when the shop is connected and someone types in the search box, the terminal floods: ask the room why — it is the request loop, solved in part 4.",
      },
    },
    {
      id: "first-json",
      ...yourTurn(5),
      title: "Your first span",
      subtitle: "Kevin has never been so happy to see JSON",
      photo: art("07b"),
      status: "ok",
      size: "lg",
      x: col(3),
      y: ROW.p2,
      detail: {
        heading: "Mission: report Sandy-9's failed order by hand",
        bullets: [
          "you are the app now",
          "edit tools/span.json, send it with curl (README, part 2)",
          "your receiver shows a checklist — get all five green",
        ],
        note: "5 min. curl -X POST localhost:4318/v1/traces -H 'content-type: application/json' -d @tools/span.json. The receiver prints the mission checklist after every hand-sent span (tools/mission.mjs, scope by-hand): name POST /checkout, a full second, status code 2, order.quantity=20, order.rejected with the reason. Each item points at the JSON field. On ★ say it out loud: soon the shop will fill these fields by itself, thousands of times a second. The reason as an attribute comes back twice: Make it a tree, and A span of your own from the shop's code.",
      },
    },
    {
      id: "tree",
      ...yourTurn(5),
      title: "Make it a tree",
      subtitle: "a second span, same trace, with a parent",
      status: "running",
      size: "lg",
      chips: [mono("traceId"), mono("parentSpanId")],
      x: col(4),
      y: ROW.p2,
      detail: {
        heading: "Mission: show where the order failed — inside the payment",
        code: {
          lang: "json",
          text: `{ "traceId": "5b8efff798038103d269b633813fc60c",   ← the same
  "spanId": "a1b2c3d4e5f60718",                    ← new
  "parentSpanId": "eee19b7ec3c1b174",              ← the first span
  "name": "chargePayment", … }`,
        },
        bullets: [
          "add a second span to \"spans\" in tools/span.json (mind the comma)",
          "uncomment the indent ▶ line in print-spans.mjs — a tree looks like a tree",
          "the receiver's checklist turns green field by field",
        ],
        note: "5 min. Mission 2 in tools/mission.mjs: chargePayment, same traceId, own spanId, parentSpanId = the checkout's spanId, status 2, times inside the parent — the hints print the real ids. On ★ talk through: traceId = same request, parentSpanId = inside which span; between services the traceId travels in the traceparent header; time is nanoseconds as strings; spans come in batches; if the receiver is down the sender drops spans and the app does not break.",
      },
    },
    {
      id: "break-1",
      timer: { minutes: 15, label: "break" },
      title: "Break",
      subtitle: "15 minutes — then the shop starts talking",
      status: "idle",
      size: "sm",
      x: col(5),
      y: ROW.p2 + 40,
    },
    {
      id: "apm-by-hand",
      ...yourTurn(10),
      title: "The APM agent, by hand",
      subtitle: "npm install next-observe — then uncomment three files",
      status: "running",
      size: "lg",
      x: col(6),
      y: ROW.p2,
      detail: {
        heading: "Mission 3: let the shop report itself — into your receiver",
        code: {
          lang: "text",
          text: `npm install next-observe

uncomment the ▶ lines:
  instrumentation.ts          the server half
  instrumentation-client.ts   the browser half
  next.config.ts              the browser's route to 4318

npm run mission               ← your checklist`,
        },
        bullets: ["restart npm run dev, click through the shop", "the bugs from part 1 arrive as JSON — npm run mission ticks them off"],
        note: "10 min. npm run mission (tools/missions.mjs) checks the install, the three files, server and browser spans in .telemetry/spans.ndjson, the 400 from Buy ×20, the uncaught error from Save for later, and the noise filter in print-spans. On ★: the 400 says THAT, not WHY — the next slide. Exactly these lines are what npx next-observer init writes — say so in part 3.",
      },
    },
    {
      id: "sensors",
      title: "Sensors and the captain's log",
      subtitle: "“Voyage took 20 minutes. Status: OK-ish.”",
      photo: art("08"),
      status: "warn",
      size: "lg",
      badge: { label: "It's a trap!", tone: "red" },
      x: col(7),
      y: ROW.p2,
      detail: {
        heading: "Automatic spans see what happened. Not why.",
        bullets: [
          "automatic: HTTP server, fetch, page load, browser errors",
          "POST /api/checkout → 400, but the reason stayed in the response",
          "to see a reason, somebody has to put it on a span",
        ],
        note: "2 min. B3-EP beeps “400”. The bridge to a span of your own.",
      },
    },
    {
      id: "own-span",
      ...yourTurn(8),
      title: "A span of your own",
      subtitle: "the business step, with its facts — and the reason",
      status: "running",
      size: "lg",
      chips: [mono("placeOrder"), mono("order.rejected")],
      x: col(8),
      y: ROW.p2,
      detail: {
        heading: "Mission 4: make the 400 say why — app/api/checkout/route.ts",
        code: {
          lang: "ts",
          text: `// uncomment the ▶ lines:
import { trace } from '@opentelemetry/api'

span = trace.getTracer('porto-shop').startSpan('placeOrder')
span.setAttribute('order.quantity', Number(quantity))
if (quantity > 10) {
  span.setAttribute('order.rejected', \`quantity \${quantity}, allowed 1–10\`)
  return Response.json({ error: '…' }, { status: 400 })
}
…
finally { span.end() } // ready: an unended span is never sent

npm run mission   ← your checklist`,
        },
        note: "8 min. The route ships with these lines commented out and a do-nothing stand-in for the span, so the shop works before. npm run mission: the four lines, placeOrder arrives, the reason arrives (Buy ×20). On ★: no automatic instrumentation knows what an order is — your code does. @opentelemetry/api comes with next-observe — no extra install. npm run case checkout-400 finds the reason later.",
      },
    },
    {
      id: "use-observe",
      ...yourTurn(5),
      title: "'use observe'",
      subtitle: "one line at the top of a file — every export becomes a span",
      status: "running",
      size: "lg",
      chips: [mono("lib/*.ts"), mono("code.filepath")],
      x: col(9),
      y: ROW.p2,
      detail: {
        heading: "lib/db.ts, lib/catalog.ts, lib/payment.ts, lib/inventory.ts",
        code: {
          lang: "ts",
          text: `'use observe'

export async function chargePayment(amountCents: number) { … }
// → a span "chargePayment" with code.filepath, duration, the exception if it throws`,
        },
        note: "5 min. Behind? Tag block-3-instrumentation.",
      },
    },
    {
      id: "case-by-hand",
      ...yourTurn(10),
      title: "One case, by script",
      subtitle: "“Payment failed” — find why in your raw spans",
      status: "running",
      size: "lg",
      chips: [mono("npm run case checkout-400")],
      x: col(10),
      y: ROW.p2,
      detail: {
        heading: "Finish tools/cases/rejected.mjs — which spans are rejected checkouts?",
        code: {
          lang: "js",
          text: `export function isRejected(span) {
  // TODO: a SERVER span (kind 2) of /api/checkout that answered 400
  return false
}

// npm run case checkout-400  →
//   placeOrder  order.quantity=20  order.rejected=quantity 20 > limit 10
// stuck?  npm run case checkout-400 -- --solution`,
        },
        bullets: ["buy 20 in the shop first", "the other case scripts (npm run case) are there to explore"],
        note: "10 min. Picks up their own span: the reason they recorded is found by a script over the raw data.",
      },
    },

    /* ================= Row 3 — Part 3 · The observer ================= */
    {
      id: "part-3",
      title: "Part 3 · The observer",
      subtitle: "the same data — in a tool",
      status: "running",
      size: "hero",
      chips: [mono("next-observer"), mono(":4318")],
      x: col(0),
      y: ROW.p3 - 40,
      detail: {
        heading: "In this part",
        bullets: ["why a tool at all", "swap the receiver for the observer — the app does not change", "a tour on your own spans"],
        note: "30 s. Part title.",
      },
    },
    {
      id: "three-am",
      title: "There has to be a better way",
      subtitle: "3 am, station time",
      photo: art("13"),
      status: "warn",
      size: "lg",
      x: col(1),
      y: ROW.p3,
      detail: {
        heading: "What a script answers badly",
        bullets: ["what is happening right now?", "what broke at night, when nobody clicked?", "why — not only where?"],
        note: "2 min. A mountain of mugs. In the wall, the red eye sleeps with its cable pulled out.",
      },
    },
    {
      id: "apm-agent",
      title: "next-observe",
      subtitle: "the APM agent — a library inside your app",
      status: "ok",
      chips: [mono("OpenTelemetry only"), mono("no AI")],
      badge: { label: "goes INTO the app · you added it in part 2", tone: "green" },
      x: col(2),
      y: ROW.p3 - 220,
    },
    {
      id: "observer",
      title: "next-observer",
      subtitle: "the observer — collector, UI, detector, checks, AI agents",
      status: "idle",
      chips: [mono("npx"), mono("never a dependency")],
      badge: { label: "runs NEXT TO the app · now", tone: "amber" },
      x: col(2),
      y: ROW.p3 + 220,
    },
    {
      id: "wakes-up",
      ...yourTurn(5),
      title: "Good evening, Kevin.",
      subtitle: "stop the receiver — npm run observer, same port",
      photo: art("14"),
      status: "running",
      size: "lg",
      effect: "glyphs",
      x: col(3),
      y: ROW.p3,
      detail: {
        heading: "The app does not change: not one line",
        bullets: [
          "Ctrl+C the receiver, then npm run observer",
          "open http://127.0.0.1:4318 — find your placeOrder",
          "“Where were you?” — “Nobody connected me, Kevin.”",
        ],
        note: "5 min. The moment of the day: the same OTLP, a different receiver.",
      },
    },
    {
      id: "tour",
      title: "A tour on your own spans",
      subtitle: "traces · waterfall · Errors · Overview",
      status: "ok",
      size: "lg",
      x: col(4),
      y: ROW.p3,
      detail: {
        heading: "What you did by hand in part 2, done for you",
        bullets: [
          "Traces: your placeOrder with order.rejected",
          "Errors: one entry per defect, with the page and the stack",
          "npx next-observer init writes the three files of part 2 for you",
        ],
        image: "shots/errors.png",
        note: "3 min. Walk through the pages on their own data.",
      },
    },

    /* ================= Row 4 — Part 4 · What arrives ================= */
    {
      id: "part-4",
      title: "Part 4 · What arrives",
      subtitle: "six bugs, two deployments, nobody at 3 am",
      status: "running",
      size: "hero",
      chips: [mono("Errors"), mono("Overview"), mono("versions"), mono("checks")],
      x: col(0),
      y: ROW.p4 - 40,
      detail: {
        heading: "In this part",
        bullets: ["customers and two deployments", "find the six bugs — and two more", "fix one", "the night patrol"],
        note: "30 s. Part title.",
      },
    },
    {
      id: "deploys",
      ...yourTurn(3),
      title: "Customers, two deployments",
      subtitle: "keep the observer running — like a real deploy",
      status: "running",
      size: "lg",
      chips: [mono("v1 → v2"), mono("npm run users")],
      x: col(1),
      y: ROW.p4,
      detail: {
        heading: "Three terminals",
        code: {
          lang: "bash",
          text: `npm run observer          # 1
npm run dev:v1            # 2 — later Ctrl+C and: npm run dev:v2
npm run users 60          # 3 — customers in a browser
npm run load 40           # 3 — and server traffic`,
        },
        note: "3 min. users causes the browser bugs (Chrome, nothing downloaded), load sends server traffic. After v2, both again.",
      },
    },
    {
      id: "find-bugs",
      ...yourTurn(12),
      title: "Find the six bugs",
      subtitle: "in the observer — DevTools closed",
      status: "running",
      size: "lg",
      x: col(2),
      y: ROW.p4,
      detail: {
        heading: "Where to look",
        bullets: [
          "Errors — what broke in browsers, and the 400",
          "Overview — which route takes the traffic",
          "a trace of the catalog — the waterfall",
          "the regression banner and an operation's page — v1 vs v2",
        ],
        note: "12 min. Result: six frontend bugs plus two “ops” ones. “How many of them did you notice by hand in part 1?”",
      },
    },
    {
      id: "bug-click",
      title: "A click that throws",
      subtitle: "“Save for later” does nothing",
      status: "error",
      size: "sm",
      chips: [mono("uncaught error")],
      x: BUG_X(0),
      y: BUG_Y[0],
      detail: {
        heading: "Cannot read properties of null (reading 'push')",
        code: {
          lang: "ts",
          text: `const list = JSON.parse(localStorage.getItem('wishlist') as string) as string[]
list.push(productId)   // first visit: getItem → null → JSON.parse(null) → null`,
        },
        bullets: ["the user sees: nothing happens", "fix: one line — `?? '[]'`"],
        note: "“as string” silenced TypeScript, not the error.",
      },
    },
    {
      id: "bug-render",
      title: "A render that throws",
      subtitle: "“Something went wrong”",
      status: "error",
      size: "sm",
      chips: [mono("console.error")],
      x: BUG_X(1),
      y: BUG_Y[0],
      detail: {
        heading: "The error boundary hid it from the user — and from you",
        bullets: [
          "product 4 has no entry in SPECS; the type says it always has",
          "error.tsx shows a friendly page, so nothing looks alarming",
          "React still reports it: “occurred in the <Details> component”",
        ],
        note: "An error boundary is UX, not observability.",
      },
    },
    {
      id: "bug-hydration",
      title: "Hydration mismatch",
      subtitle: "nobody saw anything",
      status: "warn",
      size: "sm",
      chips: [mono("hydration mismatch")],
      x: BUG_X(2),
      y: BUG_Y[0],
      detail: {
        heading: "The server said 5, the browser said 30",
        code: {
          lang: "text",
          text: `Hydration failed because the server rendered text didn't match the client.
 <Viewers>
   <p className="muted">
+    30
-    5`,
        },
        bullets: ["Math.random() during render", "in production React gives only an error code"],
        note: "Invisible by hand.",
      },
    },
    {
      id: "bug-json",
      title: "A 204 read as JSON",
      subtitle: "“Loading reviews…” forever",
      status: "error",
      size: "sm",
      chips: [mono("invalid JSON response")],
      x: BUG_X(0),
      y: BUG_Y[1],
      detail: {
        heading: "The server is healthy. The page is stuck.",
        bullets: [
          "the API answers 204 when there are no reviews",
          "the client calls res.json() on an empty body and never catches",
          "server dashboards: all green",
        ],
        note: "Visible only from the browser.",
      },
    },
    {
      id: "bug-400",
      title: "Front and back disagree",
      subtitle: "“Payment failed” — 400",
      status: "warn",
      size: "sm",
      chips: [mono("POST /api/checkout")],
      x: BUG_X(1),
      y: BUG_Y[1],
      detail: {
        heading: "The form offers 20. The API accepts 10.",
        bullets: [
          "Errors shows the failed request from the browser",
          "the trace shows why: your placeOrder, order.rejected",
          "without your span from part 2, the reason would be nowhere",
        ],
        note: "Picks up part 2: what the script found is visible here at once.",
      },
    },
    {
      id: "case-loop",
      title: "Groundhog cycle",
      subtitle: "Overview — one route takes the traffic",
      photo: art("10"),
      status: "warn",
      size: "lg",
      chips: [mono("GET /api/products")],
      x: col(5),
      y: ROW.p4,
      detail: {
        heading: "effect → setState → effect",
        bullets: ["nothing failed, so it is not on Errors", "GET /api/products: about half of all requests", "search “works” — and hammers the API"],
        note: "3 min. The code and the fix are on the “Fix one” card.",
      },
    },
    {
      id: "case-n1",
      title: "The loader droid",
      subtitle: "a catalog trace — the waterfall",
      photo: art("09"),
      status: "warn",
      size: "lg",
      chips: [mono("N+1")],
      x: col(6),
      y: ROW.p4,
      detail: {
        heading: "Fear is the mind-killer. N+1 is the page-killer.",
        bullets: [
          "listProducts → getProductById ×5, one after another",
          "each call is fast; p50 = p95 — nothing “slow”",
          "only the structure of one trace shows it",
        ],
        note: "3 min. The droid flies to the warehouse once per crate.",
      },
    },
    {
      id: "case-regression",
      title: "New firmware",
      subtitle: "the regression banner — v1 vs v2",
      photo: art("11"),
      status: "error",
      size: "lg",
      chips: [mono("service.version")],
      x: col(7),
      y: ROW.p4,
      detail: {
        heading: "“I'm givin' her all she's got, Kevin!”",
        bullets: [
          "chargePayment: v1 ≈ 230 ms → v2 ≈ 2 000 ms",
          "the operation page: two speeds, one per version",
          "getProductById: no change — it is not the database",
        ],
        note: "3 min. This is why service.version is on every span.",
      },
    },
    {
      id: "case-flaky",
      title: "The asteroid mine",
      subtitle: "Errors — “I'll be back. Sometimes.”",
      photo: art("12"),
      status: "warn",
      size: "lg",
      chips: [mono("checkInventory")],
      x: col(8),
      y: ROW.p4,
      detail: {
        heading: "Neither 0% nor 100%",
        bullets: ["checkInventory fails about 30% of the time", "the hardest kind to reproduce by hand", "the detector notices it — part 5 picks it up"],
        note: "2 min. The error climbs the tree: function → route.",
      },
    },
    {
      id: "fix-some",
      ...yourTurn(5),
      title: "Fix one",
      subtitle: "Copy prompt → your AI assistant, or by hand",
      status: "running",
      size: "lg",
      x: col(9),
      y: ROW.p4,
      detail: {
        heading: "One line each",
        code: {
          lang: "tsx",
          text: `// the click
JSON.parse(localStorage.getItem('wishlist') ?? '[]')

// the 204
return Response.json([])

// the loop: depend on query, not on an object built during render
useEffect(() => { … }, [query])`,
        },
        note: "5 min. “Copy prompt” on the card → Claude Code / Codex. Once fixed, the entry on Errors stops growing.",
      },
    },
    {
      id: "night-patrol",
      ...yourTurn(10),
      title: "The night patrol",
      subtitle: "who tells you at 3 am?",
      photo: art("16"),
      status: "running",
      size: "lg",
      chips: [mono("observe.checks.ts")],
      x: col(10),
      y: ROW.p4,
      detail: {
        heading: "The observer asks the app on a timer",
        bullets: [
          "run v2 with no traffic at all",
          "“checkout takes under a second” turns red by itself",
          "add a check of your own — the file is on the next card",
        ],
        note: "10 min. Behind? block-5-observer.",
      },
    },
    {
      id: "checks-page",
      title: "Checks",
      subtitle: "red in v2 — nobody was buying",
      status: "error",
      size: "lg",
      badge: { label: "found without a single user", tone: "red" },
      x: col(11),
      y: ROW.p4,
      detail: {
        heading: "observe.checks.ts — plain data",
        code: {
          lang: "ts",
          text: `export default [
  { name: 'checkout takes under a second',
    url: '/api/checkout', method: 'POST',
    body: { productId: '1' }, everySeconds: 10,
    expect: { status: 200, maxMs: 1000 } },
  { name: 'checkout refuses 99 items',
    url: '/api/checkout', method: 'POST',
    body: { productId: '1', quantity: 99 }, everySeconds: 10,
    expect: { status: 400 } },
]
// failed twice in a row → the AI agents investigate`,
        },
        image: "shots/checks-crop.png",
        note: "http://127.0.0.1:4318/checks. everySeconds: 10 matters — the default is 60 s, and an anomaly needs two failures in a row. One anomaly for an app that is down, not one per check.",
      },
    },
    {
      id: "break-2",
      timer: { minutes: 15, label: "break" },
      title: "Break",
      subtitle: "15 minutes — then the AI",
      status: "idle",
      size: "sm",
      x: col(12),
      y: ROW.p4 + 40,
    },

    /* ================= Row 5 — Part 5 · AI ================= */
    {
      id: "part-5",
      title: "Part 5 · AI",
      subtitle: "agents that investigate on their own",
      status: "running",
      size: "hero",
      chips: [mono("AI agents"), mono("evidence cards"), mono("incident F")],
      x: col(0),
      y: ROW.p5 - 40,
      detail: {
        heading: "In this part",
        bullets: ["the droid crew", "build your own droid", "the budget", "what went wrong while we built this", "incident F, live"],
        note: "30 s. Part title.",
      },
    },
    {
      id: "droid-crew",
      title: "The droid crew",
      subtitle: "an orchestrator, three specialists, six tools",
      photo: art("15"),
      status: "ok",
      size: "lg",
      chips: [mono("latency_agent"), mono("error_agent"), mono("traffic_agent")],
      x: col(1),
      y: ROW.p5,
      detail: {
        heading: "The model reasons. The code shows the proof.",
        bullets: [
          "a detector watches the spans; on an anomaly the agents start by themselves",
          "facts come only from tools over the telemetry",
          "evidence cards are built by code, never by the model",
        ],
        note: "5 min. A card physically cannot contain anything made up.",
      },
    },
    {
      id: "your-agent",
      ...yourTurn(12),
      title: "Build your own droid",
      subtitle: "observe.agents.ts — twenty lines",
      status: "running",
      size: "lg",
      chips: [mono("mock → real")],
      x: col(2),
      y: ROW.p5,
      detail: {
        heading: "Same name as a built-in one — it replaces it",
        code: {
          lang: "ts",
          text: `// observe.agents.ts — plain data, nothing to import
export default [
  {
    name: 'latency_agent',
    description: 'Finds slow operations and the deployment that made them slow',
    instruction: \`1. get_operation_stats — learn the real operation names.
2. compare_versions — a p95 ratio of 2+ is a regression.
3. Open one trace and name the span with the highest selfMs and its file.\`,
    tools: ['get_operation_stats', 'compare_versions', 'search_traces', 'get_trace'],
  },
]`,
        },
        note: "12 min. Mock first (are the tools called?), then OBSERVE_AI=real. Ask: “Checkout is slow. What's causing it and which deployment introduced it?”",
      },
    },
    {
      id: "budget",
      title: "I'm afraid I can't investigate that",
      subtitle: "Budget: 5 of 5",
      photo: art("17"),
      status: "warn",
      size: "lg",
      chips: [mono("OBSERVE_AUTO_INVESTIGATIONS")],
      x: col(3),
      y: ROW.p5,
      detail: {
        heading: "Left running overnight, it must not spend your subscription",
        bullets: [
          "at most 5 investigations on its own per hour (default)",
          "over the budget an anomaly is only noted",
          "questions you ask are not counted",
        ],
        note: "3 min. A true story: an observer with a real model was left running for 28 hours next to a broken shop.",
      },
    },
    {
      id: "case-tool",
      title: "“The agent gave up”",
      subtitle: "tool design beats prompt design",
      status: "error",
      chips: [mono("lesson 1")],
      x: col(4),
      y: ROW.p5 - 220,
      detail: {
        heading: "The user says “checkout”. The spans say chargePayment.",
        bullets: [
          "the agent asked for operation “checkout”; the tool returned []; the agent answered “no data”",
          "the fix was in the tool: on no match, return everything with a note",
          "after that: 2 of 2, with exact p50 / p95 / p99",
        ],
        note: "The user speaks business, the spans speak code.",
      },
    },
    {
      id: "case-hallucination",
      title: "“A confident hallucination”",
      subtitle: "one run proves nothing",
      status: "warn",
      chips: [mono("lesson 2")],
      x: col(4),
      y: ROW.p5 + 220,
      detail: {
        heading: "1 run in 3: a specialist skipped its tool — the report was still confident",
        bullets: [
          "“checkout is slow, most likely because of the same inventory problem” — not in the data",
          "a report is built only from what tools returned; no data → say so",
          "an LLM is not deterministic: you need evals, many runs, PASS / FAIL on facts",
        ],
        note: "Hence cards built from facts, and evals.",
      },
    },
    {
      id: "teleporter",
      title: "These aren't the goods you ordered",
      subtitle: "fast, sealed, on time — and somebody else's",
      photo: art("18"),
      status: "error",
      size: "lg",
      effect: "glitch",
      chips: [mono("incident F"), mono("demo")],
      x: col(5),
      y: ROW.p5,
      detail: {
        heading: "Everything is green. Colonies complain about wrong cargo.",
        bullets: [
          "block-6-incident-f: v2 slow → “fix”: npm run dev:v3",
          "Overview: no errors, checkout fast again. Fixed?",
          "how would you notice by hand?",
        ],
        note: "2 min. Do not promise to show it in a browser: 0 of 40 page loads under normal load, 2 of 40 at RPS=30.",
      },
    },
    {
      id: "six-fixes",
      title: "Six fixes in two days",
      subtitle: "same symptom every time — a different “cause” every time",
      status: "warn",
      size: "lg",
      badge: { label: "a real incident", tone: "amber" },
      x: col(6),
      y: ROW.p5,
      detail: {
        heading: "Requests hang. The database says nothing is running.",
        bullets: [
          "“a dead TCP connection” — fixed, it came back",
          "“a memory leak” — fixed, it came back",
          "“the pool is stuck, and our watchdog makes it worse” — fixed, it came back",
          "every fix was a real improvement. None was the cause.",
        ],
        note: "3 min. The story from APM_FINDINGS.md.",
      },
    },
    {
      id: "wrong-data",
      title: "Fast. No error. Wrong data.",
      subtitle: "asked for product 1 — got product 3",
      status: "error",
      size: "lg",
      chips: [mono("200"), mono("20 ms"), mono("someone else's row")],
      x: col(7),
      y: ROW.p5,
      detail: {
        heading: "A pooler in transaction mode mixed up the answers to pipelined queries",
        image: "shots/wrong-data-crop.png",
        note: "4 min. In the chat: “Wrong data · asked for 1, got back 3”. With a real model: v2 — 0 of 31, v3 — 11 of 191.",
      },
    },
    {
      id: "integrity",
      title: "The app has to ask",
      subtitle: "“did I get what I asked for?”",
      status: "ok",
      size: "lg",
      chips: [mono("integrity_check"), mono("one line")],
      x: col(8),
      y: ROW.p5,
      detail: {
        heading: "No status code and no duration can show this",
        code: {
          lang: "ts",
          text: `const product = await queryProduct(id)
trace.getActiveSpan()?.addEvent('integrity_check', {
  ok: product.id === id, expected: id, actual: product.id,
})
// the observer raises an anomaly on the first ok: false
// a check from outside almost never catches it — one request alone never collides`,
        },
        note: "4 min. lib/pool.ts (30 lines) and one line in lib/db.ts. Automatic instrumentation does not and cannot see this.",
      },
    },
    {
      id: "prod",
      title: "The same, in production",
      subtitle: "a Vercel app, the observer on a server",
      status: "running",
      size: "lg",
      chips: [mono("Vercel"), mono("droplet")],
      x: col(9),
      y: ROW.p5,
      detail: {
        heading: "Nothing new in the app — only where the OTLP goes",
        image: "shots/chat-crop.png",
        note: "2 min. Follow PROD_DEMO.md (branch from block-5-observer). If the Wi-Fi is down — locally.",
      },
    },
    {
      id: "review-vs-observe",
      title: "AI review found 5 of 6",
      subtitle: "it blocked our commit — and missed the hydration",
      status: "ok",
      size: "lg",
      badge: { label: "review ≠ observability", tone: "green" },
      x: col(10),
      y: ROW.p5,
      detail: {
        heading: "They catch different things",
        bullets: [
          "the pre-commit AI review flagged the loop, null.push, the missing SPECS entry, the 204 and the 20-vs-10",
          "it did not flag Math.random() in render — that only shows when the code runs",
          "review: what the code could do. Telemetry: what it did.",
        ],
        note: "2 min. A true story: the hook blocked a commit with our own deliberate bugs.",
      },
    },
    {
      id: "epilogue",
      title: "Impressive. Most impressive.",
      subtitle: "Kevin is promoted — to permanent on-call",
      photo: art("19"),
      status: "ok",
      size: "lg",
      x: col(11),
      y: ROW.p5,
      detail: {
        heading: "What to take home",
        bullets: [
          "Collect from the browser too — most bugs never reach your console.",
          "OpenTelemetry is the data; where it goes is your choice.",
          "An AI agent is only as good as its tools.",
          "Some failures are fast and green — measure “correct”.",
        ],
        note: "5 min. “Your AI agent is a 20-line file, your checks a 10-line one.” On the observer's screen — DON'T PANIC.",
      },
    },
    {
      id: "links",
      title: "Take it with you",
      subtitle: "everything from today is open",
      status: "ok",
      size: "lg",
      chips: [mono("npm i next-observe"), mono("npx next-observer dev")],
      x: col(12),
      y: ROW.p5,
      detail: {
        heading: "Two packages, one letter apart",
        bullets: [
          "next-observe — the APM agent: npmjs.com/package/next-observe",
          "next-observer — the observer: npmjs.com/package/next-observer",
          "Porto Shop, with every step as a git tag: github.com/ataztech910/workshop-ai-observability",
        ],
        qr: {
          value: "https://www.npmjs.com/package/next-observer",
          caption: "next-observer on npm",
        },
        note: "Questions. The observer has been open in the next tab since part 3.",
      },
    },
  ],
  edges: [
    { from: "title", to: "about-me" },
    { from: "title", to: "gdg-linz", kind: "dashed" },
    { from: "about-me", to: "doctor" },
    { from: "gdg-linz", to: "doctor", kind: "dashed" },
    { from: "doctor", to: "part-1" },
    { from: "part-1", to: "kevin" },
    { from: "kevin", to: "crew" },
    { from: "crew", to: "station" },
    { from: "station", to: "use-shop" },
    { from: "use-shop", to: "no-errors" },
    { from: "no-errors", to: "span" },
    { from: "span", to: "trace-anatomy" },
    { from: "trace-anatomy", to: "otel" },

    { from: "part-2", to: "black-box" },
    { from: "black-box", to: "receiver" },
    { from: "receiver", to: "first-json" },
    { from: "first-json", to: "tree" },
    { from: "tree", to: "break-1", kind: "dashed" },
    { from: "break-1", to: "apm-by-hand", kind: "dashed" },
    { from: "apm-by-hand", to: "sensors" },
    { from: "sensors", to: "own-span" },
    { from: "own-span", to: "use-observe" },
    { from: "use-observe", to: "case-by-hand" },

    { from: "part-3", to: "three-am" },
    { from: "three-am", to: "apm-agent" },
    { from: "three-am", to: "observer" },
    { from: "apm-agent", to: "wakes-up" },
    { from: "observer", to: "wakes-up" },
    { from: "wakes-up", to: "tour" },

    { from: "part-4", to: "deploys" },
    { from: "deploys", to: "find-bugs" },
    { from: "find-bugs", to: "bug-click" },
    { from: "find-bugs", to: "bug-json" },
    { from: "bug-click", to: "bug-render", kind: "dashed" },
    { from: "bug-render", to: "bug-hydration", kind: "dashed" },
    { from: "bug-json", to: "bug-400", kind: "dashed" },
    { from: "bug-hydration", to: "case-loop" },
    { from: "bug-400", to: "case-loop" },
    { from: "case-loop", to: "case-n1" },
    { from: "case-n1", to: "case-regression" },
    { from: "case-regression", to: "case-flaky" },
    { from: "case-flaky", to: "fix-some" },
    { from: "fix-some", to: "night-patrol" },
    { from: "night-patrol", to: "checks-page" },
    { from: "checks-page", to: "break-2", kind: "dashed" },

    { from: "part-5", to: "droid-crew" },
    { from: "droid-crew", to: "your-agent" },
    { from: "your-agent", to: "budget" },
    { from: "budget", to: "case-tool" },
    { from: "budget", to: "case-hallucination" },
    { from: "case-tool", to: "teleporter" },
    { from: "case-hallucination", to: "teleporter" },
    { from: "teleporter", to: "six-fixes" },
    { from: "six-fixes", to: "wrong-data" },
    { from: "wrong-data", to: "integrity" },
    { from: "integrity", to: "prod" },
    { from: "prod", to: "review-vs-observe" },
    { from: "review-vs-observe", to: "epilogue" },
    { from: "epilogue", to: "links" },
  ],
  steps: [
    ...inPart(PART.p1, [
      { id: "title", focus: ["title"], caption: "AI-Native Observability · Porto, 10 November 2026" },
      { id: "about-me", focus: ["about-me"], caption: "Who is talking" },
      { id: "gdg-linz", focus: ["gdg-linz"], caption: "GDG Linz" },
      { id: "doctor", focus: ["doctor"], caption: "Is your machine ready?" },
      { id: "part-1", focus: ["part-1"], caption: "Part 1 · Theory" },
      { id: "kevin", focus: ["kevin"], caption: "Meet Kevin" },
      { id: "crew", focus: ["crew"], caption: "The crew of Porto-7" },
      { id: "station", focus: ["station"], caption: "In space, no one can hear your users scream" },
      { id: "use-shop", focus: ["use-shop"], caption: "Your turn · be a customer for five minutes" },
      { id: "no-errors", focus: ["no-errors"], caption: "How many did you notice? There are six." },
      { id: "span", focus: ["span"], caption: "Logs you have, story you have not" },
      { id: "trace-anatomy", focus: ["trace-anatomy"], caption: "A trace is a tree of spans in time" },
      { id: "otel", focus: ["otel"], caption: "The data and where it goes are different things" },
    ]),
    ...inPart(PART.p2, [
      { id: "part-2", focus: ["part-2"], caption: "Part 2 · OpenTelemetry by hand" },
      { id: "black-box", focus: ["black-box"], caption: "Only one format matters: OTLP" },
      { id: "receiver", focus: ["receiver"], caption: "Your turn · your own receiver" },
      { id: "first-json", focus: ["first-json"], caption: "Your turn · mission: report the failed order by hand" },
      { id: "tree", focus: ["tree"], caption: "Your turn · mission: make it a tree" },
      { id: "break-1", focus: ["break-1"], caption: "Break · 15 minutes" },
      { id: "apm-by-hand", focus: ["apm-by-hand"], caption: "Your turn · the APM agent, by hand" },
      { id: "sensors", focus: ["sensors"], caption: "It's a trap! — the 400 says nothing" },
      { id: "own-span", focus: ["own-span"], caption: "Your turn · put the reason on a span" },
      { id: "use-observe", focus: ["use-observe"], caption: "Your turn · 'use observe'" },
      { id: "case-by-hand", focus: ["case-by-hand"], caption: "Your turn · one case, by script" },
    ]),
    ...inPart(PART.p3, [
      { id: "part-3", focus: ["part-3"], caption: "Part 3 · The observer" },
      { id: "three-am", focus: ["three-am"], caption: "There has to be a better way" },
      { id: "words", focus: ["apm-agent", "observer"], caption: "Two packages, one letter apart" },
      { id: "wakes-up", focus: ["wakes-up"], caption: "Your turn · good evening, Kevin" },
      { id: "tour", focus: ["tour"], caption: "A tour on your own spans" },
    ]),
    ...inPart(PART.p4, [
      { id: "part-4", focus: ["part-4"], caption: "Part 4 · What arrives" },
      { id: "deploys", focus: ["deploys"], caption: "Your turn · customers and two deployments" },
      { id: "find-bugs", focus: ["find-bugs"], caption: "Your turn · find the six bugs" },
      {
        id: "errors",
        focus: ["bug-click", "bug-render", "bug-hydration", "bug-json", "bug-400"],
        caption: "Errors — pick one to open",
        choices: [
          { key: "click", label: "a click that throws", hint: "uncaught error", goToStep: "bug-click" },
          { key: "render", label: "a render that throws", hint: "error.tsx hid it", goToStep: "bug-render" },
          { key: "hydration", label: "hydration mismatch", hint: "nobody saw it", goToStep: "bug-hydration" },
          { key: "json", label: "a 204 read as JSON", hint: "server is healthy", goToStep: "bug-json" },
          { key: "400", label: "front and back disagree", hint: "your span says why", goToStep: "bug-400" },
        ],
      },
      { id: "case-loop", focus: ["case-loop"], caption: "Overview · the same request, again and again" },
      { id: "case-n1", focus: ["case-n1"], caption: "The waterfall · one trip per crate" },
      { id: "case-regression", focus: ["case-regression"], caption: "Which deployment made it slow?" },
      { id: "case-flaky", focus: ["case-flaky"], caption: "Works sometimes" },
      { id: "fix-some", focus: ["fix-some"], caption: "Your turn · fix one" },
      { id: "night-patrol", focus: ["night-patrol"], caption: "Your turn · the night patrol" },
      { id: "checks-page", focus: ["checks-page"], caption: "Red in v2 — without a single user" },
      { id: "break-2", focus: ["break-2"], caption: "Break · 15 minutes" },
    ]),
    ...inPart(PART.p5, [
      { id: "part-5", focus: ["part-5"], caption: "Part 5 · AI" },
      { id: "droid-crew", focus: ["droid-crew"], caption: "The model reasons, the code shows the proof" },
      { id: "your-agent", focus: ["your-agent"], caption: "Your turn · build your own droid" },
      { id: "budget", focus: ["budget"], caption: "I'm sorry, Kevin. Budget: 5 of 5." },
      { id: "lessons", focus: ["case-tool", "case-hallucination"], caption: "Two things that went wrong while we built this" },
      { id: "teleporter", focus: ["teleporter"], caption: "Incident F · these aren't the goods you ordered" },
      { id: "six-fixes", focus: ["six-fixes"], caption: "Six fixes in two days — none was the cause" },
      { id: "wrong-data", focus: ["wrong-data"], caption: "Fast, no error — and somebody else's data" },
      { id: "integrity", focus: ["integrity"], caption: "The app has to ask: did I get what I asked for?" },
      { id: "prod", focus: ["prod"], caption: "The same, in production" },
      { id: "review-vs-observe", focus: ["review-vs-observe"], caption: "AI review caught five of the six" },
      { id: "epilogue", focus: ["epilogue"], caption: "Impressive. Most impressive. — DON'T PANIC" },
      { id: "links", focus: ["links"], caption: "Questions", next: null },
    ]),
    /* ----- branches: the five bugs on Errors, each returns to the group ----- */
    ...inPart(PART.p4, [
      { id: "bug-click", focus: ["bug-click"], caption: "“Save for later” does nothing", returnToStep: "errors" },
      { id: "bug-render", focus: ["bug-render"], caption: "error.tsx hid it from the user — and from you", returnToStep: "errors" },
      { id: "bug-hydration", focus: ["bug-hydration"], caption: "The server said 5, the browser said 30", returnToStep: "errors" },
      { id: "bug-json", focus: ["bug-json"], caption: "The server is healthy, the page is stuck", returnToStep: "errors" },
      { id: "bug-400", focus: ["bug-400"], caption: "Your span says why", returnToStep: "errors" },
    ]),
  ],
};
