import cx from "classnames";
import { Context } from "../../types";
import styles from "./Page.module.scss";

type Props = Omit<
  Context,
  | "structure"
  | "isLoading"
  | "sectionsPositions"
  | "setSectionsPositions"
  | "texts"
> & {
  sections: { element: React.ReactElement }[];
};

export const Page: React.FC<Props> = ({
  sections,
  sectionsRefs,
  sectionsVisibility,
}) => {
  return (
    <main className={styles.page}>
      {sections &&
        sections.map((section, index) => (
          <div
            key={index}
            className={cx(styles.wrapper, {
              [styles.visible]: sectionsVisibility[index],
            })}
            ref={(element) => (sectionsRefs.current[index] = element)}
          >
            {section.element}
          </div>
        ))}
    </main>
  );
};
