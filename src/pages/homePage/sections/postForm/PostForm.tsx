import React from 'react';
import { Input } from '../../../../components/input/Input';
import './PostForm.scss';
import { RadioButton } from '../../../../components/radioButton/RadioButton';
import { Uploader } from '../../../../components/uploader/Uploader';
import { Button } from '../../../../components/button/Button';
import { PostFormProps } from './PostFormTypes';
import { Preloader } from '../../../../components/preloader/Preloader';

export const PostForm: React.FC<PostFormProps> = ({
  positions,
  handleSubmit,
  errors,
  register,
  watch,
  setValue,
  isValid,
}) => (
  <form className="postForm" onSubmit={handleSubmit}>
    <h1 className="postForm__title">Working with POST request</h1>
    <div className="postForm__inputContainer">
      <Input
        placeholder="Your name"
        name="name"
        errors={errors}
        register={register}
        watch={watch}
        type="text"
      />
      <Input
        placeholder="Email"
        name="email"
        errors={errors}
        register={register}
        watch={watch}
        type="email"
      />
      <Input
        placeholder="Phone"
        hint="+38 (XXX) XXX - XX - XX"
        name="tel"
        errors={errors}
        register={register}
        watch={watch}
        type="tel"
      />
    </div>
    <div className="postForm__radioField">
      <p className="postForm__radioTitle">Select your position</p>
      {positions.length === 0 ? <Preloader /> : (
        <fieldset className="postForm__radioForm">
          {positions.map((position) => (
            <RadioButton
              key={position.id}
              id={position.id.toString()}
              position={position.name}
              register={register}
            />
          ))}
        </fieldset>
      )}
    </div>
    <div className="postForm__uploader">
      <Uploader
        register={register}
        watch={watch}
        setValue={setValue}
        errors={errors}
      />
    </div>
    <div className="postForm__button">
      <Button
        text="Sign up"
        onClick={handleSubmit}
        disabled={!isValid}
      />
    </div>
  </form>
);
