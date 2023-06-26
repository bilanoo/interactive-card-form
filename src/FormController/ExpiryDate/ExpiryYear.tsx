import {
  useCardExpiryYear,
  useCustomerInputStore,
} from "../../stores/customerInputStore.store";
import CustomerInput from "../CustomerInput";

const ExpiryYear = () => {
  const cardExpiryYear = useCardExpiryYear();

  const actions = useCustomerInputStore((state) => state.actions);

  const handleExpiryYearChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const typedYear = event.currentTarget.value;
    const inputNumbersOnly = typedYear.replace(/\D/g, "");

    actions.setExpiryYear(inputNumbersOnly);
  };

  const monthStyles = {
    display: "flex",
    marginTop: "-40px",
    marginBottom: "auto",
    width: "8vh",
    marginLeft: "350px",
    marginRight: "auto",
  };

  return (
    <>
      <CustomerInput
        label="YY"
        value={cardExpiryYear}
        type="text"
        maxCharacterLength={2}
        handleChange={handleExpiryYearChange}
        styleToApply={monthStyles}
      />
    </>
  );
};

export default ExpiryYear;
