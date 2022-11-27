import "./NavbarButton.scss";

const mousePercent = (
  e: React.MouseEvent<HTMLButtonElement>,
  coordinate: "X" | "Y"
): number =>
  ((e[`page${coordinate}`] -
    e.currentTarget[`offset${coordinate === "X" ? "Left" : "Top"}`]) /
    e.currentTarget[`client${coordinate === "X" ? "Width" : "Height"}`]) *
  100;

const NavbarButton: React.FC<{
  label: string;
}> = ({ label }) => (
  <button
    className={
      "button glass-morphism-dark-button background-blur " +
      "radial-gradient-border-radius subtitle-sm"
    }
    onMouseMove={(e) => {
      const horizontalPercent = mousePercent(e, "X");
      const verticalPercent = mousePercent(e, "Y");
      const mouseDegFromCenter =
        (Math.atan((-50 + horizontalPercent) / (50 - verticalPercent)) * 180) /
        3.14;
      console.log(mouseDegFromCenter);
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
    }}
  >
    {label}
  </button>
);

export default NavbarButton;
