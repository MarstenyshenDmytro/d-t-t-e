export type NewPostPropsType = {
  loading: boolean;
  isSuccessed: boolean;
  error: boolean;
  newPostPush: Function;
};

export type FormValuesType = {
  data: {
    title: string;
    body: string;
  };
};
