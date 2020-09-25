import React, { useState } from 'react';
import './Slider.scss';
import  Top from './Top/Top';
import classnames from 'classnames';
import styled from 'styled-components';
import gsap from 'gsap';
import { TimelineLite, Power3 } from 'gsap/gsap-core';
import TweenLite from 'gsap/all';

const colors = ['#00cdde', '#ffb208', '#f24444'];

export const Slider = () => {
  let [state, setState] = useState({
    isActive1: true,
    isActive2: false,
    isActive3: false
  });
 

const changeSlide  = (name) => {

setState(({
  [name]: true,
}));


}
return (
  <>
    <section className="banner container">
     {/* <button type="button" className="arrow">Left</button>
     <button type="button" className="arrow">Right</button> */}
      <div className={classnames({
        banner__bg: true,
        banner__bg_b: true,
        active: state.isActive1,
      })}
      >
      </div>
      <div className={classnames({
        banner__bg: true,
        banner__bg_y: true,
        active: state.isActive2
      })}
      >
      </div>
      <div className={classnames({
        banner__bg: true,
        banner__bg_r: true,
        active: state.isActive3
      })}
      >
      </div>


      <div className="banner__border">
      <Top />


        <section className="banner__main main">

          <h1 className="main__title">
            Твой
                <br></br>
            <span className="main__title main__title_colored">эмоцио-<br></br>нальный</span>
            <br></br>
                тренер
                </h1>
          <div className="main__decoration"></div>

          <p className="main__subtitle">Позаботьтесь о себе
                <br></br>и своих близких</p>
          <div className="main__buttons">
            <button className="main__button button">
              <span className="button__logo button__logo_app"></span>
              <a className="button__link">
                <span>Download on the</span>
                <span className="button__text">App store</span>
              </a>
            </button>
            <button className="main__button button">
              <span className="button__logo button__logo_google"></span>
              <a className="button__link">
                <span>Get it on</span>
                <span className="button__text">Google play</span>
              </a>
            </button>
          </div>
        </section>


        <div className="banner__slider slider">
          <div className="slider__buttons">
            <button
              type="button"
              name="isActive1"
              onClick={(event) => (
                changeSlide(event.target.name)
              )
              }>
            </button>
            <button
              type="button"
              name="isActive2"
              onClick={(event) => (
                changeSlide(event.target.name)
              )
              }>
            </button>
            <button
              type="button"
              name="isActive3"
              onClick={(event) => (
                changeSlide(event.target.name)
              )
              }>
            </button>
          </div>
          <div className="slider__decoration">
            <div className="slider__bg">
              <div className="slider__figure"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="banner__decoration"></div>
      <img className="banner__img" alt="iphone" src={require("../assets/img1.svg")}></img>


    </section>
  </>
);
} 