export const NEW_POST_PUSH = "NEW_POST_PUSH";
export const SUCCESS_POST_PUSH = "SUCCESS_POST_PUSH";
export const ERROR_POST_PUSH = "ERROR_POST_PUSH";

export type DataType = {
  title: string;
  body: string;
};

type NewPostPushActionType = {
  type: typeof NEW_POST_PUSH;
  payload: {
    data: DataType;
    loading: boolean;
  };
};

type SuccessPostPushActionPayloadType = {
  loading: boolean;
  isSuccessed: boolean;
};

type SuccessPostPushActionType = {
  type: typeof SUCCESS_POST_PUSH;
  payload: SuccessPostPushActionPayloadType;
};

type ErrorPostPushActionPayloadType = {
  error: boolean;
  loading: boolean;
};

type ErrorPostPushActionType = {
  type: typeof ERROR_POST_PUSH;
  payload: ErrorPostPushActionPayloadType;
};

export const newPostPush = (data: DataType): NewPostPushActionType => ({
  type: NEW_POST_PUSH,
  payload: { data, loading: true },
});

export const successPostPush = (): SuccessPostPushActionType => ({
  type: SUCCESS_POST_PUSH,
  payload: { loading: false, isSuccessed: true },
});

export const errorPostPush = (): ErrorPostPushActionType => ({
  type: ERROR_POST_PUSH,
  payload: { loading: false, error: true },
});
