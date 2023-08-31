export const scrollToSection = (sectionsRefs: any, index: number) => {
  const bodyPosition = document.body.getBoundingClientRect().y;
  // const sectionPosition = sectionsPositions[index]; // TODO: find out why it doesn't work
  const sectionPosition = sectionsRefs.current[index].getBoundingClientRect().y;
  const distance = Math.ceil(sectionPosition - bodyPosition);
  window.scrollTo({ top: distance, behavior: "smooth" });
};
