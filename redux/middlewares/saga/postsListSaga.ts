import { successPostsList, errorPostsList } from "../../actions/postsList";
import { getPostsListAPI } from "../../../api/getPostsListAPI";
import { call, put } from "redux-saga/effects";

function* postsListSaga() {
  try {
    const data = yield call(getPostsListAPI);
    yield put(successPostsList(data.reverse()));
  } catch (e) {
    yield put(errorPostsList());
  }
}

export default postsListSaga;
