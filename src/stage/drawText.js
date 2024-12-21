export function drawText(canvas, tip) {
  const crossLineHalfWidth = 25;
  const step = 60;
  const x = 50;
  let y = 60;
  let fontFamily = "zcool-gdh";
  let text = "The quick brown fox jumps over the lazy dog";

  let ctx = canvas.getContext("2d");

  ctx.letterSpacing = "-100px";

  ctx.strokeStyle = "purple";
  ctx.fillStyle = "black";
  ctx.lineWidth = 1;
  ctx.font = `normal 20pt '${fontFamily}'`;

  const baselines = ["top", "hanging", "middle", "alphabetic", "ideographic", "bottom"];

  // draw tip
  drawTextWithTip(tip);

  // log metrics
  const metrics = ctx.measureText("我");
  console.log(`${tip} metrics is: `, metrics);

  // draw text with crossLine
  baselines.forEach((baseline, index) => drawTextWithCrossLine(text, x, y + step * (index + 1), baseline));

  y = 600;
  fontFamily = "Times new Roman";
  ctx.font = `normal 12pt '${fontFamily}'`;
  text = "Abcdefg";

  // draw text with line
  drawTextWithLine(text, x + 100, y);

  function drawTextWithCrossLine(text, x, y, baseline) {
    ctx.textBaseline = baseline;

    ctx.fillText(`${text}(${baseline})`, x, y);

    ctx.moveTo(x - crossLineHalfWidth, y);
    ctx.lineTo(x + crossLineHalfWidth, y);
    ctx.stroke();

    ctx.moveTo(x, y - crossLineHalfWidth);
    ctx.lineTo(x, y + crossLineHalfWidth);
    ctx.stroke();
  }

  function drawTextWithLine(text, x, y) {
    ctx.moveTo(0, y);
    ctx.lineTo(x + 1000, y);
    ctx.stroke();

    baselines.forEach((baseline, index) => {
      const newX = x + step * 2 * index;

      ctx.textBaseline = "alphabetic";
      ctx.fillText(baseline, newX, y - step);

      ctx.textBaseline = baseline;
      ctx.fillText(text, newX, y);
    });
  }

  function drawTextWithTip(text) {
    ctx.textBaseline = "alphabetic";
    ctx.fillText(text, x, y);
  }
}
