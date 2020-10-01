import React from "react";
import { render, screen } from "@testing-library/react";
import UsersComponent from "./Users";
import { IUserModel } from "./Users.model";
import * as UserService from "./Users.service";

const fakeResponse: IUserModel[] = [
  {
    id: 1,
    name: "Bharat SSharma",
    phone: "111-111-1111",
    email: "abc@gmail.com",
  },
];

describe("Users component", () => {
  // test("renders list of users - query selector", () => {
  //   render(<UsersComponent />);

  //   wait(() => {
  //     expect(screen.queryAllByRole("listitem").length).toBe(1);
  //   });
  // });

  test("renders when users exists", async () => {
    jest.spyOn(UserService, "GetUsers").mockResolvedValue(fakeResponse);

    render(<UsersComponent />);

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems.length).toBe(1);
  });

  test("renders when no users exists", async () => {
    jest.spyOn(UserService, "GetUsers").mockResolvedValue([]);

    render(<UsersComponent />);

    const pEl = await screen.findByText("No users exists");
    expect(pEl).toBeDefined();
  });
});
