import interactiveCardFront from "../images/bg-card-front.png";
import interactiveCardBack from "../images/bg-card-back.png";
import "./style.css";
import { Card, CardMedia, Typography } from "@mui/material";
import { useCardHolderName } from "../stores/customerInputStore.store";
const cardFrontStyles = {
  backgroundImage: `url(${interactiveCardFront})`,
  position: "relative",
  marginTop: "230px",
  overflow: "visible",
  marginLeft: "650px",
};
const CreditCard = () => {
  const cardHolderName = useCardHolderName();
  return (
    <>
      <Card
        className="interactive-front-card"
        sx={{
          borderRadius: "12px",
          width: "450px",
        }}
      >
        <CardMedia component="img" image={interactiveCardFront} />
        <div className="cardholder-name">{cardHolderName}</div>
      </Card>
      <Card
        className="interactive-card-back"
        sx={{
          borderRadius: "12px",
          width: "450px",
        }}
      >
        <CardMedia component="img" image={interactiveCardBack} />
      </Card>
    </>
  );
};

export default CreditCard;
