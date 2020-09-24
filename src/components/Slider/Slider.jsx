import React from 'react';
import './Slider.scss';

export const Slider = () => {
  return (
    <>
      <section className="banner container">

        <div className="banner__bg">
          <div className="banner__border">
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
            <div className="banner__buttons">
              <button className="banner__button button">
                <span className="button__logo button__logo_app"></span>
                <a className="button__link">
                  <span>Download on the</span>
                  <span className="button__text">App store</span>
                </a>
              </button>
              <button className="banner__button button">
                <span className="button__logo button__logo_google"></span>
                <a className="button__link">
                  <span>Get it on</span>
                  <span className="button__text">Google play</span>
                </a>
              </button>
            </div>
            <div className="banner__decoration"></div>
            <img className="banner__img" alt="iphone" src={require("../assets/img1.svg")}></img>

            <div className="banner__slider slider">
              <div className="slider__buttons">
                <button type="button"></button>
                <button type="button"></button>
                <button type="button"></button>
              </div>
            <div className="slider__decoration">
              <div className="slider__bg">
                <div className="slider__figure"></div>
              </div>
            </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
} 