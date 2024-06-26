import React from 'react';
import { RadioButtonProps } from './RadioButtonTypes';
import './RadioButton.scss';

export const RadioButton: React.FC<RadioButtonProps> = ({
  id, name, groupName,
}) => (
  <div className="radioButton">
    <input name={groupName} type="radio" id={id} className="radioButton__input" />
    <label htmlFor={id} className="radioButton__label" />
    <label htmlFor={id} className="radioButton__text">{name}</label>
  </div>
);
