import { Grid, Typography } from "@mui/material";
import confirmedImg from "../../images/icon-complete.svg";

const DetailsConfirmed = () => {
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
    </>
  );
};

export default DetailsConfirmed;
