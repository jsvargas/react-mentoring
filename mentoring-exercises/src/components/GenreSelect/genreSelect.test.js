import { render, screen, act } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import GenreSelect from "./genreSelect";

describe("GenreSelect component tests", () => {
  const user = userEvent.setup();

  test("Should render all genders passed in props", () => {
    const mockGenres = ["comedy", "terror", "drama"];
    const currentlySelected = "comedy";
    const onSelect = jest.fn();
    render(
      <GenreSelect
        genres={mockGenres}
        currentlySelected={currentlySelected}
        onSelect={onSelect}
      />
    );
    expect(screen.getAllByRole("button").length).toBe(mockGenres.length);
    for (const mockGenre of mockGenres) {
      const genresButtons = screen.getByRole("button", { name: mockGenre });
      expect(genresButtons).toBeInTheDocument();
    }
  });

  test("Should highlight the selected genre passed in props", async () => {
    const mockGenres = ["comedy", "terror", "drama"];
    const currentlySelected = "comedy";
    const onSelect = jest.fn();
    render(
      <GenreSelect
        genres={mockGenres}
        currentlySelected={currentlySelected}
        onSelect={onSelect}
      />
    );
    const selectedGenreButton = screen.getByRole("button", {
      name: currentlySelected,
    });
    expect(selectedGenreButton).toHaveStyle(
      "color: white; background-color: DodgerBlue"
    );
  });
  test("Should call onChange with the genre clicked as args", async () => {
    const mockGenres = ["comedy", "terror", "drama"];
    const currentlySelected = "comedy";
    const onSelect = jest.fn();
    render(
      <GenreSelect
        genres={mockGenres}
        currentlySelected={currentlySelected}
        onSelect={onSelect}
      />
    );
    const otherButton = screen.getByRole("button", {
      name: mockGenres[1],
    });
    expect(otherButton).not.toHaveStyle(
      "color: white; background-color: DodgerBlue"
    );
    await user.click(otherButton);
    expect(onSelect).toHaveBeenCalledTimes(1);
  });
});
