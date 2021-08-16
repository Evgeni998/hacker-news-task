const getStory = async (id) => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`
  );
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  const story = await res.json();
  return story;
};

const getStories = async () => {
  const res = await fetch(
    "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
  );
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  const story = await res.json();
  return story;
};

const getUser = async (userId) => {
  const res = await fetch(
    `https://hacker-news.firebaseio.com/v0/user/${userId}.json?print=pretty`
  );
  if (!res.ok) {
    const message = `An error has occured: ${res.status}`;
    throw new Error(message);
  }
  const user = await res.json();
  return user;
};

export const getUsers = async (stories) => {
  let usersPromise = stories.map((story) => getUser(story.by));
  return Promise.all(usersPromise);
};

export const filteredStoriesData = async () => {
  const stories = await getStories();
  const shuffled = stories.sort(() => 0.5 - Math.random());
  const slicedStories = shuffled.slice(0, 10);
  const map = slicedStories.map((story) => getStory(story));
  return Promise.all(map);
};
