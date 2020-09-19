import React from "react";
import Link from "next/link";
import { LinkButtonPropsType } from "./types";

import { A } from "./styledComponents";

const CustomLink: React.FC<LinkButtonPropsType> = ({ text, href }) => (
  <Link href={href}>
    <A>{text}</A>
  </Link>
);

export default CustomLink;
