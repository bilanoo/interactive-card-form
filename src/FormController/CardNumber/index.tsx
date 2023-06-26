import { isValueValid } from "../../helpers";
import {
  useCardHolderName,
  useCardNumber,
  useCustomerInputStore,
} from "../../stores/customerInputStore.store";
import CustomerInput from "../CustomerInput";

const CardNumber = () => {
  const cardNumber = useCardNumber();
  const cardHolderName = useCardHolderName();
  const actions = useCustomerInputStore((state) => state.actions);

  function displayCardNumber(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const digitTyped = event.currentTarget.value;
    const onlyNumericalValues = /^(\d{0,4}(?:\s?\d{0,4})*)$/;

    if (
      cardHolderName.length <= 19 &&
      isValueValid(digitTyped, onlyNumericalValues)
    ) {
      actions.setCardNumber(digitTyped);
    }
  }
  return (
    <>
      <CustomerInput
        label={"CARD NUMBER"}
        handleChange={displayCardNumber}
        value={cardNumber}
        type={"number"}
        maxCharacterLength={19}
      />
    </>
  );
};

export default CardNumber;
