import cx from "classnames";
import { useEffect, useRef, useState } from "react";
import { colors, spaces } from "../../constants";
import { useWindowSize } from "../../hooks";
import { Color } from "../../types";
import styles from "./Typography.module.scss";

type Props = {
  className?: string;
  isVisible?: boolean;
  variant: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
  isFamilyPlayfairDisplay?: boolean;
  weight?: 400 | 500 | 600 | 700;
  color?: Color;
  decoration?: "background" | "underline";
  decorationColor?: Color;
  decorationTextColor?: Color;
  decorationRange?: number[];
  text: string;
};

export const Typography: React.FC<Props> = ({
  className,
  isVisible,
  variant,
  isFamilyPlayfairDisplay,
  weight,
  color,
  decoration = "background",
  decorationColor = "primary90",
  decorationTextColor = "primary40",
  decorationRange,
  text,
}) => {
  const { windowWidth } = useWindowSize();
  const Tag = variant;
  const componentClassName = cx(
    {
      [styles.visible]: isVisible,
      [styles["family-playfairDisplay"]]: isFamilyPlayfairDisplay,
    },
    styles[`weight-${weight}`],
    className
  );

  const headingColor = colors[color || "primary10"];
  const paragraphColor = colors[color || "neutral40"];
  const colorProperty = variant !== "p" ? headingColor : paragraphColor;

  const words = text.split(" ");
  const getDecorationRange = (index: number) => {
    if (decorationRange) {
      return index >= decorationRange[0] && index <= decorationRange[1];
    }
  };

  const spaceRef = useRef<HTMLSpanElement>(null);
  const [spaceWidth, setSpaceWidth] = useState(0);

  useEffect(() => {
    if (spaceRef.current) {
      setSpaceWidth(spaceRef.current.getBoundingClientRect().width);
    }
  }, [windowWidth]);

  return (
    <Tag
      className={componentClassName || undefined}
      style={{ color: colorProperty }}
    >
      {variant !== "p" ? (
        <>
          {words.map((word, index) =>
            getDecorationRange(index) ? (
              <span key={index} className={styles.wrapper}>
                <span
                  className={cx(
                    styles.word,
                    styles[`decoration-${decoration}`],
                    "word"
                  )}
                  style={{
                    padding: `0 ${spaceWidth / 2}px`,
                    backgroundImage: `linear-gradient(${colors[decorationColor]}, ${colors[decorationColor]})`,
                    color: colors[decorationTextColor],
                  }}
                >
                  {word + spaces.ZWSP}
                </span>
              </span>
            ) : (
              <span key={index} className={styles.wrapper}>
                <span className={styles.word}> {word} </span>
              </span>
            )
          )}
          <span
            ref={spaceRef}
            style={{ position: "absolute", userSelect: "none" }}
          >
            {spaces.NBSP}
          </span>
        </>
      ) : (
        text
      )}
    </Tag>
  );
};
