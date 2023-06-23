import { Paper } from "@mui/material";
import interactiveCardFront from "../images/bg-card-front.png";
import interactiveCardBack from "../images/bg-card-back.png";
import "./style.css";

const Card = () => {
  return (
    <div>
      <img src={interactiveCardFront} className="interactive-front-card" />
      <img src={interactiveCardBack} className="interactive-card-back" />
    </div>
  );
};

export default Card;
