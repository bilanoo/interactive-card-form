import { Grid } from "@mui/material";
import DetailsConfirmed from "./DetailsConfirmed";
import { useDisplayConfirmation } from "../stores/customerInputStore.store";
import CardForm from "./CardForm";

const FormController = () => {
  const isFormSubmitted = useDisplayConfirmation();

  const displayCardFormOrDetailsConfirmed = isFormSubmitted ? (
    <DetailsConfirmed />
  ) : (
    <CardForm />
  );

  return (
    <Grid
      container
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      direction={"column"}
    >
      {displayCardFormOrDetailsConfirmed}
    </Grid>
  );
};

export default FormController;
