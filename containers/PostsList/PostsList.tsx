import React from "react";
import { connect } from "react-redux";

import PostPreview from "../../components/PostPreview";

import { InitialStateType } from "../../redux/reducers/postsList";
import { DataType } from "../../redux/actions/postsList";

import { Section } from "./styledComponents";

const PostsList: React.FC<InitialStateType> = ({ data, error }) =>
  error ? (
    <p>ERROR</p>
  ) : (
    data && (
      <Section>
        {data.map(({ title, body, id }: DataType) => (
          <PostPreview key={id} title={title} body={body} id={id} />
        ))}
      </Section>
    )
  );

export default connect((state) => state.postsListReducer)(PostsList);
