export function drawTextWithScale(canvas, canvasType) {
  const crossLineHalfWidth = 25;
  const step = 70;
  const x = 90;
  let y = 60;
  let fontFamily = "zcool-gdh";
  let text = "拿一行字来测试";

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
      letterSpacing: "-10px",
    },
    {
      scaleX: 1,
      scaleY: 1,
      letterSpacing: "10px",
    },
    {
      scaleX: 0.5,
      scaleY: 1,
      letterSpacing: "20px",
    },
    {
      scaleX: 0.8,
      scaleY: 1,
      letterSpacing: "50px",
    },
    {
      scaleX: 0.8,
      scaleY: 1,
      letterSpacing: "-10px",
    },
    {
      scaleX: 0.8,
      scaleY: 1,
      letterSpacing: "-50px",
    },
    {
      scaleX: 1,
      scaleY: 0.5,
      letterSpacing: "20px",
    },
    {
      scaleX: 1,
      scaleY: 0.5,
      letterSpacing: "-20px",
    },
    {
      scaleX: 1,
      scaleY: 0.8,
      letterSpacing: "50px",
    },
    {
      scaleX: 0.8,
      scaleY: 0.8,
      letterSpacing: "50px",
    },
    {
      scaleX: 0.8,
      scaleY: 0.8,
      letterSpacing: "-50px",
    },
  ];


  // draw tip
  const tip = `text tip is (scaleX, scaleY, letterSpacing)`
  drawTextWithTip(canvasType, x, y);
  drawTextWithTip3(tip, x + crossLineHalfWidth, y + crossLineHalfWidth);

  // with letterSpacing
  baselines.forEach(({ scaleX, scaleY, letterSpacing }, index) => {
    const newY = y + step * (index + 1);
    drawCrossLine(x, newY);
    drawTextWithTip2(`${scaleX}, ${scaleY}, ${letterSpacing}`, x - 10, newY);

    drawTextWithScale(text, x, newY, scaleX, scaleY, letterSpacing);
  });

  function drawTextWithScale(text, x, y, scaleX, scaleY, letterSpacing) {
    ctx.save()
    ctx.setTransform(scaleX, 0, 0, scaleY, 0, 0);
    ctx.letterSpacing = letterSpacing;

    ctx.textBaseline = "top";

    const newX = x / scaleX;
    const newY = y / scaleY;

    ctx.fillText(text, newX, newY);

    ctx.resetTransform();
    ctx.restore();
  }

  function drawCrossLine(x, y) {
    ctx.moveTo(x - crossLineHalfWidth, y);
    ctx.lineTo(x + crossLineHalfWidth, y);
    ctx.stroke();

    ctx.moveTo(x, y - crossLineHalfWidth);
    ctx.lineTo(x, y + crossLineHalfWidth);
    ctx.stroke();
  }

  function drawTextWithTip(text, x, y) {
    ctx.textBaseline = "alphabetic";
    ctx.fillText(text, x, y);
  }

  function drawTextWithTip2(text, x, y) {
    ctx.save()

    ctx.font = `normal 10pt 'Times new roman'`;
    ctx.textBaseline = "alphabetic";
    ctx.fillText(text, x + crossLineHalfWidth, y - 10);
    
    ctx.restore();
  }

  function drawTextWithTip3(text, x, y) {
    ctx.save()

    ctx.font = `normal 20pt 'Times new roman'`;
    ctx.textBaseline = "alphabetic";
    ctx.fillText(text, x, y);
    
    ctx.restore();
  }
}
