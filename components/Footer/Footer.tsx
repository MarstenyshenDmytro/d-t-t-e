import React from "react";

import { PropsType } from "./types";

import { FooterComponent, P } from "./styledComponents";

const Footer: React.FC<PropsType> = ({ text }) => (
  <FooterComponent>
    <P>{text}</P>
  </FooterComponent>
);

export default Footer;
