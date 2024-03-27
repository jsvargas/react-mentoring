import { render, screen, act } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import SortControl from "./sortControl";

describe("SortControl component tests", () => {
  const user = userEvent.setup();

  test("Should render initial value provided in props", () => {
    const changeSelected = jest.fn();
    render(
      <SortControl selected="releaseDate" changeSelected={changeSelected} />
    );
    expect(screen.getByText("Release date")).toBeInTheDocument();
    expect(screen.getByText("Title")).toBeInTheDocument();
  });
  test("Should have the initial value selected", async () => {
    const changeSelected = jest.fn();
    render(<SortControl selected="title" changeSelected={changeSelected} />);
    expect(screen.getByText("Title").selected).toBeTruthy();
    expect(screen.getByText("Release date").selected).toBeFalsy();
  });
  test("Should call callback function on new selection", async () => {
    const changeSelected = jest.fn();
    render(<SortControl selected="title" changeSelected={changeSelected} />);
    expect(screen.getByText("Title").selected).toBeTruthy();
    expect(screen.getByText("Release date").selected).toBeFalsy();
    await act(() =>
      user.selectOptions(screen.getByTestId("select"), "releaseDate")
    );
    expect(changeSelected).toHaveBeenCalledWith("releaseDate");
  });
});
