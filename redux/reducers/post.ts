import {
  FETCH_POST,
  SUCCESS_POST,
  ERROR_POST,
  DataType,
} from "../actions/post";

import { HYDRATE } from "next-redux-wrapper";

export type InitialStateType = {
  data: DataType | null;
  error: boolean;
};

type ActionPayloadType = {
  data?: DataType;
  postReducer?: InitialStateType;
};

type ActionType = {
  type:
    | typeof FETCH_POST
    | typeof HYDRATE
    | typeof SUCCESS_POST
    | typeof ERROR_POST;
  payload?: ActionPayloadType;
};

const initialState: InitialStateType = {
  data: null,
  error: false,
};

const postReducer = (
  state = initialState,
  action: ActionType
): InitialStateType => {
  console.log(action);
  switch (action.type) {
    case "__NEXT_REDUX_WRAPPER_HYDRATE__": {
      return { ...state, ...action.payload.postReducer };
    }
    case SUCCESS_POST:
      return {
        ...state,
        data: action.payload.data,
      };
    case ERROR_POST:
      return { ...state, error: true };
    default:
      return { ...state };
  }
};

export default postReducer;
