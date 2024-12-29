import { createCanvas } from "canvas";
import fs from "node:fs/promises";

export default {
  getInstance: (isPDF = true) => {
    const canvas = new createCanvas(1000, 1000, isPDF ? "pdf" : undefined);
    canvas.getContext("2d").textDrawingMode = "glyph";

    return canvas;
  },
  save: (nodeCanvas, path) => fs.writeFile(path, nodeCanvas.toBuffer()),
  type: "node-canvas",
};
