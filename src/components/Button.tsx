import cn from "@styles/cssUtils";
import { setMouseHoverCssProperties } from "@utils/mouseHover";
import { useNavigate } from "react-router-dom";
import { ClassNames } from "./Button.module.scss";

const Button: React.FC<{
  label: string;
  to: string;
}> = ({ label, to: route }) => {
  const navigate = useNavigate();

  return (
    <button
      className={cn<ClassNames>()("_acrylicButton")}
      onClick={() => navigate(route)}
      onMouseMove={(e) => setMouseHoverCssProperties(e)}
      type="button"
    >
      {label}
    </button>
  );
};

export default Button;
