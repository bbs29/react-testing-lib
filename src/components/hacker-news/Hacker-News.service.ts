const GET_TOP_STORIES_ID =
  "https://hacker-news.firebaseio.com/v0/topstories.json";
const GET_STORY_DETAILS = "https://hacker-news.firebaseio.com/v0/item/";

export const GetTopStories = async () => {
  return fetch(GET_TOP_STORIES_ID).then((response) => response.json());
};

export const GetStoryDetails = async (id: number) => {
  return fetch(`${GET_STORY_DETAILS}${id}.json`).then((response) =>
    response.json()
  );
};
