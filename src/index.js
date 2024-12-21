import path from "node:path";
import { mkdirSync, existsSync } from "node:fs";
import canvasList from "./canvas/index.js";
import stages from "./stage/index.js";

const outputDir = path.join(process.cwd(), "output");

if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

canvasList.forEach(({ getInstance, save, type }) => {
  for (const [testName, testFn] of Object.entries(stages)) {
    const canvas = getInstance();

    testFn(canvas, type);
    save(canvas, path.join(outputDir, `${testName}-${type}.pdf`));
  }
});
