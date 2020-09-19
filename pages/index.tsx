import React from "react";
import { GetServerSideProps } from "next";
import { END } from "redux-saga";

import { wrapper, SagaStore } from "../redux/store/store";
import { fetchPostsList } from "../redux/actions/postsList";

import PostsList from "../containers/PostsList";

const HomePage: React.FC = () => <PostsList />;

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps(
  async ({ store }) => {
    if (!store.getState().postsListReducer.data) {
      store.dispatch(fetchPostsList());
      store.dispatch(END as any);
    }

    await (store as SagaStore).sagaTask.toPromise();
  }
);

export default HomePage;
