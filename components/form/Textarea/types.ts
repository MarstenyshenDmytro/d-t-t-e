import React from "react";

export type TextareaPropsType = {
  name: string;
  handleControl: React.ReactEventHandler;
  register: any;
  validator: object;
  isFocus: boolean;
  placeholder: string;
};
