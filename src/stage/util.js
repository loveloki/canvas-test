export const crossLineHalfWidth = 25;

export function drawCrossLine(ctx, x, y) {
  ctx.save();

  ctx.moveTo(x - crossLineHalfWidth, y);
  ctx.lineTo(x + crossLineHalfWidth, y);
  ctx.stroke();

  ctx.moveTo(x, y - crossLineHalfWidth);
  ctx.lineTo(x, y + crossLineHalfWidth);
  ctx.stroke();

  ctx.restore();
}

export function drawTextWithTip(ctx, text, x, y) {
  ctx.save();

  ctx.textBaseline = "alphabetic";
  ctx.fillText(text, x, y);

  ctx.restore();
}

export function drawTextWithTip2(ctx, text, x, y) {
  ctx.save();

  ctx.font = `normal 10pt 'Times new roman'`;
  ctx.textBaseline = "alphabetic";
  ctx.fillText(text, x + crossLineHalfWidth, y - 10);

  ctx.restore();
}

export function drawTextWithTip3(ctx, text, x, y) {
  ctx.save();

  ctx.font = `normal 20pt 'Times new roman'`;
  ctx.textBaseline = "alphabetic";
  ctx.fillText(text, x, y);

  ctx.restore();
}
