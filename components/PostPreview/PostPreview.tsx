import React from "react";

import Link from "../Link";
import { DataType } from "../../redux/actions/postsList";

import { PostPreviewContainer, Title, Text } from "./styledComponents";

const PostPreview: React.FC<DataType> = ({ title, body, id }) => (
  <PostPreviewContainer>
    <Title>{title}</Title>
    <Text>{body}</Text>
    <Link text="details >" href={`posts/${id}`}></Link>
  </PostPreviewContainer>
);

export default PostPreview;
