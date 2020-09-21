const GET_USERS_API = "https://jsonplaceholder.typicode.com/users";

export let GetUsers = async () => {
  return await fetch(GET_USERS_API)
    .then((response) => response.json())
    .then((json) => json);
};
