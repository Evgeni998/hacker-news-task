import { FaLink, FaClock, FaReact, FaJenkins, FaKaggle } from "react-icons/fa";
import Tooltip from "./Tooltip";

const Card = ({ title, url, time, score, id, karma, image }) => {
  return (
    <div className="card-main">
      <h3>{title}</h3>
      <img className="image" src={image} />
      <div className="wrapper">
        <div className="card-content">
          <Tooltip text="Link">
            <FaLink className="icon" />
          </Tooltip>
          <a href={url}>Click here</a>
        </div>
        <div className="card-content">
          <Tooltip text="Timestamp">
            <FaClock className="icon" />
          </Tooltip>
          {time}
        </div>
        <div className="card-content">
          <Tooltip text="Score">
            <FaReact className="icon" />
          </Tooltip>
          {score}
        </div>
        <div className="card-content">
          <Tooltip text="Author">
            <FaJenkins className="icon" />
          </Tooltip>
          {id}
        </div>
        <div className="card-content">
          <Tooltip text="Karma score">
            <FaKaggle className="icon" />
          </Tooltip>
          {karma}
        </div>
      </div>
    </div>
  );
};
export default Card;
