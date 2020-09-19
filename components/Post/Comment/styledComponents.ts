import styled from "styled-components";

export const CommentContainer = styled.div`
  margin: 0 40px;
  padding: 15px;
  border-bottom: 1px solid grey;
  &:not(last-child) {
    margin-bottom: 20px;
  }
`;

export const CommentAdditionalText = styled.p`
  font-size: 14px;
  color: grey;
`;

export const CommentText = styled.p`
  margin-top: 20px;
`;
