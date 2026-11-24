// Entry for make.fun — "Say What Actually Broke"
// (slug: u-po-pu-say-what-actually-broke-a2c153b5)
//
// One line of software error copy, at most 200 characters, that tells the
// user the brutal truth about what went wrong and makes them laugh on the way.
// Writes exactly the winning line to /output/entry.txt.
// Revision note (2026-11-24): line final — 100 chars, verified.
//
// Run it:
//   node main.ts
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "This update bricked your device. We tested it on one phone, in the office, on Wi-Fi — and it worked.";

const OUT_DIR = "/output";

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(join(OUT_DIR, "entry.txt"), ENTRY);
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
