import React, { useState } from "react";
import "./Hacker-News.scss";
import { GetStoryDetails, GetTopStories } from "./Hacker-News.service";

type IProps = {};

type IStoryResponseModel = {
  title: string;
  url: string;
  id: number;
};

const HackerNewsTopStoriesComponent = (props: IProps) => {
  const [stories, setStories] = useState<IStoryResponseModel[]>([]);

  const loadTopStories = async () => {
    let storyIdLst: number[] = await GetTopStories();
    storyIdLst = storyIdLst.slice(0, 10);

    Promise.allSettled(storyIdLst.map((id: number) => GetStoryDetails(id)))
      .then((results: any) => {
        const _result: any[] = results.filter(
          (result: any) => result.status === "fulfilled"
        );

        const stories: IStoryResponseModel[] = _result.map((r: any) => {
          return {
            id: r.value.id,
            title: r.value.title,
            url: r.value.url,
          };
        });

        setStories(stories);
      })
      .catch(() => {
        console.log("rejected");
      });
  };

  return (
    <div data-testid="hacker-news-stories-component" className="container">
      <div>
        <button type="button" onClick={loadTopStories}>
          {stories.length ? "Refresh stories" : "Load stories"}
        </button>
      </div>
      {stories.length ? (
        <div className="results-container">
          <ul>
            {stories.map((story: IStoryResponseModel, index: number) => {
              return (
                <li key={index} data-id={story.id}>
                  <a href={story.url}>{story.title}</a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default HackerNewsTopStoriesComponent;
