import React, { useState } from 'react';
import { InputProps } from './InputTypes';
import './Input.scss';

export const Input: React.FC<InputProps> = ({
  placeholder,
  hint,
}) => {
  const [value, SetValue] = useState('');
  return (
    <div className="input">
      <input className="input__field" value={value} onChange={(e) => SetValue(e.target.value)} />
      <label className={`input__label ${value && 'input__label--fulfilled'}`}>{placeholder}</label>
      {
            hint && (
            <p className="input__hint">{hint}</p>
            )
        }
    </div>
  );
};
