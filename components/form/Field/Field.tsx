import React, { useState } from "react";

import { FieldPropsType } from "./types";
import {
  FieldContainer,
  Label,
  FieldContent,
  ErrorMessage,
} from "./styledComponent";

const Field: React.FC<FieldPropsType> = ({
  name,
  label,
  placeholder,
  errors,
  register,
  component: Component,
  validator,
}) => {
  const error = errors[name];
  const [isFocus, setIsFocus] = useState<boolean>(false);

  const handleControl: React.ReactEventHandler = () => {
    setIsFocus(!isFocus);
  };

  return (
    <FieldContainer>
      {label && <Label>{label}</Label>}
      <FieldContent isError={error && !isFocus}>
        <Component
          name={name}
          placeholder={placeholder}
          handleControl={handleControl}
          register={register}
          isFocus={isFocus}
          validator={validator}
        />
      </FieldContent>
      <ErrorMessage>{error && !isFocus && error.message}</ErrorMessage>
    </FieldContainer>
  );
};

export default Field;
