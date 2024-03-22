import GenreSelect from "../components/GenreSelect/genreSelect";
import { useArgs } from "@storybook/preview-api";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/GenreSelect",
  component: GenreSelect,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    currentlySelected: {
      control: "select",
      options: ["action", "comedy", "terror"],
    },
  },
};

export const CurrentlySelected = {
  name: "Currently selected",
  args: {
    currentlySelected: "comedy",
  },
  render: function Render(args) {
    const genres = ["action", "comedy", "terror"];

    const [{ currentlySelected }, updateArgs] = useArgs();

    function onSelectGenre(newGenre) {
      updateArgs({ currentlySelected: newGenre });
    }

    return (
      <GenreSelect
        genres={genres}
        currentlySelected={currentlySelected}
        onSelect={onSelectGenre}
      />
    );
  },
};
