import { successPostPush, errorPostPush } from "../../actions/newPost";
import { postNewPostAPI } from "../../../api/postNewPostAPI";
import { call, put } from "redux-saga/effects";
import { AnyAction } from "redux";

function* newPostSaga({ payload: { data } }: AnyAction) {
  try {
    yield call(postNewPostAPI, data);
    yield put(successPostPush());
  } catch (e) {
    yield put(errorPostPush());
  }
}

export default newPostSaga;
