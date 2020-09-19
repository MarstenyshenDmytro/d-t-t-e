export const FETCH_POSTS_LIST = "FETCH_POSTS_LIST";
export const SUCCESS_POSTS_LIST = "SUCCESS_POSTS_LIST";
export const ERROR_POSTS_LIST = "ERROR_POSTS_LIST";

type FetchPostsListActionType = {
  type: typeof FETCH_POSTS_LIST;
};

export type DataType = {
  id: number;
  title: string;
  body: string;
};

type SuccessPostsListActionPayloadType = {
  data: Array<DataType>;
};

type SuccessPostsListActionType = {
  type: typeof SUCCESS_POSTS_LIST;
  payload: SuccessPostsListActionPayloadType;
};

type ErrorPostsListActionPayloadType = {
  error: boolean;
};

type ErrorPostsListActionType = {
  type: typeof ERROR_POSTS_LIST;
  payload: ErrorPostsListActionPayloadType;
};

export const fetchPostsList = (): FetchPostsListActionType => ({
  type: FETCH_POSTS_LIST,
});

export const successPostsList = (
  data: Array<DataType>
): SuccessPostsListActionType => ({
  type: SUCCESS_POSTS_LIST,
  payload: { data },
});

export const errorPostsList = (): ErrorPostsListActionType => ({
  type: ERROR_POSTS_LIST,
  payload: { error: true },
});
