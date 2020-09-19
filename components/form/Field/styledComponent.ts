import styled from "styled-components";

export const FieldContainer = styled.div`
  width: 100%;
  &:not(last-child) {
    margin-bottom: 10px;
  }
`;

export const Label = styled.p`
  font-size: 18px;
`;

export const FieldContent = styled.div`
  border: 1px solid ${(props) => (props.isError ? "rgb(137,0,0)" : "black")};
  margin: 5px 0;
`;

export const ErrorMessage = styled.p`
  font-size: 14px;
  color: rgb(137, 0, 0);
`;
