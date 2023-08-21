import { useContext } from "react";
import { Context } from "../Context";
import { Page } from "../components";

export const Home = () => {
  const { structure, sectionsRefs, sectionsVisibility } = useContext(Context);
  const sections = structure.sections;

  return (
    <Page
      sections={sections}
      sectionsRefs={sectionsRefs}
      sectionsVisibility={sectionsVisibility}
    />
  );
};
