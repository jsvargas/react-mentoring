import SortControl from "../components/SortControl/sortControl";
import { useArgs } from "@storybook/preview-api";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/SortControl",
  component: SortControl,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    selected: {
      control: "text",
    },
  },
};

export const LoadSortControl = {
  args: {
    selected: "releaseDate",
  },
  render: function Render(args) {
    const [{ selected }, updateArgs] = useArgs();
    const changeSelected = function (newSelected) {
      updateArgs({ selected: newSelected });
    };
    return <SortControl {...args} changeSelected={changeSelected} />;
  },
};
