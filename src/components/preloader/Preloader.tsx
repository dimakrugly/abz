import React from 'react';
import spinner from '../../assets/spinner.svg';
import './Preloader.scss';

export const Preloader = () => (
  <div className="preloader">
    <img className="preloader__spinner" src={spinner} alt="loading" />
  </div>
);
