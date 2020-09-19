import { MouseEvent } from "react";

export type ButtonPropsType = {
  label: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type: "submit" | "button" | "reset";
};
