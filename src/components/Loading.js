import React from "react";

const styles = {
  content: {
    fontSize: "35px",
    position: "absolute",
    left: "0",
    right: "0",
    marginTop: "20px",
    textAlign: "center",
  },
};

const Loading = ({ speed = 300, text = "Loading" }) => {
  const [content, setContent] = React.useState(text);
  React.useEffect(() => {
    const id = window.setInterval(() => {
      content === text + "..."
        ? setContent(text)
        : setContent((content) => content + ".");
    }, speed);
    return () => window.clearInterval(id);
  }, [content]);
  return <p style={styles.content}>{content}</p>;
};

export default Loading;
