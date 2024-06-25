import React from 'react';
import { ButtonProps } from './ButtonTypes';
import './Button.scss';

export const Button: React.FC<ButtonProps> = ({ text }) => (
  <button type="button" className="button">
    <p className="button__text">{text}</p>
  </button>
);
