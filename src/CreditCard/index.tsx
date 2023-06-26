import interactiveCardFront from "../images/bg-card-front.png";
import interactiveCardBack from "../images/bg-card-back.png";
import "./style.css";
import { Card, CardMedia, Typography } from "@mui/material";
import CircleIcon from "@mui/icons-material/Circle";
import {
  useCardExpiryMonth,
  useCardExpiryYear,
  useCardHolderName,
  useCardNumber,
  useCardVerificationCode,
} from "../stores/customerInputStore.store";
const cardFrontStyles = {
  backgroundImage: `url(${interactiveCardFront})`,
  position: "relative",
  marginTop: "230px",
  overflow: "visible",
  marginLeft: "650px",
};
const CreditCard = () => {
  const cardHolderName = useCardHolderName();
  const cardNumber = useCardNumber();
  const expiryMonth = useCardExpiryMonth();
  const expiryYear = useCardExpiryYear();
  const cardVerificationCode = useCardVerificationCode();
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
        <div className="filled-circle"></div>
        <div className="unfilled-circle"></div>
        <div className="cardholder-name">{cardHolderName}</div>
        <div className="card-number">{cardNumber}</div>
        <div className="expiry-month">{expiryMonth}</div>
        <div className="expiry-dash">/</div>
        <div className="expiry-year">{expiryYear}</div>
      </Card>
      <Card
        className="interactive-card-back"
        sx={{
          borderRadius: "12px",
          width: "450px",
        }}
      >
        <CardMedia component="img" image={interactiveCardBack} />
        <div className="card-verification-code">{cardVerificationCode}</div>
      </Card>
    </>
  );
};

export default CreditCard;
