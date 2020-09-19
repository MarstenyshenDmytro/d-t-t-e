import React from "react";

import { InputPropsType } from "./types";
import { InputContainer } from "./styledComponents";

const Input: React.FC<InputPropsType> = ({
  name,
  placeholder,
  handleControl,
  register,
  isFocus,
  validator,
}) => (
  <InputContainer
    name={name}
    onFocus={handleControl}
    onBlur={handleControl}
    ref={register(validator)}
    placeholder={`${!isFocus ? placeholder : ""} `}
  />
);

export default Input;
