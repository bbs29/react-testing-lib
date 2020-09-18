import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import SearchComponent from "./Search";
import SearchAppComponent from "./Search-App";

//#region "Search component"
describe("Search component", () => {
  it("renders", () => {
    const handleChange = jest.fn();
    const { getByLabelText, getByRole } = render(
      <SearchComponent value="" onChange={handleChange}>
        Search for:
      </SearchComponent>
    );

    expect(getByLabelText(/Search for:/)).toBeInTheDocument();
    expect(getByRole("textbox")).toHaveTextContent("");
  });

  it("renders the prop value in textbox", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <SearchComponent value="bharat" onChange={handleChange}>
        Search for:
      </SearchComponent>
    );

    const txtBoxEl = getByRole("textbox");
    expect(txtBoxEl).toHaveValue("bharat");
  });

  it("triggers on change event props", () => {
    const handleChange = jest.fn();
    const { getByRole } = render(
      <SearchComponent value="" onChange={handleChange}>
        Search for:
      </SearchComponent>
    );

    const txtBoxEl = getByRole("textbox");
    fireEvent.change(txtBoxEl, { target: { value: "bharat" } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
});

//#endregion

//#region "Search app component"
describe("Search app component", () => {
  test("renders", () => {
    render(<SearchAppComponent />);
  });

  test("renders default information", () => {
    const { getByRole, getByText } = render(<SearchAppComponent />);

    const hEl = getByRole("heading");

    expect(hEl).toHaveTextContent("Search for users:");
    expect(getByText(/Searches for.../i)).toBeInTheDocument();
  });

  test("renders entered input term information", () => {
    const { getByText, getByRole } = render(<SearchAppComponent />);

    const txtElm = getByRole("textbox");
    fireEvent.change(txtElm, { target: { value: "bharat" } });

    expect(txtElm).toHaveValue("bharat");
    expect(getByText(/Searches for bharat/i)).toBeInTheDocument();
  });
});
//#endregion
