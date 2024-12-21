import { Canvas } from "skia-canvas";

// skiaCanvas.gpu = false;

export default {
  getInstance: () => new Canvas(1000, 1000),
  save: (skiaCanvas, path) => skiaCanvas.saveAs(path),
  type: "skia-canvas",
};
