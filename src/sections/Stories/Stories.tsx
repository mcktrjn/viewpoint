import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../Context";
import {
  Card,
  Chip,
  Container,
  Markdown,
  Section,
  Typography,
} from "../../components";
import { heading, paragraph } from "../../constants";
import { Card as Props } from "../../types";
import styles from "./Stories.module.scss";

export const Stories = () => {
  const { structure, setSectionsPositions, sectionsVisibility } = useContext(Context); // prettier-ignore
  const { pathname: path } = useLocation();

  const handleLinkClick = (link: string) => {
    if (link !== path) setSectionsPositions([]);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  return (
    <Section className={styles.section}>
      <Container className={styles.container} size="small">
        <div className={styles.texts}>
          <Typography
            isVisible={sectionsVisibility[2]}
            variant="h2"
            isFamilyPlayfairDisplay
            weight={600}
            decoration="underline"
            decorationRange={[3, 4]}
            text={heading}
          />
          <Markdown length={240} text={paragraph} />
          <div className={styles.chips}>
            <Chip size="large" text="Consectetur" />
            <Chip size="large" text="Adipiscing" />
          </div>
        </div>

        {structure.sections[2].subpages?.map((subpage, index) => {
          const {
            imageSrc,
            imageAlt,
            imagePosition,
            author,
            date,
            heading,
            decorationRange,
            paragraph,
            chips,
          } = subpage.sections[0].element.props as Props;

          return (
            <Link
              key={subpage.index}
              to={subpage.path}
              className={styles.link}
              onClick={() => handleLinkClick(subpage.path)}
            >
              <Card
                className={index === 0 ? "card" : undefined}
                size={index === 0 ? "large" : "small"}
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                imagePosition={imagePosition}
                author={author}
                date={date}
                heading={heading}
                decorationRange={decorationRange}
                icon="northEast"
                paragraph={paragraph}
                chips={chips}
              />
            </Link>
          );
        })}
      </Container>
    </Section>
  );
};
