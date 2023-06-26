import { TextField } from "@mui/material";
import {
  useCardHolderName,
  useCustomerInputStore,
} from "../../stores/customerInputStore.store";

const customerInputStyles = {
  display: "flex",
  marginTop: "320px",
  marginBottom: "auto",
  width: "45vh",

  marginLeft: "auto",
  marginRight: "auto",
};

interface CustomInputProps {
  label: string;
  value: any;
  type: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  maxCharacterLength: number;
}
const CustomerInput = ({
  label,
  value,
  type,
  handleChange,
  maxCharacterLength,
}: CustomInputProps) => {
  return (
    <>
      <TextField
        required={true}
        className="card-holder-input-box"
        style={customerInputStyles}
        type={type}
        InputProps={{ sx: { borderRadius: "10px", height: "40px" } }}
        label={label}
        value={value}
        onChange={handleChange}
        inputProps={{ maxLength: maxCharacterLength }}
      ></TextField>
    </>
  );
};

export default CustomerInput;
