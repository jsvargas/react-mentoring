import { render, screen } from "@testing-library/react";
import MovieDetails from "./movieDetails";

describe("Movie Details component tests", () => {
  test("Should render initial value provided in props", () => {
    render(
      <MovieDetails
        imageUrl="image.jpg"
        movieName="spiderman"
        releaseYear="2001"
        rating="E"
        duration="50 min"
        description="A great movie"
      />
    );
    expect(screen.getByText("spiderman")).toBeInTheDocument();
    expect(screen.getByText("2001")).toBeInTheDocument();
    expect(screen.getByText("E")).toBeInTheDocument();
    expect(screen.getByText("50 min")).toBeInTheDocument();
    expect(screen.getByText("A great movie")).toBeInTheDocument();
  });
});
