import React from 'react';
import './Top.scss';


const Top = () => {
  return (
    <section className="banner__top top">
    <div className="top__logo"></div>
    <div className="top__left-corner">
      <nav className="top__nav nav">
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#about" className="nav__link">About</a>
          </li>
          <li className="nav__item">
            <a href="#features" className="nav__link">Features</a>
          </li>
          <li className="nav__item">
            <a href="#services" className="nav__link">Services</a>
          </li>
          <li className="nav__item">
            <a href="#contacts" className="nav__link">Contacts</a>
          </li>
        </ul>
      </nav>

      <button type="button" className="top__button">
        <a href="#">download</a>
        <span></span>
      </button>
    </div>
  </section>
  )
};

export default Top;