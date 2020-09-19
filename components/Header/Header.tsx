import React from "react";
import { PropsType } from "./types";

import { HeaderComponent, P } from "./styledComponents";
import Link from "../Link";

const Header: React.FC<PropsType> = ({ title }) => (
  <HeaderComponent>
    <P>
      <Link text={title} href="/" />
    </P>
    <div>
      <Link text="create post" href="/posts/new" />
    </div>
  </HeaderComponent>
);

export default Header;
