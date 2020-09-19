import React from "react";

import { InfoMsgPropsType } from "./types";
import { P } from "./styledComponents";

const InfoMsg: React.FC<InfoMsgPropsType> = ({
  loading,
  isSuccessed,
  error,
}) => {
  if (loading) {
    return <P color="grey">Loading...</P>;
  }

  if (!loading && error) {
    return <P color="red">Some error with server(</P>;
  }

  if (isSuccessed) {
    return <P color="green">Post was created</P>;
  }
  return null;
};

export default InfoMsg;
