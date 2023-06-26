import {
  useCustomerInputStore,
  useCardVerificationCode,
} from "../../stores/customerInputStore.store";
import CustomerInput from "../CustomerInput";

const CardVerificationCode = () => {
  const cardVerificationCode = useCardVerificationCode();

  const actions = useCustomerInputStore((state) => state.actions);

  const setCardVerificationCode = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const typedCvc = event.currentTarget.value;

    const inputNumbersOnly = typedCvc.replace(/\D/g, "");

    actions.setCardVerificationCode(inputNumbersOnly);
  };
  const cvcStyles = {
    display: "flex",
    marginTop: "-40px",
    marginBottom: "auto",
    width: "27vh",
    marginLeft: "440px",
    marginRight: "auto",
  };
  return (
    <>
      <CustomerInput
        label="CVC"
        value={cardVerificationCode}
        maxCharacterLength={3}
        type="text"
        handleChange={setCardVerificationCode}
        styleToApply={cvcStyles}
      />
    </>
  );
};

export default CardVerificationCode;
