import React from 'react';
import { InputProps } from './InputTypes';
import './Input.scss';

export const Input: React.FC<InputProps> = ({
  placeholder,
  hint,
  name,
  errors,
  register,
  watch,
  type,
}) => {
  const isError = name in errors;
  const value = watch(name);

  return (
    <div className="input">
      <input
        type={type}
        id={name}
        className={`input__field ${isError && 'input__field--error'}`}
        autoComplete="off"
        {...register(name, { onBlur: (e) => e.target.value.trim() !== '' })}
      />
      <label className={`
      input__label 
      ${value && 'input__label--fulfilled'}
      ${isError && 'input__label--error'}
      `}
      >
        {placeholder}
      </label>
      {
            (isError || hint) && (
            <p className={`input__hint ${isError && 'input__hint--error'}`}>{errors[name]?.message || hint}</p>
            )
        }
    </div>
  );
};
