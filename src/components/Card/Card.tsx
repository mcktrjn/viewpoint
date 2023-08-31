import cx from "classnames";
import { useRef } from "react";
import { Chip, Icon, Markdown, Typography } from "../../components";
import { spaces } from "../../constants";
import { useElementSize, useWindowSize } from "../../hooks";
import { Card as Props } from "../../types";
import styles from "./Card.module.scss";

export const Card: React.FC<Props> = ({
  className,
  size = "small",
  imageSrc,
  imageAlt,
  imagePosition = [50, 50],
  author,
  date,
  heading,
  decorationRange,
  icon,
  paragraph,
  paragraphLength,
  chips,
}) => {
  const { windowWidth } = useWindowSize();
  const isSizeSmall = size === "small" || windowWidth <= 768;

  const componentClassName = cx(styles.card, styles[`size-${size}`], className);
  const objectPositionProperty = `${imagePosition[0]}% ${imagePosition[1]}%`;

  const textsRef = useRef<HTMLDivElement>(null);
  const textsHeight = useElementSize(textsRef, "height");

  return (
    <div className={componentClassName}>
      <img
        className={styles.image}
        src={imageSrc}
        alt={imageAlt}
        style={
          !isSizeSmall
            ? {
                minHeight: textsHeight + 32 * 2,
                objectPosition: objectPositionProperty,
              }
            : { objectPosition: objectPositionProperty }
        }
      />
      <div className={styles.texts} ref={textsRef}>
        <Typography
          className={styles.authorAndDate}
          variant="p"
          color={isSizeSmall ? "neutral40" : "white"}
          text={`${author + spaces.EMSP}•${spaces.EMSP + date}`}
        />
        <div className={styles.headingAndIcon}>
          <Typography
            className={styles.heading}
            isVisible
            variant={isSizeSmall ? "h4" : "h2"}
            isFamilyPlayfairDisplay
            weight={600}
            color={isSizeSmall ? "primary10" : "white"}
            decorationColor={isSizeSmall ? "primary90" : "white"}
            decorationTextColor={isSizeSmall ? "primary40" : "black"}
            decorationRange={decorationRange}
            text={heading}
          />
          {icon && isSizeSmall && <Icon className={styles.icon} icon={icon} />}
        </div>
        <Markdown
          className={styles.paragraph}
          length={paragraphLength || (isSizeSmall ? 120 : 240)}
          text={paragraph}
        />
        <div className={styles.chips}>
          {chips.map((chip, index) =>
            index === 0 ? (
              <Chip
                key={index}
                width={24}
                color={isSizeSmall ? "white" : "black"}
                fillColor={isSizeSmall ? "primary40" : "white"}
                text={chip}
              />
            ) : (
              <Chip
                key={index}
                color={isSizeSmall ? "primary40" : "white"}
                text={chip}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};
