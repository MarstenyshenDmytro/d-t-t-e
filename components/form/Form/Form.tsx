import React from "react";
import { useForm } from "react-hook-form";

import { FormValuesType } from "../../../containers/NewPost/types";
import { FormPropsType } from "./types";
import { FormContainer } from "./styledComponents";

const Form: React.FC<FormPropsType> = ({ children, onSubmit }) => {
  const { register, errors, handleSubmit } = useForm<FormValuesType>({
    mode: "onBlur",
  });

  return (
    <FormContainer className="form" onSubmit={handleSubmit(onSubmit)}>
      {children(register, errors)}
    </FormContainer>
  );
};

export default Form;
