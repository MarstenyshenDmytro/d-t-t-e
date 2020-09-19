import { applyMiddleware, createStore, Store, combineReducers } from "redux";
import createSagaMiddleware, { Task } from "redux-saga";
import { createWrapper } from "next-redux-wrapper";

import { postsListReducer, postReducer, newPostReducer } from "../reducers";
import { rootSaga } from "../middlewares";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

export const makeStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    combineReducers({ postsListReducer, postReducer, newPostReducer }),
    applyMiddleware(sagaMiddleware)
  );
  (store as SagaStore).sagaTask = sagaMiddleware.run(rootSaga);

  return store;
};

export const wrapper = createWrapper(makeStore, { debug: true });
