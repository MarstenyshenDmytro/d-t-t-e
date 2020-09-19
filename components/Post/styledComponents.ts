import styled from "styled-components";

export const PostContainer = styled.div`
  padding: 30px;
`;

export const PostContent = styled.article``;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding-left: 30px;
`;

export const Title = styled.p`
  font-size: 36px;
`;

export const PostId = styled.p`
  font-size: 14px;
  color: grey;
`;

export const PostText = styled.p`
  min-height: 100vh;
  font-size: 18px;
  padding-left: 15px;
  border-left: 1px solid grey;
  margin-bottom: 50px;
`;

export const CommentsTitle = styled.p`
  font-size: 36px;
`;

export const BackLink = styled.p`
  font-size: 18px;
`;
