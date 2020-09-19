import React from "react";
import { SubmitHandler } from "react-hook-form";
import { FormValuesType } from "../../../containers/NewPost/types";

export type FormPropsType = {
  children: any;
  onSubmit: SubmitHandler<FormValuesType>;
};
