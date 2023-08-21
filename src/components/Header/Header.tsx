import { Container } from "../../components";
import { headerHeight } from "../../constants";
import { useScrollPosition, useWindowSize } from "../../hooks";
import styles from "./Header.module.scss";

type Props = {
  children: React.ReactNode;
};

export const Header: React.FC<Props> = ({ children }) => {
  const { windowHeight } = useWindowSize();
  const scrollPosition = useScrollPosition();
  const scrollHeight = document.body.scrollHeight + headerHeight;
  const scrollIndicator = scrollPosition / (scrollHeight - windowHeight) || 0;

  return (
    <header className={styles.header}>
      <Container size="large">{children}</Container>
      <div
        className={styles.scrollIndicator}
        style={{ transform: `scaleX(${scrollIndicator})` }}
      />
    </header>
  );
};
