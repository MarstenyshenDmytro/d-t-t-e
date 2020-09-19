import React from "react";

import { ButtonPropsType } from "./types";

import { ButtonContainer } from "./styledComponents";

const Button: React.FC<ButtonPropsType> = ({ label, onClick, type }) => (
  <ButtonContainer
    onClick={onClick ? onClick : () => {}}
    type={type || "button"}
  >
    {label}
  </ButtonContainer>
);

export default Button;
