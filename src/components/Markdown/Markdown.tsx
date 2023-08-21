import cx from "classnames";
import ReactMarkdown from "react-markdown";
import { modifyText } from "../../helpers";
import styles from "./Markdown.module.scss";

type Props = {
  className?: string;
  length?: number;
  text: string;
};

export const Markdown: React.FC<Props> = ({ className, length, text }) => {
  const componentClassName = cx(styles.markdown, className);

  return (
    <div className={componentClassName}>
      <ReactMarkdown>{modifyText(text, length)}</ReactMarkdown>
    </div>
  );
};
