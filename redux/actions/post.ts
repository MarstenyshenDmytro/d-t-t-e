export const FETCH_POST = "FETCH_POST";
export const SUCCESS_POST = "SUCCESS_POST";
export const ERROR_POST = "ERROR_POST";

type FetchPostActionType = {
  type: typeof FETCH_POST;
  payload: {
    id: string | null;
  };
};

export type DataType = {
  id: number;
  title: string;
  body: string;
  comments?: [
    {
      id: number;
      postId: number;
      body: string;
    }
  ];
};

type SuccessPostActionPayloadType = {
  data: DataType;
};

type SuccessPostActionType = {
  type: typeof SUCCESS_POST;
  payload: SuccessPostActionPayloadType;
};

type ErrorPostActionPayloadType = {
  error: boolean;
};

type ErrorPostActionType = {
  type: typeof ERROR_POST;
  payload: ErrorPostActionPayloadType;
};

export const fetchPost = (id: string): FetchPostActionType => ({
  type: FETCH_POST,
  payload: { id },
});

export const successPost = (data: DataType): SuccessPostActionType => ({
  type: SUCCESS_POST,
  payload: { data },
});

export const errorPost = (): ErrorPostActionType => ({
  type: ERROR_POST,
  payload: { error: true },
});
