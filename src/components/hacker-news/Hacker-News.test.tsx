import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import HackerNewsTopStoriesComponent from "./Hacker-News";
import * as HackerNewsService from "./Hacker-News.service";

describe("Hacker news top stories component", () => {
  it("renders", () => {
    render(<HackerNewsTopStoriesComponent />);

    const componentEl: any = screen.getByTestId(
      "hacker-news-stories-component"
    );

    expect(componentEl).toBeInTheDocument();
  });

  it("renders with no stories", () => {
    render(<HackerNewsTopStoriesComponent />);

    const btnEl: any = screen.getByText(/load stories/i);

    expect(btnEl).toBeInTheDocument();

    const storyLst: any = screen.queryByRole("list");
    expect(storyLst).toBeNull();
  });

  it("renders with  stories", async () => {
    const fakeStoryIdLst: number[] = [
      24652182,
      24651639,
      24652842,
      24637121,
      24649786,
    ];
    const fakeStory = [
      {
        id: 24652182,
        title: "My YC app: Dropbox - Throw away your USB drive",
        url: "http://www.getdropbox.com/u/2/screencast.html",
      },
    ];

    // Spy on Get story Id API
    jest
      .spyOn(HackerNewsService, "GetTopStories")
      .mockResolvedValueOnce(fakeStoryIdLst);

    // Spy on Get story details API
    jest
      .spyOn(HackerNewsService, "GetStoryDetails")
      .mockResolvedValue(fakeStory);

    render(<HackerNewsTopStoriesComponent />);

    const btnEl = screen.getByRole("button");

    fireEvent.click(btnEl);

    const storyItems = await screen.findAllByRole("listitem");

    expect(storyItems.length).toEqual(5);

    const refreshBtn = await screen.findByText(/refresh stories/i);
    expect(refreshBtn).toBeDefined();
  });
});
