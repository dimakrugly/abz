import './Uploader.scss';
import React from 'react';
import {
  FieldErrors, UseFormRegister, UseFormSetValue, UseFormWatch,
} from 'react-hook-form';
import { MyFormData } from '../../pages/homePage/hooks/useValidation';

interface UploaderProps {
    register: UseFormRegister<MyFormData>;
    watch: UseFormWatch<MyFormData>;
    setValue: UseFormSetValue<MyFormData>;
    errors: FieldErrors<MyFormData>;
}

export const Uploader: React.FC<UploaderProps> = ({
  register,
  watch,
  setValue,
  errors,
}) => {
  const file = watch('file');
  const error = 'file' in errors;

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    if (files && files.length > 0) {
      setValue('file', files[0], { shouldValidate: true });
    }
  };

  return (
    <div className="uploader">
      <input
        className="uploader__input"
        type="file"
        multiple={false}
        accept=".jpg,.jpeg"
        id="file"
        {...register('file')}
        onChange={handleFileChange}
      />
      <label htmlFor="file" className="uploader__container">
        <div className="uploader__button">Upload</div>
        <p className="uploader__text">{file?.type ? file.name : 'Upload your photo'}</p>
      </label>
      {error && (
        <p className="uploader__error">
          {errors.file?.message}
        </p>
      )}
    </div>
  );
};
