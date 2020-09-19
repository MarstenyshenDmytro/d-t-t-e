import styled from "styled-components";

export const PostPreviewContainer = styled.div`
  padding: 20px;
  border: 1px solid transparent;
  &:hover {
    border-color: grey;
  }
`;

export const Title = styled.p`
  font-size: 36px;
  font-weight: bold;
  letter-spacing: 2px;
`;

export const Text = styled.p`
  font-size: 18px;
  margin: 20px 0;
`;
