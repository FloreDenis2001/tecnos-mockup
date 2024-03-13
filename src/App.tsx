// Import necessary dependencies and icons
import React from "react";
import "./App.css";
import video from "./assets/backgroundVideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressBook,
  faCalendarDays,
  faCertificate,
  faHandshake,
  faHeadset,
  faPhone,
  faAngleDown,
  faGears,
} from "@fortawesome/free-solid-svg-icons";
import webinar1 from "../src/assets/webinar1.jpg"
import webinar2 from "../src/assets/webinar2.png"
import webinar3 from "../src/assets/webinar3.jpg"
import webinar4 from "../src/assets/webinar4.png"
import webinar5 from "../src/assets/webinar5.png"
import webinar6 from "../src/assets/webinar6.png"
import industrie1 from "../src/assets/industrie1.jpg"
import industrie2 from "../src/assets/industrie2.jpg"
import industrie3 from "../src/assets/industrie3.jpg"
import industrie4 from "../src/assets/industrie4.jpg"
import industrie5 from "../src/assets/industrie5.jpg"
import industrie6 from "../src/assets/industrie6.jpg"


function App() {
  return (
    <>
      <header className="header">
        <div className="header__information">
          <div className="header__information__left">
            <div className="header__information__item">
              <FontAwesomeIcon icon={faPhone} />
              <p>ASISTENTA TELEFONICA : 0213 168 857</p>
            </div>
            <div className="header__information__item">
              <FontAwesomeIcon icon={faHeadset} />
              <p>SUPORT TEHNIC</p>
            </div>
            <div className="header__information__item">
              <FontAwesomeIcon icon={faAddressBook} />
              <p>CONTACT</p>
            </div>
          </div>

          <div className="header__information__right">
            <div className="header__information__item">
              <FontAwesomeIcon icon={faCalendarDays} />
              <p>EVENIMENTE</p>
            </div>
            <div className="header__information__item">
              <FontAwesomeIcon icon={faCertificate} />
              <p>GARANTIE</p>
            </div>
            <div className="header__information__item">
              <FontAwesomeIcon icon={faHandshake} />
              <p>PARTENERI</p>
            </div>
          </div>
        </div>

        <div className="header__navigation">
          <div className="header__logoBox">
            <img
              src="https://www.tecnos.ro/wp-content/uploads/2018/05/logo-tecnos.png"
              alt="Romstal"
              className="header__logo"
              width={300}
            />
          </div>

          <nav className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__item">
                <a href="#home">Acasa</a>
              </li>
              <li className="header__nav__item dropdown">
                <a href="#about">
                  Produse <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <ul className="dropdown-content">
                  <li>
                    <a href="#category1">Category 1</a>
                  </li>
                  <li>
                    <a href="#category2">Category 2</a>
                  </li>
                  <li>
                    <a href="#category2">Category 3</a>
                  </li>
                  <li>
                    <a href="#category2">Category 4</a>
                  </li>
                </ul>
              </li>
              <li className="header__nav__item dropdown">
                <a href="#services">
                  Aplicatii si Tehnologie <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <ul className="dropdown-content">
                  <li>
                    <a href="#category1">Category 1</a>
                  </li>
                  <li>
                    <a href="#category2">Category 2</a>
                  </li>
                  <li>
                    <a href="#category2">Category 3</a>
                  </li>
                  <li>
                    <a href="#category2">Category 4</a>
                  </li>
                </ul>
              </li>
              <li className="header__nav__item dropdown">
                <a href="#services">
                  Industrii <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <ul className="dropdown-content">
                  <li>
                    <a href="#industry1">Industry 1</a>
                  </li>
                  <li>
                    <a href="#industry2">Industry 2</a>
                  </li>
                  <li>
                    <a href="#industry2">Industry 3</a>
                  </li>
                  <li>
                    <a href="#industry2">Industry 4</a>
                  </li>
                </ul>
              </li>

              <li className="header__nav__item">
                <a href="#home">Noutati</a>
              </li>

              <li className="header__nav__item">
                <a href="#home">Servicii</a>
              </li>
            </ul>
          </nav>

          <div className="header__searchBox">
            <input
              type="text"
              placeholder="Cauta produse"
              className="header__searchBox__input"
            />
            <button className="header__searchBox__button">Cauta</button>
          </div>
        </div>

        <div className="background-video">
          <div className="header__overlay">
            <div className="header__overlay__content">
              <h1>Bun venit pe site!</h1>
              <p>Aici puteți găsi cele mai noi produse și servicii.</p>
            </div>
          </div>

          <video autoPlay loop muted>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </header>

      <section className="banners">
        <div className="banners__container">
        <div className="banners__card">
          <div className="banners__card__header">
            <FontAwesomeIcon icon={faCertificate} />
            <h3>GARANTIA CALITATI</h3>
          </div>
          <div className="banners__card__content">
            <p>
              Colaborarile pe termen lung si increderea clientilor in noi si in
              produsele noastre ne obliga sa fim mereu mai buni in tot ceea ce
              inseamna angajamentul nostru de calitate fata de partenerii
              nostri.
            </p>
          </div>
        </div>
        <div className="banners__card">
          <div className="banners__card__header">
            <FontAwesomeIcon icon={faHeadset} />
            <h3>CONSULTANTA TEHNICA</h3>
          </div>
          <div className="banners__card__content">
            <p>
              Ofertele intocmite pentru clientii nostri sunt rezultatul unei
              atente analize a nevoilor acestora si o optima solutie
              tehnico-economica stabilita prin discutii ale clientului cu echipa
              noastra de vanzari.
            </p>
          </div>
        </div>

        <div className="banners__card">
          <div className="banners__card__header">
            <FontAwesomeIcon icon={faGears} />
            <h3>SERVICII DE LIVRARE</h3>
          </div>
          <div className="banners__card__content">
            <p>
              Colaborarile pe termen lung si increderea clientilor in noi si in
              produsele noastre ne obliga sa fim mereu mai buni in tot ceea ce
              inseamna angajamentul nostru de calitate fata de partenerii
              nostri.
            </p>
          </div>
        </div>
        </div>
      </section>

      <section className="webinars">
      <div className="webinars__title">
        <h2>Webinarii Gratuite</h2>
      </div>
      <div className="webinars__container">
        <div className="webinars__card">
          <div className="card__background">
            <img src={webinar1} alt="Webinar" />
          </div>
          <div className="card__content">
            <h3>Titlul Webinarului</h3>
            <p>Descrierea scurtă a webinarului.</p>
          </div>
        </div>
        <div className="webinars__card">
          <div className="card__background">
            <img src={webinar2} alt="Webinar" />
          </div>
          <div className="card__content">
            <h3>Titlul Webinarului</h3>
            <p>Descrierea scurtă a webinarului.</p>
          </div>
        </div>
        <div className="webinars__card">
          <div className="card__background">
            <img src={webinar3} alt="Webinar" />
          </div>
          <div className="card__content">
            <h3>Titlul Webinarului</h3>
            <p>Descrierea scurtă a webinarului.</p>
          </div>
        </div>
        <div className="webinars__card">
          <div className="card__background">
            <img src={webinar4} alt="Webinar" />
          </div>
          <div className="card__content">
            <h3>Titlul Webinarului</h3>
            <p>Descrierea scurtă a webinarului.</p>
          </div>
        </div>
        <div className="webinars__card">
          <div className="card__background">
            <img src={webinar5} alt="Webinar" />
          </div>
          <div className="card__content">
            <h3>Titlul Webinarului</h3>
            <p>Descrierea scurtă a webinarului.</p>
          </div>
        </div>
        <div className="webinars__card">
          <div className="card__background">
            <img src={webinar6} alt="Webinar" />
          </div>
          <div className="card__content">
            <h3>Titlul Webinarului</h3>
            <p>Descrierea scurtă a webinarului.</p>
          </div>
        </div>
      
       
      </div>
    </section>



      <section className="industry">
      <div className="industry__title">
        <h2>Industrii</h2>
      </div>
      <div className="industry__container">
        <div className="industry__card">
          <div className="card__background">
            <img src={industrie1} alt="Webinar" />
          </div>
          <div className="card__content">
            <h3>Titlul Industrie</h3>
          </div>
        </div>
        <div className="industry__card">
          <div className="card__background">
            <img src={industrie2} alt="Webinar" />
          </div>
          <div className="card__content">
            <h3>Titlul Industrie</h3>
          </div>
        </div>
        <div className="industry__card">
          <div className="card__background">
            <img src={industrie3} alt="Webinar" />
          </div>
          <div className="card__content">
            <h3>Titlul Industrie</h3>
          </div>
        </div>
        <div className="industry__card">
          <div className="card__background">
            <img src={industrie4} alt="Webinar" />
          </div>
          <div className="card__content">
            <h3>Titlul Industrie</h3>
          </div>
        </div>
        <div className="industry__card">
          <div className="card__background">
            <img src={industrie5} alt="Webinar" />
          </div>
          <div className="card__content">
            <h3>Titlul Industrie</h3>
          </div>
        </div>
        <div className="industry__card">
          <div className="card__background">
            <img src={industrie6} alt="Webinar" />
          </div>
          <div className="card__content">
            <h3>Titlul Industrie</h3>
          </div>
        </div>
       
      
       
      </div>
    </section>
    </>
  );
}

export default App;
