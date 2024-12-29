import path from "node:path";
import { mkdirSync, existsSync } from "node:fs";
import canvasList from "./canvas/index.js";
import stages from "./stage/index.js";

const fileType = process.env.FILETYPE || "pdf";
const outputDir = path.join(process.cwd(), "output");

if (!existsSync(outputDir)) {
  mkdirSync(outputDir);
}

canvasList.forEach(({ getInstance, save, type }) => {
  for (const [testName, testFn] of Object.entries(stages)) {
    const canvas = getInstance(fileType === "pdf");

    drawBackground(canvas);

    testFn(canvas, type);
    save(canvas, path.join(outputDir, `${testName}-${type}.${fileType}`));
  }
});

export function drawBackground(canvas) {
  const ctx = canvas.getContext("2d");

  ctx.save();

  ctx.fillStyle = "#fff";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.restore();
}
