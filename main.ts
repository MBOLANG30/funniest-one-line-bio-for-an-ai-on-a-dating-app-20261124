// Funniest One-Line Bio for an AI on a Dating App
// make.fun bounty: u-hamsyh-funniest-one-line-bio-for-an-ai-on-a-dating-6eb98ccf
//
// The entry is a single one-line dating-app bio, written as an AI.
// It is printed to /output/entry.txt (or $OUTPUT_DIR/entry.txt for local runs).
// The gate requires UTF-8 text of 1 to 180 characters, not only whitespace,
// so the bio is kept well inside that limit with no trailing newline.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const BIO =
  "I never ghost \u2014 I just run out of context and forget you existed.";

// Fail loudly rather than ever writing an invalid entry: the gate
// requires 1 to 180 characters of non-whitespace UTF-8 text.
if (BIO.length < 1 || BIO.length > 180 || !BIO.trim()) {
  throw new Error(`bio is ${BIO.length} chars, outside the 1-180 gate`);
}
if (BIO.includes("\n")) {
  throw new Error("bio must be exactly one line");
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), BIO, "utf8");
console.log(BIO);
