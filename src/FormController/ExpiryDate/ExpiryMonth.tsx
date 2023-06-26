import {
  useCardExpiryMonth,
  useCustomerInputStore,
} from "../../stores/customerInputStore.store";
import CustomerInput from "../CustomerInput";

const ExpiryMonth = () => {
  const cardExpirymonth = useCardExpiryMonth();

  const actions = useCustomerInputStore((state) => state.actions);

  const handleExpiryMonthChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const typedMonth = event.currentTarget.value;
    const inputNumbersOnly = typedMonth.replace(/\D/g, "");

    actions.setExpiryMonth(inputNumbersOnly);
  };

  const monthStyles = {
    display: "flex",
    marginTop: "30px",
    marginBottom: "auto",
    width: "8vh",
    marginLeft: "260px",
    marginRight: "auto",
  };

  return (
    <>
      <CustomerInput
        label="MM"
        value={cardExpirymonth}
        type="text"
        maxCharacterLength={2}
        handleChange={handleExpiryMonthChange}
        styleToApply={monthStyles}
      />
    </>
  );
};

export default ExpiryMonth;
