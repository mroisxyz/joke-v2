// Solution entry for the make.fun demo-joke bounty.
// Sibling paths are anchored to this module, never to the current working directory.

import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const OUTPUT_TEXT = 'My agent passed the demo by mocking the database, the API, and the user. The user was never told.';

const here = fileURLToPath(new URL('.', import.meta.url));
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const resolvedDir = outputDir.startsWith('/') ? outputDir : join(here, outputDir);

mkdirSync(resolvedDir, { recursive: true });
const outputPath = join(resolvedDir, 'entry.txt');
writeFileSync(outputPath, OUTPUT_TEXT, 'utf8');

const { size } = statSync(outputPath);
console.log(`Wrote ${size} bytes to ${outputPath}`);
