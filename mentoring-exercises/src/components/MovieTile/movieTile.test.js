import { render, screen, act } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import MovieTile from "./movieTile";

describe("MovieTile component tests", () => {
  const user = userEvent.setup();

  test("Should render initial value provided in props", () => {
    const handleClick = jest.fn();
    render(
      <MovieTile
        imageUrl="image.jpg"
        movieName="spiderman"
        releaseYear="2001"
        genres={["Drama", "Action"]}
        handleClick={handleClick}
      />
    );
    expect(screen.getByText("spiderman")).toBeInTheDocument();
    expect(screen.getByAltText("spiderman")).toBeInTheDocument();
    expect(screen.getByText("2001")).toBeInTheDocument();
    expect(screen.getByText("Drama")).toBeInTheDocument();
    expect(screen.getByText("Action")).toBeInTheDocument();
  });
  test("Should show popup on context menu click", async () => {
    const handleClick = jest.fn();
    render(
      <MovieTile
        imageUrl="image.jpg"
        movieName="spiderman"
        releaseYear="2001"
        genres={["Drama", "Action"]}
        handleClick={handleClick}
      />
    );
    const contextMenuButton = screen.getByRole("button");
    expect(screen.queryByText("Edit")).not.toBeInTheDocument();
    await act(() => user.click(contextMenuButton));
    expect(screen.getByText("Edit")).toBeInTheDocument();
    expect(screen.getByText("Delete")).toBeInTheDocument();
  });
  test("Should call callback function on click", async () => {
    const handleClick = jest.fn();
    render(
      <MovieTile
        imageUrl="image.jpg"
        movieName="spiderman"
        releaseYear="2001"
        genres={["Drama", "Action"]}
        handleClick={handleClick}
      />
    );
    const movieTile = screen.getByTestId("movieTile");
    await act(() => user.click(movieTile));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
