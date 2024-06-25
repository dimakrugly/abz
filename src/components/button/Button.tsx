import React from 'react';
import { ButtonProps } from './ButtonTypes';
import './Button.scss';

export const Button: React.FC<ButtonProps> = ({ text, disabled = false }) => (
  <button
    type="button"
    className={`button ${disabled && 'button--disabled'}`}
    disabled={disabled}
  >
    <p className={`button__text ${disabled && 'button__text--disabled'}`}>{text}</p>
  </button>
);
