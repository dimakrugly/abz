import './Field.scss';
import { Button } from '../../../../components/button/Button';

export const Field = () => (
  <section className="field">
    <h1 className="field__title">Test assignment for front-end developer</h1>
    <p className="field__text">What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they&apos;ll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
    <div className="field__button">
      <Button text="Sign up" onClick={() => {}} />
    </div>
  </section>
);
