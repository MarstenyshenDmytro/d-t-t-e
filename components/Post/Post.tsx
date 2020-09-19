import React from "react";
import Link from "../Link";

import Comment from "./Comment/Comment";

import { DataType } from "../../redux/actions/post";
import {
  PostContainer,
  PostContent,
  Header,
  Title,
  PostId,
  PostText,
  CommentsTitle,
  BackLink,
} from "./styledComponents";

const Post: React.FC<DataType> = ({ title, body, id, comments }) => (
  <PostContainer>
    <BackLink>
      <Link text="< Back to list" href="/" />
    </BackLink>
    <PostContent>
      <Header>
        <Title>{title}</Title>
        <PostId>{`Post: ${id}`}</PostId>
      </Header>
      <PostText>{body}</PostText>
    </PostContent>
    <CommentsTitle>Comments:</CommentsTitle>
    {comments.length ? (
      comments.map(({ id, postId, body }) => (
        <Comment key={id} id={id} postId={postId} body={body} />
      ))
    ) : (
      <p>There are no comments</p>
    )}
  </PostContainer>
);

export default Post;
