import React from "react";
import { render } from "@testing-library/react";
import PropsComponent from "./Props";

describe("Component with props", () => {
  test("renders without a name", () => {
    const { getByText } = render(<PropsComponent />);
    const el = getByText(/hey stranger/i);
    expect(el).toBeInTheDocument();
  });

  test("renders with a name", () => {
    const { getByText } = render(<PropsComponent name="bharat" />);
    const el = getByText(/hello, bharat/i);
    expect(el).toBeInTheDocument();
  });
});
