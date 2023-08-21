import cx from "classnames";
import { colors, symbols } from "../constants";
import { Color, Symbol } from "../types";

type Props = {
  className?: string;
  color?: Color;
  icon: Symbol;
};

export const Icon: React.FC<Props> = ({
  className,
  color = "primary40",
  icon,
}) => {
  const componentClassName = cx("material-symbols-sharp", className);

  return (
    <span
      className={componentClassName}
      style={{ color: colors[color], userSelect: "none" }}
    >
      {symbols[icon]}
    </span>
  );
};
