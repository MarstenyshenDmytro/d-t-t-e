import React from "react";

import { TextareaPropsType } from "./types";
import { TextareaContainer } from "./styledComponents";

const Textarea: React.FC<TextareaPropsType> = ({
  name,
  handleControl,
  register,
  validator,
  isFocus,
  placeholder,
}) => (
  <TextareaContainer
    rows={10}
    name={name}
    onFocus={handleControl}
    onBlur={handleControl}
    ref={register(validator)}
    placeholder={`${!isFocus ? placeholder : ""} `}
  />
);

export default Textarea;
