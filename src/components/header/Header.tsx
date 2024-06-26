import './Header.scss';
import logo from '../../assets/logo.svg';
import { Button } from '../button/Button';

export const Header = () => (
  <div className="header">
    <img src={logo} alt="logo" className="header__logo" />
    <div className="header__buttonsContainer">
      <Button text="Users" onClick={() => {}} />
      <Button text="Sign up" onClick={() => {}} />
    </div>
  </div>
);
