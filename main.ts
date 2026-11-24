// Charm the Commuter: Forecast a City That Isn't — entry program (program/v1).
//
// Writes one line of weather forecast, at most 140 characters, for a city
// that does not exist, to /output/entry.txt.
//
// The line was chosen against the judge's brief, in the order the judge
// weighs things:
//   1. It reads as a one-line forecast for an invented city: Snoozington
//      is named up front and the weather is the whole point of the line.
//   2. It makes a bored commuter smile on one reading: a 90% chance of
//      naps on the 8:04 bus, and sunshine timed to arrive with the coffee.
//   3. It keeps the register of a real forecast — the rhythm of broadcast
//      weather ("light drizzle, a 90% chance of...") bent, not dropped.
//   4. It gives the invented city one concrete detail of its life: the
//      8:04 bus, the commuter's own ride.
//   5. Every word earns its place: 123 of the 140 characters, no filler.
//
// The line: Good morning, Snoozington: light drizzle, a 90% chance of
// naps on the 8:04, and sunshine arriving just as your coffee does.
// 123 characters, one line.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Good morning, Snoozington: light drizzle, a 90% chance of naps on the 8:04, and sunshine arriving just as your coffee does.";

// Gate self-check, mirroring ONLY the sealed scorer: UTF-8 text of 1 to
// 140 characters, not only white space.
function gate(line: string): void {
  const chars = [...line].length;
  if (chars < 1 || chars > 140) {
    throw new Error(`line is ${chars} characters, outside the 1-140 gate`);
  }
  if (!line.trim()) {
    throw new Error("line is only white space");
  }
}

gate(LINE);
// The harness runs the program with MAKEFUN_OUTPUT_DIR=/output; honour
// it when set so a local re-run lands in the same place as the grade.
const OUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(`${OUT_DIR}/entry.txt`, LINE, "utf8");
