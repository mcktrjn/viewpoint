import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../Context";
import { Page } from "../components";

export const Story = () => {
  const { structure, sectionsRefs, sectionsVisibility } = useContext(Context);
  const { pathname: path } = useLocation();

  let subpages = structure.sections[2].subpages;
  if (!subpages) subpages = [];

  const index = subpages.findIndex((subpage) => {
    return subpage.path === path;
  });
  const sections = subpages[index]?.sections;

  return (
    <Page
      sections={sections}
      sectionsRefs={sectionsRefs}
      sectionsVisibility={sectionsVisibility}
    />
  );
};
