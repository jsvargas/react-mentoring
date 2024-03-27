import MovieTile from "../components/MovieTile/movieTile";
import { useArgs } from "@storybook/preview-api";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/MovieTile",
  component: MovieTile,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    imageUrl: {
      control: "text",
    },
    movieName: {
      control: "text",
    },
    releaseYear: {
      control: "text",
    },
  },
};

export const LoadMovieTile = {
  name: "Load Movie tile",
  args: {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFlqWy8LijWq3DsFnqSIrafLoXKvdVg29Fgw4KopY1-UOWdBVL",
    movieName: "Spiderman",
    releaseYear: "2001",
    genres: ["Drama", "Action"],
    onSearch: function onSearch(search) {
      console.log(`Search ${search}`);
    },
  },
};
