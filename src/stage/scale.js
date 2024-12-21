export function drawTextWithScale(canvas, tip) {
  const crossLineHalfWidth = 25;
  const step = 60;
  const x = 50;
  let y = 60;
  let fontFamily = "zcool-gdh";
  let text = "The quick brown fox jumps over the lazy dog";

  let ctx = canvas.getContext("2d");

  ctx.strokeStyle = "purple";
  ctx.fillStyle = "black";
  ctx.lineWidth = 1;
  ctx.font = `normal 20pt '${fontFamily}'`;

  const baselines = [
    {
      scaleX: 1,
      scaleY: 1,
      letterSpacing: 0,
    },
    {
      scaleX: 1,
      scaleY: 1,
      letterSpacing: '-1px',
    },
    {
      scaleX: 0.5,
      scaleY: 1,
      letterSpacing: "1px",
    },
    {
      scaleX: 1,
      scaleY: 0.5,
      letterSpacing: "10px",
    },
    {
      scaleX: 0.8,
      scaleY: 1,
      letterSpacing: "-1px",
    },
    {
      scaleX: 0.8,
      scaleY: 1,
      letterSpacing: "-10px",
    },
  ];

  // draw tip
  drawTextWithTip(tip);

  // log metrics
  const metrics = ctx.measureText("我");
  console.log(`${tip} metrics is: `, metrics);

  // draw text with crossLine
  baselines.forEach(({ scaleX, scaleY }, index) => drawTextWithScale(text, x, y + step * (index + 1), scaleX, scaleY));

  // with letterSpacing

  // draw text with crossLine
  baselines.forEach(({ scaleX, scaleY, letterSpacing }, index) =>
    drawTextWithScale(text, x, y + step * (index + 1), scaleX, scaleY, letterSpacing)
  );

  y = 600;
  fontFamily = "Times new Roman";
  ctx.font = `normal 12pt '${fontFamily}'`;
  text = "Abcdefg";

  function drawTextWithScale(text, x, y, scaleX, scaleY, letterSpacing) {
    ctx.setTransform(scaleX, 0, 0, scaleY, 0, 0);
    ctx.letterSpacing = letterSpacing;

    ctx.textBaseline = "top";

    const newX = x / scaleX;
    const newY = y / scaleY;

    ctx.fillText(text, newX, newY);

    ctx.resetTransform();

    ctx.moveTo(x - crossLineHalfWidth, y);
    ctx.lineTo(x + crossLineHalfWidth, y);
    ctx.stroke();

    ctx.moveTo(x, y - crossLineHalfWidth);
    ctx.lineTo(x, y + crossLineHalfWidth);
    ctx.stroke();
  }

  function drawTextWithTip(text) {
    ctx.textBaseline = "alphabetic";
    ctx.fillText(text, x, y);
  }
}
