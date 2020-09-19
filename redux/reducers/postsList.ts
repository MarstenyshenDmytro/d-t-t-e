import {
  FETCH_POSTS_LIST,
  SUCCESS_POSTS_LIST,
  ERROR_POSTS_LIST,
  DataType,
} from "../actions/postsList";

import { HYDRATE } from "next-redux-wrapper";

export type InitialStateType = {
  data: Array<DataType> | null;
  error: boolean;
};

type ActionPayloadType = {
  data?: Array<DataType>;
  postsListReducer?: InitialStateType;
};

type ActionType = {
  type:
    | typeof FETCH_POSTS_LIST
    | typeof HYDRATE
    | typeof SUCCESS_POSTS_LIST
    | typeof ERROR_POSTS_LIST;
  payload?: ActionPayloadType;
};

const initialState: InitialStateType = {
  data: null,
  error: false,
};

const postsListReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "__NEXT_REDUX_WRAPPER_HYDRATE__": {
      return { ...state, ...action.payload.postsListReducer };
    }
    case SUCCESS_POSTS_LIST:
      return { ...state, data: action.payload.data };
    case ERROR_POSTS_LIST:
      return { ...state, error: true };
    default:
      return { ...state };
  }
};

export default postsListReducer;
