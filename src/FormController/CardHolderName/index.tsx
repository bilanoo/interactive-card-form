import { isValueValid } from "../../helpers";
import {
  useCardHolderName,
  useCustomerInputStore,
} from "../../stores/customerInputStore.store";
import CustomerInput from "../CustomerInput";

const CardHolderName = () => {
  const cardHolderName = useCardHolderName();

  const actions = useCustomerInputStore((state) => state.actions);

  function displayCardHolderName(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const typedValue = event.currentTarget.value;
    const onlyAlphabeticalValues = /^[A-Za-z\s]*$/;

    if (
      cardHolderName.length <= 20 &&
      isValueValid(typedValue, onlyAlphabeticalValues)
    ) {
      actions.setCardHolderName(typedValue);
    }
  }

  return (
    <>
      <CustomerInput
        label={"CARDHOLDER NAME"}
        handleChange={displayCardHolderName}
        value={cardHolderName}
        type={"text"}
        maxCharacterLength={20}
      />
    </>
  );
};

export default CardHolderName;
