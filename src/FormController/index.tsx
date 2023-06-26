import { Grid } from "@mui/material";
import CardHolderName from "./CardHolderName";
import CardNumber from "./CardNumber";
import ExpiryDate from "./ExpiryDate";

const FormController = () => {
  return (
    <Grid
      container
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      direction={"column"}
    >
      <Grid item xs={6}>
        <CardHolderName />
      </Grid>
      <Grid item xs={6}>
        <CardNumber />
      </Grid>
      <Grid item xs={6}>
        <ExpiryDate />
      </Grid>
    </Grid>
  );
};

export default FormController;
