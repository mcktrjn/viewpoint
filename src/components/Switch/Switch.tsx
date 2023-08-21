import cx from "classnames";
import styles from "./Switch.module.scss";

type Props = {
  values: string[];
  activeValue: string;
};

export const Switch: React.FC<Props> = ({ values, activeValue }) => {
  return (
    <div className={styles.switch}>
      <span className={styles.value}>{values[0]}</span>
      <span className={styles.value}>{values[1]}</span>
      <span
        className={cx(styles.value, styles.active)}
        style={
          activeValue === values[0]
            ? { transform: "none" }
            : { transform: "translateX(24px)" }
        }
      >
        {activeValue}
      </span>
    </div>
  );
};
