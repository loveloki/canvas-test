export function drawTextWithScale(canvas, tip) {
  const crossLineHalfWidth = 25;
  const step = 60;
  const x = 90;
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
      letterSpacing: "-1px",
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
      letterSpacing: "12.5px",
    },
    {
      scaleX: 1,
      scaleY: 1,
      letterSpacing: "-10px",
    },
  ];

  // draw tip
  drawTextWithTip(tip);

  // with letterSpacing
  baselines.forEach(({ scaleX, scaleY, letterSpacing }, index) => {
    const newY = y + step * (index + 1);
    drawCrossLine(x, newY);
    drawTextWithScale(text, x, newY, scaleX, scaleY, letterSpacing);
  });

  function drawTextWithScale(text, x, y, scaleX, scaleY, letterSpacing) {
    ctx.setTransform(scaleX, 0, 0, scaleY, 0, 0);
    ctx.letterSpacing = letterSpacing;

    ctx.textBaseline = "top";

    const newX = x / scaleX;
    const newY = y / scaleY;

    ctx.fillText(text, newX, newY);

    ctx.resetTransform();
  }

  function drawCrossLine(x, y) {
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
