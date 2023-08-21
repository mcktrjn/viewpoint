import cx from "classnames";
import { useContext } from "react";
import { Context } from "../../Context";
import {
  Button,
  Container,
  Markdown,
  Pattern,
  Section,
  Typography,
} from "../../components";
import { heading, imageAlt, imageSrc, paragraph } from "../../constants";
import styles from "./Start.module.scss";

export const Start = () => {
  const { sectionsVisibility } = useContext(Context);

  // const componentClassName = cx(styles.section, {
  //   [styles.visible]: sectionsVisibility[0],
  // });

  return (
    <Section
      className={cx(styles.section, {
        [styles.visible]: sectionsVisibility[0],
      })}
    >
      <Container className={styles.container}>
        <div className={styles.texts}>
          <Typography
            variant="p"
            weight={400}
            color="primary40"
            text="Lorem ipsum"
          />
          <Typography
            isVisible={sectionsVisibility[0]}
            variant="h1"
            isFamilyPlayfairDisplay
            weight={600}
            decorationRange={[3, 4]}
            text={heading}
          />
          <Markdown
            className={styles.paragraph}
            length={240}
            text={paragraph}
          />
          <Button className={styles.button} text="Lorem ipsum" />
        </div>
        <div className={styles.imageAndPattern}>
          <div className={styles.wrapper}>
            <img className={styles.image} src={imageSrc} alt={imageAlt} />
            <Pattern className={styles.pattern} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
