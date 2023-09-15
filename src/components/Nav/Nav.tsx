import cx from "classnames";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../../Context";
import { Chip, Icon, Switch } from "../../components";
import { headerHeight, languages } from "../../constants";
import { modifyText, scrollToSection } from "../../helpers";
import { useWindowSize } from "../../hooks";
import { Language } from "../../types";
import styles from "./Nav.module.scss";

type Props = {
  handlePathChange: (path: string) => void;
  language: Language;
  handleLanguageSwitchClick: () => void;
};

export const Nav: React.FC<Props> = ({
  handlePathChange,
  language,
  handleLanguageSwitchClick,
}) => {
  const {
    structure,
    isLoading,
    sectionsRefs,
    sectionsPositions,
    setSectionsPositions,
    texts,
  } = useContext(Context);
  const { windowWidth, windowHeight } = useWindowSize();
  const { pathname: path, hash } = useLocation();

  const sectionsActivity = sectionsPositions.map((sectionPosition) => {
    return sectionPosition <= headerHeight;
  });
  const activeSection = sectionsActivity.lastIndexOf(true);
  const [isNavActive, setIsNavActive] = useState(false);

  useEffect(() => window.scrollTo(0, 0), []);

  useEffect(() => {
    if (hash && !isLoading) {
      const index = structure.sections.findIndex((section) => {
        return section.name === hash.replace("#", "");
      });
      scrollToSection(sectionsRefs, index);
    }
  }, [isLoading]);

  const handleLinkClick = (link: string, index = 0) => {
    if (link !== path) setSectionsPositions([]);
    handlePathChange(link);
    setTimeout(() => scrollToSection(sectionsRefs, index));
    setIsNavActive(false);
  };

  const body = document.body;
  body.classList.toggle("active", isNavActive);
  if (body.classList.length === 0) body.removeAttribute("class");

  return (
    <nav className={cx(styles.nav, { [styles.active]: isNavActive })}>
      <Link
        to={"/"}
        className={styles.logotype}
        onClick={() => handleLinkClick("/")}
      >
        <span className={styles.firstLetter}>v</span>iew<strong>point</strong>
      </Link>
      <ul
        className={styles.list}
        style={
          windowWidth <= 768
            ? { height: windowHeight - headerHeight + 2 }
            : { height: "auto" }
        }
      >
        {structure.sections.map((section, index) => (
          <li key={index} className={styles.listItem}>
            <Link
              to={`${section.path}#${section.name}`}
              className={cx(styles.link, {
                [styles.active]: section.path === path && index === activeSection,
              })}
              onClick={() => handleLinkClick(section.path, index)}
            >
              {texts.nav[section.name]}
              {section.subpages && (
                <Icon
                  className={styles.icon}
                  color={section.path === path ? "primary10" : "primary40"}
                  icon="arrowDropDown"
                />
              )}
            </Link>
            {section.subpages && (
              <ul className={styles.nestedList}>
                {section.subpages.map((subpage) => (
                  <li key={subpage.index} className={styles.nestedListItem}>
                    <Link
                      to={subpage.path}
                      className={styles.nestedLink}
                      onClick={() => handleLinkClick(subpage.path)}
                    >
                      <div className={styles.nestedText}>
                        <Chip
                          width={24}
                          color={subpage.path === path ? "white" : "primary40"}
                          fillColor={subpage.path === path ? "primary40" : "primary90"}
                          text={`0${subpage.index + 1}`}
                        />
                        {modifyText(subpage.sections[0].element.props.heading, 24)}
                      </div>
                      <Icon
                        color={subpage.path === path ? "neutral90" : "primary40"}
                        icon="northEast"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        <LanguageSwitch
          language={language}
          handleLanguageSwitchClick={handleLanguageSwitchClick}
        />
        <li className={cx(styles.listItem, styles.border)} />
        <DownloadButton />
      </ul>
      <button
        className={styles.hamburger}
        onClick={() => setIsNavActive(!isNavActive)}
        aria-label="hamburger"
      >
        <div className={styles.meat} />
      </button>
    </nav>
  );
}; // prettier-ignore

type LanguageSwitchProps = Omit<Props, "handlePathChange">;

const LanguageSwitch: React.FC<LanguageSwitchProps> = ({
  language,
  handleLanguageSwitchClick,
}) => {
  const { texts } = useContext(Context);

  return (
    <li className={cx(styles.listItem, styles.languageSwitch)}>
      <div
        className={styles.wrapper}
        onClick={() => handleLanguageSwitchClick()}
      >
        <div className={styles.text}>
          <Chip
            className={styles.chip}
            width={24}
            fillColor="primary90"
            icon="translate"
          />
          {`${texts.nav.selectLanguage}:`}
        </div>
        <Switch values={languages} activeValue={language} />
      </div>
    </li>
  );
};

const DownloadButton = () => {
  const { texts } = useContext(Context);

  return (
    <li className={cx(styles.listItem, styles.downloadButton)}>
      <button className={styles.button} disabled>
        {texts.nav.downloadCV}
      </button>
    </li>
  );
};
