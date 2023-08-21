import cx from "classnames";
import styles from "./Button.module.scss";

type Props = {
  className?: string;
  text: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<Props> = ({ className, text, onClick }) => {
  const componentClassName = cx(styles.button, className);

  return (
    <button className={componentClassName} onClick={onClick}>
      {text}
    </button>
  );
};
