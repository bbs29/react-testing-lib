import React from "react";
import { render, fireEvent } from "@testing-library/react";
import StateAndEventComponent from "./State-Event";

describe("Component with state and user events", () => {
  test("renders", () => {
    const onCounterBtnClick = jest.fn();
    render(<StateAndEventComponent onCounterBtnClick={onCounterBtnClick} />);
  });

  test("updates counter when clicked", () => {
    const onCounterBtnClick = jest.fn();
    const { getByRole, getByTestId } = render(
      <StateAndEventComponent onCounterBtnClick={onCounterBtnClick} />
    );
    const counterElm = getByTestId("counter");
    const btnElem = getByRole("button");

    expect(counterElm).toHaveTextContent("you clicked 0 times.");
    expect(onCounterBtnClick).toHaveBeenCalledTimes(0);

    fireEvent.click(btnElem);
    expect(counterElm).toHaveTextContent("you clicked 1 times.");
    expect(onCounterBtnClick).toHaveBeenCalledTimes(1);

    fireEvent.click(btnElem);
    expect(counterElm).toHaveTextContent("you clicked 2 times.");
    expect(onCounterBtnClick).toHaveBeenCalledTimes(2);
  });
});
