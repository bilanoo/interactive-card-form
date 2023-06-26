import { Grid } from "@mui/material";
import CardHolderName from "../CardHolderName";
import CardNumber from "../CardNumber";
import ExpiryDate from "../ExpiryDate";
import CardVerificationCode from "../CardVerificationCode";
import ConfirmButton from "../ConfirmButton";
import { useEffect } from "react";
import {
  useCardExpiryMonth,
  useCardExpiryYear,
  useCardHolderName,
  useCardNumber,
  useCardVerificationCode,
  useConfirmButtonStatus,
  useCustomerInputStore,
} from "../../stores/customerInputStore.store";

const CardForm = () => {
  const IsConfirmButtonDisabled = useConfirmButtonStatus();
  const cardHolderName = useCardHolderName();
  const cardNumber = useCardNumber();
  const expiryMonth = useCardExpiryMonth();
  const expiryYear = useCardExpiryYear();
  const cardVerificationCode = useCardVerificationCode();
  const actions = useCustomerInputStore((state) => state.actions);

  const buttonStyle = {
    backgroundColor: "black",
    marginTop: "20px",
    minWidth: "440px",
    minHeight: "40px",
    "&:disabled": {
      backgroundColor: "grey",
    },
  };

  useEffect(() => {
    actions.checkAllFieldsAreFilled();
  }, [
    cardHolderName,
    cardNumber,
    expiryMonth,
    expiryYear,
    cardVerificationCode,
  ]);
  function handleClick(
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void {
    actions.hasUserConfirmedValues(true);
  }
  return (
    <>
      <Grid item xs={6}>
        <CardHolderName />
      </Grid>
      <Grid item xs={6}>
        <CardNumber />
      </Grid>
      <Grid item xs={6}>
        <ExpiryDate />
      </Grid>
      <Grid item xs={6}>
        <CardVerificationCode />
      </Grid>
      <Grid item xs={6}>
        <ConfirmButton
          appliedStyles={buttonStyle}
          textToDisplay="Confirm"
          onClick={handleClick}
          disabledStatus={IsConfirmButtonDisabled}
        />
      </Grid>
    </>
  );
};

export default CardForm;
