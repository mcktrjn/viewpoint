import cx from "classnames";
import styles from "./Button.module.scss";

type Props = {
  className?: string;
  text: string;
  handleClick?: () => void;
};

export const Button: React.FC<Props> = ({ className, text, handleClick }) => {
  const componentClassName = cx(styles.button, className);

  return (
    <button className={componentClassName} onClick={handleClick}>
      {text}
    </button>
  );
};
