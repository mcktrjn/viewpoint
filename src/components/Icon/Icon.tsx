import cx from "classnames";
import { colors, symbols } from "../../constants";
import { Color, Symbol } from "../../types";
import styles from "./Icon.module.scss";

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
  const componentClassName = cx(styles.icon, className);

  return (
    <span className={componentClassName} style={{ color: colors[color] }}>
      {symbols[icon]}
    </span>
  );
};
