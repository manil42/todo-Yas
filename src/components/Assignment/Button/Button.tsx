import React from "react";

type ButtonProps = {
  label: string;
  isError?: boolean;
  isSuccess?: boolean;
  isBackbtn?: boolean;
  handleClick?: () => void;
};

const Button = ({
  label,
  isError,
  isSuccess,
  isBackbtn,
  handleClick,
}: ButtonProps) => {
  return (
    <>
      <button
        className={`button-contaner 
    ${isError === true ? "button-error-color" : "false"}
    ${isSuccess === true ? "button-success-color" : "false"}
    ${isBackbtn === true ? "button-back-color" : "false"}
     `}
        onClick={handleClick}
      >
        {label}
      </button>
    </>
  );
};
export default Button;
