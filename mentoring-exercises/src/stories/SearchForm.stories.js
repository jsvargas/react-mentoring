import SearchForm from "../components/SearchForm/searchForm";
import { useArgs } from "@storybook/preview-api";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/SearchForm",
  component: SearchForm,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    initialSearch: {
      control: "text",
    },
  },
};

export const InitialSearch = {
  name: "Initial Value",
  args: {
    initialSearch: "Hello",
    onSearch: function onSearch(search) {
      console.log(`Search ${search}`);
    },
  },
};
