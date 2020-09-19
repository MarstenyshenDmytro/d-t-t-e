import {
  NEW_POST_PUSH,
  SUCCESS_POST_PUSH,
  ERROR_POST_PUSH,
  DataType,
} from "../actions/newPost";

import { HYDRATE } from "next-redux-wrapper";

export type InitialStateType = {
  loading: boolean;
  isSuccessed: boolean;
  error: boolean;
};

type ActionPayloadType = {
  data?: DataType;
  newPostReducer?: InitialStateType;
};

type ActionType = {
  type:
    | typeof NEW_POST_PUSH
    | typeof HYDRATE
    | typeof SUCCESS_POST_PUSH
    | typeof ERROR_POST_PUSH;
  payload?: ActionPayloadType;
};

const initialState: InitialStateType = {
  loading: false,
  isSuccessed: false,
  error: false,
};

const newPostReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  switch (action.type) {
    case "__NEXT_REDUX_WRAPPER_HYDRATE__": {
      return { ...state, ...action.payload.newPostReducer };
    }
    case NEW_POST_PUSH:
      return { ...state, loading: true };
    case SUCCESS_POST_PUSH:
      return { ...state, loading: false, isSuccessed: true };
    case ERROR_POST_PUSH:
      return { ...state, loading: false, error: true };
    default:
      return { ...state };
  }
};

export default newPostReducer;
