import { Grid, Typography } from "@mui/material";
import confirmedImg from "../../images/icon-complete.svg";
import ConfirmButton from "../ConfirmButton";
import { useCustomerInputStore } from "../../stores/customerInputStore.store";

const DetailsConfirmed = () => {
  const actions = useCustomerInputStore((state) => state.actions);
  const iconStyle = {
    marginTop: "300px",
  };
  const headerStyle = {
    marginTop: "20px",
  };
  const infoTextStyle = {
    marginTop: "10px",
    color: "grey",
  };

  const buttonStyle = {
    backgroundColor: "black",
    marginTop: "20px",
    minWidth: "340px",
    minHeight: "40px",
    "&:disabled": {
      backgroundColor: "grey",
    },
  };

  const handleContinueButtonClick = () => {
    actions.resetAllValues();
    actions.hasUserConfirmedValues(false);
  };
  return (
    <>
      <Grid item xs={6}>
        <img src={confirmedImg} style={iconStyle} />
      </Grid>
      <Grid item xs={6}>
        <Typography style={headerStyle} variant="h5">
          THANK YOU!
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <Typography style={infoTextStyle} variant="body1">
          We've added your card details
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <ConfirmButton
          textToDisplay="Continue"
          appliedStyles={buttonStyle}
          onClick={handleContinueButtonClick}
          disabledStatus={false}
        />
      </Grid>
    </>
  );
};

export default DetailsConfirmed;
