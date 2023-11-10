import cx from "classnames";
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
import { Card as Props } from "../../types";
import styles from "./Stories.module.scss";

export const Stories = () => {
  const { structure, setSectionsPositions, sectionsVisibility, texts } = useContext(Context); // prettier-ignore
  const { pathname: path } = useLocation();

  type Subpage = {
    sections: {
      element: React.ReactElement;
    }[];
  };

  const subpages = structure.sections[2].subpages;
  const getProps = (subpage: Subpage) => {
    return subpage.sections[0].element.props;
  };

  let chips: string[] = [];
  subpages?.forEach((subpage) => {
    getProps(subpage).chips.forEach((chip: string) => {
      if (!chips.includes(chip) && chip.length > 2) chips.push(chip);
    });
  });

  const handleLinkClick = (link: string) => {
    if (link !== path) setSectionsPositions([]);
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }));
  };

  return (
    <Section
      className={cx(styles.section, {
        [styles.visible]: sectionsVisibility[2],
      })}
    >
      <Container className={styles.container} size="small">
        <div className={styles.texts}>
          <Typography
            isVisible={sectionsVisibility[2]}
            variant="h2"
            isFamilyPlayfairDisplay
            weight={600}
            decoration="underline"
            decorationRange={texts.stories.decorationRange}
            text={texts.stories.heading}
          />
          <Markdown text={texts.stories.paragraph} />
          {chips.length !== 0 && (
            <div className={styles.chips}>
              {chips.sort().map((chip: string, index: number) => (
                <Chip key={index} size="large" text={chip} />
              ))}
            </div>
          )}
        </div>

        {subpages?.map((subpage, index) => {
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
          }: Props = getProps(subpage);

          return (
            <Link
              key={subpage.index}
              to={subpage.path}
              className={styles.link}
              onClick={() => handleLinkClick(subpage.path)}
            >
              <Card
                className={cx(styles.card, index === 0 ? "card" : undefined)}
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
