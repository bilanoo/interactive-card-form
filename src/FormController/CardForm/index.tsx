import { Grid } from "@mui/material";
import CardHolderName from "../CardHolderName";
import CardNumber from "../CardNumber";
import ExpiryDate from "../ExpiryDate";
import CardVerificationCode from "../CardVerificationCode";
import ConfirmButton from "../ConfirmButton";

const CardForm = () => {
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
        <ConfirmButton />
      </Grid>
    </>
  );
};

export default CardForm;
