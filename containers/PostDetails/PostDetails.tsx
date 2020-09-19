import React from "react";
import { connect } from "react-redux";

import Post from "../../components/Post";

import { InitialStateType } from "../../redux/reducers/post";

const PostDetails: React.FC<InitialStateType> = ({ data, error }) =>
  error ? (
    <p>ERROR</p>
  ) : (
    data && (
      <Post
        title={data.title}
        body={data.body}
        id={data.id}
        comments={data.comments}
      />
    )
  );

export default connect((state) => state.postReducer)(PostDetails);
