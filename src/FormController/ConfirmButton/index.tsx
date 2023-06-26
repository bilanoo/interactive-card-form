import { Button } from "@mui/material";

interface ConfirmButtonProps {
  appliedStyles: any;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  disabledStatus: boolean;
  textToDisplay: string;
}

const ConfirmButton = ({
  appliedStyles,
  onClick,
  disabledStatus,
  textToDisplay,
}: ConfirmButtonProps) => {
  return (
    <>
      <Button
        variant="contained"
        sx={appliedStyles}
        disabled={disabledStatus}
        color="primary"
        onClick={onClick}
      >
        {textToDisplay}
      </Button>
    </>
  );
};

export default ConfirmButton;
