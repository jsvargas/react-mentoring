import MovieDetails from "../components/MovieDetails/movieDetails";
import { useArgs } from "@storybook/preview-api";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Components/MovieDetails",
  component: MovieDetails,
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
    rating: {
      control: "text",
    },
    duration: {
      control: "text",
    },
    description: {
      control: "text",
    },
  },
};

export const LoadMovieDetails = {
  name: "Load Movie Details",
  args: {
    imageUrl:
      "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTFlqWy8LijWq3DsFnqSIrafLoXKvdVg29Fgw4KopY1-UOWdBVL",
    movieName: "Spiderman",
    releaseYear: "2001",
    rating: "E",
    duration: "50 min",
    description: "A good spiderman movie",
    genres: ["Drama", "Action"],
    onSearch: function onSearch(search) {
      console.log(`Search ${search}`);
    },
  },
};
