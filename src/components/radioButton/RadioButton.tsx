import React from 'react';
import { RadioButtonProps } from './RadioButtonTypes';
import './RadioButton.scss';

export const RadioButton: React.FC<RadioButtonProps> = ({
  id,
  position,
  register,
}) => (
  <div className="radioButton">
    <input
      type="radio"
      id={id}
      className="radioButton__input"
      value={position}
      {...register('position')}
    />
    <label htmlFor={id} className="radioButton__label" />
    <label htmlFor={id} className="radioButton__text">{ position }</label>
  </div>
);
