import { formatDate, validateStory } from "../helpers";
import { useData } from "../hooks";
import { Start, Stories, Story, WorkInProgress } from "../sections";
import { Language, Story as Props, Structure } from "../types";

export const useStructure = (language: Language) => {
  const { data: stories, isLoading } = useData("stories", "index", "desc");

  const structure: Structure = {
    name: "home",
    sections: [
      { name: "start", path: "/", element: <Start /> },
      { name: "about", path: "/", element: <WorkInProgress index={1} /> },
      {
        name: "stories",
        path: "/",
        element: <Stories />,
        subpages: stories.map((story: Props) => {
          const {
            index,
            name,
            imageSrc,
            imageAlt,
            imagePosition,
            author,
            date,
            heading,
            decorationRange,
            paragraph,
            chips,
            text,
          } = validateStory(story, language);

          return {
            index,
            name,
            path: `/stories/${name}`,
            sections: [
              {
                element: (
                  <Story
                    imageSrc={imageSrc}
                    imageAlt={imageAlt}
                    imagePosition={imagePosition}
                    author={author || "Undefined"}
                    date={formatDate(date, language) || "Undefined"}
                    heading={heading?.[language] || "Undefined"}
                    decorationRange={decorationRange?.[language]}
                    paragraph={paragraph?.[language] || "Undefined"}
                    chips={[`0${index + 1}`, ...(chips?.[language] || [])]}
                    text={text?.[language] || "Undefined"}
                  />
                ),
              },
            ],
          };
        }),
      },
      { name: "contact", path: "/", element: <WorkInProgress index={3} /> },
    ],
  };

  return { structure, isLoading };
};
