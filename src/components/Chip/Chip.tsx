import cx from "classnames";
import { Icon } from "../../components";
import { colors } from "../../constants";
import { Color, Symbol } from "../../types";
import styles from "./Chip.module.scss";

type Props = {
  className?: string;
  size?: "large" | "small";
  width?: number;
  color?: Color;
  fillColor?: Color;
  text?: string;
  icon?: Symbol;
};

export const Chip: React.FC<Props> = ({
  className,
  size = "small",
  width,
  color = "primary40",
  fillColor,
  text,
  icon,
}) => {
  const componentClassName = cx(styles.chip, styles[`size-${size}`], className);

  return (
    <span
      className={componentClassName}
      style={{
        width: `${width}px`,
        borderColor: fillColor ? colors[fillColor] : colors[color],
        backgroundColor: fillColor && colors[fillColor],
        color: colors[color],
        userSelect: size === "small" && fillColor ? "none" : "auto",
      }}
    >
      {text}
      {icon && <Icon className={styles.icon} color={color} icon={icon} />}
    </span>
  );
};
