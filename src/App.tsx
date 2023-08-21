import { useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Context } from "./Context";
import { Header, Nav } from "./components";
import { useScrollPosition, useStructure, useWindowSize } from "./hooks";
import { Home, Story } from "./pages";
import translations from "./translations.json";
import { Language } from "./types";

function App() {
  const [language, setLanguage] = useState<Language>("EN");
  const { structure, isLoading } = useStructure(language);
  const { windowHeight } = useWindowSize();
  const scrollPosition = useScrollPosition();

  const [path, setPath] = useState("");
  const handlePathChange = (path: string) => setPath(path);

  const sectionsRefs = useRef<any>([]);
  const [sectionsPositions, setSectionsPositions] = useState([]);

  useEffect(() => {
    setSectionsPositions(
      sectionsRefs.current.map((sectionRef: any) => {
        return sectionRef?.getBoundingClientRect().y;
      })
    );
  }, [isLoading, scrollPosition, path]);

  const sectionsVisibility = sectionsPositions.map((sectionPosition) => {
    return sectionPosition < windowHeight;
  });

  const handleLanguageSwitchClick = () => {
    setLanguage(language === "EN" ? "PL" : "EN");
  };
  const texts = translations[language];

  return (
    <Context.Provider
      value={{
        structure,
        isLoading,
        sectionsRefs,
        sectionsPositions,
        setSectionsPositions,
        sectionsVisibility,
        texts,
      }}
    >
      <Router>
        <Header>
          <Nav
            handlePathChange={handlePathChange}
            language={language}
            handleLanguageSwitchClick={handleLanguageSwitchClick}
          />
        </Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/stories/:name" element={<Story />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
        <footer style={{ minHeight: "100px" }} />
      </Router>
    </Context.Provider>
  );
}

export default App;
