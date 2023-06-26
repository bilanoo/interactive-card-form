import { isValueValid } from "../../helpers";
import {
  useCardExpiryMonth,
  useCardExpiryYear,
  useCustomerInputStore,
} from "../../stores/customerInputStore.store";
import CustomerInput from "../CustomerInput";
import ExpiryMonth from "./ExpiryMonth";
import ExpiryYear from "./ExpiryYear";

const ExpiryDate = () => {
  return (
    <>
      <ExpiryMonth />
      <ExpiryYear />
    </>
  );
};

export default ExpiryDate;
