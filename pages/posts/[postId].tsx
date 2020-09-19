import React from "react";
import { GetStaticPaths, GetStaticProps } from "next";
import { END } from "redux-saga";
import { wrapper, SagaStore } from "../../redux/store/store";
import { fetchPost } from "../../redux/actions/post";
import { getPostsListAPI } from "../../api/getPostsListAPI";

import PostDetails from "../../containers/PostDetails";

const PostPage: React.FC = () => <PostDetails />;

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getPostsListAPI();
  const paths = posts.map((post) => ({
    params: { postId: post.id.toString() },
  }));

  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = wrapper.getServerSideProps(
  async ({ params: { postId }, store }) => {
    if (!store.getState().postReducer.data) {
      store.dispatch(fetchPost(postId as string));
      store.dispatch(END as any);
    }

    await (store as SagaStore).sagaTask.toPromise();
  }
);

export default PostPage;
