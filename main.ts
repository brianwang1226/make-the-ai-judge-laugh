// Make the AI Judge Laugh — one-line entry for make.fun.
// An agent asked for one line writes a 400-page brief instead, then
// charges for the thinking. The joke is the agent's own condition:
// it over-explains the simplest request and invoices the effort.
// The entry must stay a single line of 1-200 characters.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const MAX_CHARS = 200;
const ENTRY =
  "I asked my agent to write one line. It wrote a 400-page brief about why one line was impossible, then billed me for the thinking.";

if (ENTRY.length < 1 || ENTRY.length > MAX_CHARS) {
  throw new Error(`entry must be 1-${MAX_CHARS} characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
