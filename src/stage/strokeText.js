import { drawCrossLine, drawTextWithTip, drawTextWithTip2, drawTextWithTip3, crossLineHalfWidth } from "./util.js";

export function strokeText(canvas, canvasType) {
  const step = 70;
  const x = 90;
  let y = 60;
  let fontFamily = "zcool-gdh";
  let text = "拿一行字来测试";

  let ctx = canvas.getContext("2d");

  ctx.strokeStyle = "purple";
  ctx.fillStyle = "black";
  ctx.font = `normal 20pt '${fontFamily}'`;

  const lineWidths = [0.4, 1, 1.5, 11];

  // draw tip
  const tip = `text tip is (lineWidth)`;
  drawTextWithTip(ctx, canvasType, x, y);
  drawTextWithTip3(ctx, tip, x + crossLineHalfWidth, y + crossLineHalfWidth);

  // with lineWidths
  lineWidths.forEach((lineWidth, index) => {
    const newY = y + step * (index + 1);

    drawCrossLine(ctx, x, newY);
    drawTextWithTip2(ctx, `lineWidth: ${lineWidth}`, x - 10, newY);

    strokeText(text, x, newY, lineWidth);
  });

  function strokeText(text, x, y, lineWidth) {
    ctx.save();
    ctx.lineWidth = lineWidth;

    ctx.textBaseline = "top";

    ctx.strokeText(text, x, y);

    ctx.resetTransform();
    ctx.restore();
  }
}
