import { useContext } from "react";
import { Context } from "../../Context";
import {
  Card,
  Container,
  Markdown,
  Section,
  Typography,
} from "../../components";
import { Card as Props } from "../../types";
import styles from "./Story.module.scss";

export const Story: React.FC<Props & { text: string }> = ({
  imageSrc,
  imageAlt,
  imagePosition,
  author,
  date,
  heading,
  decorationRange,
  paragraph,
  chips,
  text,
}) => {
  const { texts } = useContext(Context);

  return (
    <Section className={styles.section}>
      <Container className={styles.container}>
        <Card
          className="card"
          size="large"
          imageSrc={imageSrc}
          imageAlt={imageAlt}
          imagePosition={imagePosition}
          author={author}
          date={date}
          heading={heading}
          decorationRange={decorationRange}
          paragraph={paragraph}
          chips={chips}
        />
        <Markdown className={styles.text} text={text} />
        <div className={styles.contents}>
          <Typography
            variant="p"
            weight={600}
            color="neutral10"
            text={texts.story.inThisStory}
          />
          <Typography
            isVisible
            variant="h4"
            weight={600}
            decorationColor="primary40"
            decorationTextColor="neutral99"
            decorationRange={[0, 1]}
            text={texts.workInProgress}
          />
        </div>
      </Container>
    </Section>
  );
};
