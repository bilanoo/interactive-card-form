import { TextField } from "@mui/material";

interface CustomInputProps {
  label: string;
  value: any;
  type: string;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  maxCharacterLength: number;
  styleToApply: any;
}
const CustomerInput = ({
  label,
  value,
  type,
  handleChange,
  maxCharacterLength,
  styleToApply,
}: CustomInputProps) => {
  return (
    <>
      <TextField
        required={true}
        className="card-holder-input-box"
        style={styleToApply}
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
