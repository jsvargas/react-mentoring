import { render, screen, act } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter component tests", () => {
  const user = userEvent.setup();

  test("Should render initial value provided in props", () => {
    render(<Counter initialValue={1234} />);
    expect(screen.getByText("1234")).toBeInTheDocument();
  });
  test("Should decrement value on decrement button click", async () => {
    render(<Counter initialValue={1234} />);
    const decrementButton = screen.getByRole("button", { name: "-" });
    await act(() => user.click(decrementButton));
    expect(screen.getByText("1233")).toBeInTheDocument();
  });
  test("Should increment value on increment button click", async () => {
    render(<Counter initialValue={1234} />);
    const incrementButton = screen.getByRole("button", { name: "+" });
    await act(() => user.click(incrementButton));
    expect(screen.getByText("1235")).toBeInTheDocument();
  });
});
