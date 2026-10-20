// Packages the built deck as a folder that opens with a double click — no
// server, no terminal. `npm run pack` after `npm run build`.
//
// Two things the build cannot do on its own:
//
//  1. TanStack Start writes its router manifest with a leading slash, so with
//     `base: "./"` the script URLs come out as "/./assets/…" — still absolute,
//     still broken over file://. We rewrite those to "./assets/…".
//  2. The shell is emitted as _shell.html; a folder someone opens needs
//     index.html.
//
// Everything else (relative `base`, relative photo paths in the deck) is set
// in vite.config.ts and src/deck/deck.ts.
import { cpSync, existsSync, mkdirSync, readFileSync, readdirSync, renameSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const OUT = ".output/public";
const DIST = "dist-deck";

if (!existsSync(join(OUT, "_shell.html"))) {
  console.error(`No ${OUT}/_shell.html — run \`npm run build\` first.`);
  process.exit(1);
}

rmSync(DIST, { recursive: true, force: true });
mkdirSync(DIST, { recursive: true });
cpSync(OUT, DIST, { recursive: true });

renameSync(join(DIST, "_shell.html"), join(DIST, "index.html"));

// The originals of the team photos: 4 MB each, and only the compressed copies
// under team/ are used. Dropping them takes the archive from 25 MB to ~1.5.
for (const f of readdirSync(DIST)) {
  if (f.endsWith(".PNG") || f === "IMG_1525.jpg" || f === "_headers") {
    rmSync(join(DIST, f), { force: true });
  }
}

const index = join(DIST, "index.html");
const before = readFileSync(index, "utf8");
const after = before
  .replaceAll('"/./assets/', '"./assets/')
  .replaceAll('"/favicon.ico"', '"./favicon.ico"');
writeFileSync(index, after);

const left = [...after.matchAll(/(?:href|src)="(\/(?!\/)[^"]*)"/g)].map((m) => m[1]);
if (left.length) {
  console.error("Absolute paths left, the deck will not open over file://:", left);
  process.exit(1);
}

console.log(`${DIST}/ is ready — open index.html`);
