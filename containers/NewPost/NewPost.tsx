import React from "react";
import { SubmitHandler } from "react-hook-form";
import { connect } from "react-redux";

import { newPostPush } from "../../redux/actions/newPost";

import Form, { Field, Input, Textarea } from "../../components/form";
import Button from "../../components/Button";
import InfoMsg from "./InfoMsg/InfoMsg";

import { NewPostPropsType, FormValuesType } from "./types";
import { NewPostContainer } from "./styledComponents";

const validators = {
  title: {
    required: "This field is required",
  },
  text: {
    required: "This field is required",
  },
};

const NewPost: React.FC<NewPostPropsType> = ({
  loading,
  error,
  isSuccessed,
  newPostPush,
}) => {
  const onSubmit: SubmitHandler<FormValuesType> = (data, e) => {
    newPostPush(data);
    e.target.reset();
  };

  return (
    <NewPostContainer>
      <Form onSubmit={onSubmit}>
        {(register, errors) => (
          <>
            <Field
              name="title"
              label="Post title"
              placeholder="enter post title"
              errors={errors}
              component={Input}
              register={register}
              validator={validators.title}
            />
            <Field
              name="body"
              label="text"
              placeholder="enter text"
              errors={errors}
              component={Textarea}
              register={register}
              validator={validators.text}
            />
            <Button type="submit" label="Add" />
          </>
        )}
      </Form>
      <InfoMsg loading={loading} error={error} isSuccessed={isSuccessed} />
    </NewPostContainer>
  );
};

export default connect((state) => state.newPostReducer, { newPostPush })(
  NewPost
);
