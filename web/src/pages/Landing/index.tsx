import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

const Landing: React.FC = () => {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Logo do Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img
          src={landingImg}
          alt="imagem da plataforma de estudos Proffy"
          className="hero-image"
        />

        <div className="buttons-container">
          <a href="" className="study">
            <img src={studyIcon} alt="Ícone estudar" />
            Estudar
          </a>

          <a href="" className="give-classes">
            <img src={giveClassesIcon} alt="Ícone estudar" />
            Aulas
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas{' '}
          <img src={purpleHeartIcon} alt="Ícone de coração purple" />
        </span>
      </div>
    </div>
  );
};

export default Landing;
