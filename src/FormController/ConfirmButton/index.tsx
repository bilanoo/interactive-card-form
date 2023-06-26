import { Button } from "@mui/material";
import {
  useCardExpiryMonth,
  useCardExpiryYear,
  useCardHolderName,
  useCardNumber,
  useCardVerificationCode,
  useConfirmButtonStatus,
  useCustomerInputStore,
} from "../../stores/customerInputStore.store";
import { useEffect } from "react";

const ConfirmButton = () => {
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
  return (
    <>
      <Button
        variant="contained"
        sx={buttonStyle}
        disabled={IsConfirmButtonDisabled}
        color="primary"
      >
        Confirm
      </Button>
    </>
  );
};

export default ConfirmButton;
