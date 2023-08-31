import cx from "classnames";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../Context";
import {
  Button,
  Container,
  Markdown,
  Pattern,
  Section,
  Typography,
} from "../../components";
import { scrollToSection } from "../../helpers";
import styles from "./Start.module.scss";

export const Start = () => {
  const { sectionsRefs, sectionsVisibility, texts } = useContext(Context);

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
            className={styles.greeting}
            variant="p"
            weight={400}
            color="primary40"
            text={texts.start.greeting}
          />
          <Typography
            isVisible={sectionsVisibility[0]}
            variant="h1"
            isFamilyPlayfairDisplay
            weight={600}
            decorationRange={texts.start.decorationRange}
            text={texts.start.heading}
          />
          <Markdown className={styles.paragraph} text={texts.start.paragraph} />
          <Link to="/#stories">
            <Button
              className={styles.button}
              text={texts.start.button}
              onClick={() => scrollToSection(sectionsRefs, 2)}
            />
          </Link>
        </div>
        <div className={styles.imageAndPattern}>
          <div className={styles.wrapper}>
            <img
              className={styles.image}
              src="https://storage.googleapis.com/fir-viewpoint.appspot.com/me.jpg"
              alt="Photo by Jakob Owens on Unsplash"
            />
            <Pattern className={styles.pattern} />
          </div>
        </div>
      </Container>
    </Section>
  );
};
