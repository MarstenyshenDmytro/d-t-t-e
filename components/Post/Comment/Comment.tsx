import React from "react";

import { CommentPropsType } from "./types";

import {
  CommentContainer,
  CommentText,
  CommentAdditionalText,
} from "./styledComponents";

const Comment: React.FC<CommentPropsType> = ({ id, postId, body }) => (
  <CommentContainer>
    <CommentAdditionalText>{`Post id: ${postId}`}</CommentAdditionalText>
    <CommentAdditionalText>{`Comment: ${id}`}</CommentAdditionalText>
    <CommentText>{body}</CommentText>
  </CommentContainer>
);

export default Comment;
