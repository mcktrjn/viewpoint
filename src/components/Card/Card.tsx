import cx from "classnames";
import { Chip, Icon, Markdown, Typography } from "../../components";
import { spaces } from "../../constants";
import { useWindowSize } from "../../hooks";
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
  chips,
}) => {
  const { windowWidth } = useWindowSize();
  const isSizeSmall = size === "small" || windowWidth <= 768;
  const componentClassName = cx(styles.card, styles[`size-${size}`], className);

  return (
    <div className={componentClassName}>
      <img
        className={styles.image}
        src={imageSrc}
        alt={imageAlt}
        style={{ objectPosition: `${imagePosition[0]}% ${imagePosition[1]}%` }}
      />
      <div className={styles.texts}>
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
          length={isSizeSmall ? 120 : 240}
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
