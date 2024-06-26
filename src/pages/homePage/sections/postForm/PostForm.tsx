import React from 'react';
import { Input } from '../../../../components/input/Input';
import './PostForm.scss';
import { RadioButton } from '../../../../components/radioButton/RadioButton';
import { Uploader } from '../../../../components/uploader/Uploader';
import { Button } from '../../../../components/button/Button';
import { PostFormProps } from './PostFormTypes';
import { Preloader } from '../../../../components/preloader/Preloader';

export const PostForm: React.FC<PostFormProps> = ({ positions }) => (
  <section className="postForm">
    <h1 className="postForm__title">Working with POST request</h1>
    <div className="postForm__inputContainer">
      <Input placeholder="Your name" />
      <Input placeholder="Email" />
      <Input placeholder="Phone" hint="+38 (XXX) XXX - XX - XX" />
    </div>
    <div className="postForm__radioField">
      <p className="postForm__radioTitle">Select your position</p>
      {positions.length === 0 ? <Preloader /> : (
        <fieldset className="postForm__radioForm">
          {positions.map((position) => (
            <RadioButton
              key={position.id}
              id={position.id.toString()}
              name={position.name}
              groupName="positions"
            />
          ))}
        </fieldset>
      )}
    </div>
    <div className="postForm__uploader">
      <Uploader />
    </div>
    <div className="postForm__button">
      <Button
        text="Sign up"
        onClick={() => {
        }}
      />
    </div>
  </section>
);
