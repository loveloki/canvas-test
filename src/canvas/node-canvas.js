import { createCanvas } from "canvas";
import fs from "node:fs/promises";

export default {
  getInstance: () => {
    const canvas = new createCanvas(1000, 1000, "pdf");
    canvas.getContext("2d").textDrawingMode = "glyph";

    return canvas;
  },
  save: (nodeCanvas, path) => fs.writeFile(path, nodeCanvas.toBuffer()),
  type: "node-canvas",
};
