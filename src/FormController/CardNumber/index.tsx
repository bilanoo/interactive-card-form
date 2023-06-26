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
    let inputNumbersOnly = digitTyped.replace(/\D/g, ""); // Get only digits

    if (inputNumbersOnly.length > 16) {
      //If entered value has a length greater than 16 then take only the first 16 digits
      inputNumbersOnly = inputNumbersOnly.substr(0, 16);
    }

    // Get nd array of 4 digits per an element EX: ["4242", "4242", ...]
    const splits = inputNumbersOnly.match(/.{1,4}/g);

    let spacedNumber = "";
    if (splits) {
      spacedNumber = splits.join(" "); // Join all the splits with an empty space
    }

    actions.setCardNumber(spacedNumber);
  }

  const cardNumberStyles = {
    display: "flex",
    marginTop: "30px",
    marginBottom: "auto",
    width: "45vh",

    marginLeft: "auto",
    marginRight: "auto",
  };
  return (
    <>
      <CustomerInput
        label={"CARD NUMBER"}
        handleChange={displayCardNumber}
        value={cardNumber}
        type={"text"}
        maxCharacterLength={19}
        styleToApply={cardNumberStyles}
      />
    </>
  );
};

export default CardNumber;
