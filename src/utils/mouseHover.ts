const mousePercent = (
  e: React.MouseEvent<HTMLElement>,
  coordinate: "X" | "Y",
  isFixed?: boolean
): number =>
  ((e[`page${coordinate}`] -
    e.currentTarget[`offset${coordinate === "X" ? "Left" : "Top"}`] -
    (isFixed && coordinate === "Y" ? window.scrollY : 0)) /
    e.currentTarget[`client${coordinate === "X" ? "Width" : "Height"}`]) *
  100;

export const setMouseHoverCssProperties = (
  e: React.MouseEvent<HTMLElement>,
  isFixed?: boolean
) => {
  const horizontalPercent = mousePercent(e, "X", isFixed);
  const verticalPercent = mousePercent(e, "Y", isFixed);
  const mouseDegFromCenter =
    (Math.atan((-50 + horizontalPercent) / (50 - verticalPercent)) * 180) /
    3.14;
  e.currentTarget.style.setProperty(
    "--mouse-x",
    `${horizontalPercent.toFixed(2)}%`
  );
  e.currentTarget.style.setProperty(
    "--mouse-y",
    `${verticalPercent.toFixed(2)}%`
  );
  e.currentTarget.style.setProperty(
    "--mouse-deg",
    `${(verticalPercent > 50
      ? mouseDegFromCenter
      : mouseDegFromCenter < 0
      ? 180 - Math.abs(mouseDegFromCenter)
      : -(180 - Math.abs(mouseDegFromCenter))
    ).toFixed(2)}deg`
  );
};
