import { Input } from '../../../../components/input/Input';
import './PostForm.scss';
import { RadioButton } from '../../../../components/radioButton/RadioButton';
import { Uploader } from '../../../../components/uploader/Uploader';
import { Button } from '../../../../components/button/Button';

const positions = [
  {
    id: 1,
    name: 'Security',
  },
  {
    id: 2,
    name: 'Designer',
  },
  {
    id: 3,
    name: 'Content manager',
  },
  {
    id: 4,
    name: 'Lawyer',
  },
];
export const PostForm = () => (
  <section className="postForm">
    <h1 className="postForm__title">Working with POST request</h1>
    <div className="postForm__inputContainer">
      <Input placeholder="Your name" />
      <Input placeholder="Email" />
      <Input placeholder="Phone" hint="+38 (XXX) XXX - XX - XX" />
    </div>
    <div className="postForm__radioField">
      <p className="postForm__radioTitle">Select your position</p>
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
    </div>
    <div className="postForm__uploader">
      <Uploader />
    </div>
    <div className="postForm__button">
      <Button text="Sign up" onClick={() => {}} />
    </div>
  </section>
);
