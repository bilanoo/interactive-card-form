import { Grid } from "@mui/material";

const FormController = () => {
  return (
    <Grid
      container
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      direction={"column"}
    >
      <Grid item xs={6}></Grid>
      <Grid item xs={6}></Grid>
    </Grid>
  );
};

export default FormController;
