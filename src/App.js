import "./App.scss";
import React from "react";
import { filteredStoriesData, getUsers } from "./utils/api";
import { imageArr } from "./utils/images";
import Loading from "./components/Loading";
import Card from "./components/Card";

const App = () => {
  const [stories, setStories] = React.useState([]);
  const [users, setUsers] = React.useState([]);
  React.useEffect(async () => {
    const stories = await filteredStoriesData();
    stories.sort((a, b) => {
      return a.score - b.score;
    });
    const users = await getUsers(stories);
    setStories(stories);
    setUsers(users);
  }, []);
  if (users.length && stories.length) {
    return (
      <div className="App">
        <div className="card-container">
          {stories.map((story, index) => {
            const { title, url, time, score } = story;
            const { id, karma } = users[index];
            return (
              <Card
                key={index}
                title={title}
                url={url}
                time={time}
                score={score}
                id={id}
                karma={karma}
                image={imageArr[index]}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="loading">
        <Loading />;
      </div>
    );
  }
};

export default App;
