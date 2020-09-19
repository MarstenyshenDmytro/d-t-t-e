import React from "react";

export type InputPropsType = {
  name: string;
  handleControl: React.ReactEventHandler;
  register: any;
  validator: object;
  isFocus: boolean;
  placeholder: string;
};
