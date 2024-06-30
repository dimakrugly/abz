import './Uploader.scss';
import { useState } from 'react';

export const Uploader = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [file, setFile] = useState<File | undefined>(undefined);
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement & {
        files: FileList
    };

    if (target.files && target.files.length > 0) {
      setFile(target.files[0]);
    }
  };

  return (
    <div className="uploader">
      <input className="uploader__input" type="file" accept=".jpg,.jpeg" name="photo" id="photo" onChange={handleChange} />
      <label htmlFor="photo" className="uploader__container">
        <div className="uploader__button">Upload</div>
        <p className="uploader__text">{file ? file.name : 'Upload your photo'}</p>
      </label>
    </div>
  );
};
