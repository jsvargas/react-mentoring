import { render, screen, act } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import SearchForm from "./searchForm";

describe("SearchForm component tests", () => {
  const user = userEvent.setup();

  test("Should render initial value provided in props", () => {
    const onSearch = jest.fn();
    const initialSearch = "fakeSearch";
    render(<SearchForm initialSearch={initialSearch} onSearch={onSearch} />);
    const textInput = screen.getByDisplayValue(initialSearch);
    expect(textInput).toBeInTheDocument();
  });
  test("Should call onSearch function after typing and clicking on button", async () => {
    const onSearch = jest.fn();
    const initialSearch = "Hello";
    render(<SearchForm initialSearch={initialSearch} onSearch={onSearch} />);
    const textInput = screen.getByDisplayValue(initialSearch);
    await act(() => user.type(textInput, " Juan"));
    await act(() => user.click(screen.getByRole("button", { name: "Search" })));
    expect(onSearch).toHaveBeenCalledTimes(2);
  });
  test("Should call onSearch function after typing enter", async () => {
    const onSearch = jest.fn();
    const initialSearch = "Hello Juan";
    render(<SearchForm initialSearch={initialSearch} onSearch={onSearch} />);
    const textInput = screen.getByDisplayValue(initialSearch);
    await act(() => user.type(textInput, " again{enter}"));
    expect(onSearch).toHaveBeenCalledTimes(2);
  });
});
