// Import necessary dependencies and icons
import React from "react";
import "./App.css";
import video from "./assets/backgroundVideo.mp4";
import video2 from "./assets/backgroundVideo2.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressBook,
  faCalendarDays,
  faCertificate,
  faHandshake,
  faHeadset,
  faPhone,
  faAngleDown,
  faGears,
  faSearch,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel as BootstrapCarousel } from "react-bootstrap";

import webinar1 from "../src/assets/webinar1.jpg";
import webinar2 from "../src/assets/webinar2.png";
import webinar3 from "../src/assets/webinar3.jpg";
import webinar4 from "../src/assets/webinar4.png";
import webinar5 from "../src/assets/webinar5.png";
import webinar6 from "../src/assets/webinar6.png";

import industrie1 from "../src/assets/industrie1.jpg";
import industrie2 from "../src/assets/industrie2.jpg";
import industrie3 from "../src/assets/industrie3.jpg";
import industrie4 from "../src/assets/industrie4.jpg";
import industrie5 from "../src/assets/industrie5.jpg";
import industrie6 from "../src/assets/industrie6.jpg";

import Footer from "./components/Footer";
import Colabs from "./components/Colabs";
import Subscribe from "./components/Subscribe";
import Testimonials from "./components/Testimonials";
import AboutUs from "./components/AboutUs";

function App() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>

      <header className="header">
        <div className="header__navigation">
          <div className="header__logoBox">
          <img
              src="https://www.tecnos.ro/wp-content/uploads/2018/05/logo-tecnos.png"
              alt="Romstal"
              className="header__logo"
              width={250}
            />
          </div>

          <nav className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__item">
                <a className="header__nav__text" href="#">
                  Acasa
                </a>
              </li>
              <li className="header__nav__item">
                <a className="header__nav__text" href="#">
                  Produse <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <ul className="header__nav__dropdown">
                  <li className="header__nav__dropdown__item">
                    <a href="#">Categorie 1</a>
                  </li>
                  <li className="header__nav__dropdown__item">
                    <a href="#">Categorie 2</a>
                  </li>
                  <li className="header__nav__dropdown__item">
                    <a href="#">Categorie 3</a>
                  </li>
                  <li className="header__nav__dropdown__item">
                    <a href="#">Categorie 4</a>
                  </li>
                </ul>
              </li>

              <li className="header__nav__item">
                <a className="header__nav__text" href="#">
                  Aplicatii si tehnologie <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <ul className="header__nav__dropdown">
                  <li className="header__nav__dropdown__item">
                    <a href="#">Ametek Brookfield</a>
                  </li>
                  <li className="header__nav__dropdown__item">
                    <a href="#">BYK-Gardner</a>
                  </li>
                  <li className="header__nav__dropdown__item">
                    <a href="#">Vaisala</a>
                  </li>
                  <li className="header__nav__dropdown__item">
                    <a href="#">Zorn Instruments</a>
                  </li>
                </ul>
              </li>

              <li className="header__nav__item">
                <a className="header__nav__text" href="#">
                  Industri <FontAwesomeIcon icon={faAngleDown} />
                </a>
                <ul className="header__nav__dropdown">
                  <li className="header__nav__dropdown__item">
                    <a href="#">Ametek Brookfield</a>
                  </li>
                  <li className="header__nav__dropdown__item">
                    <a href="#">BYK-Gardner</a>
                  </li>
                  <li className="header__nav__dropdown__item">
                    <a href="#">Vaisala</a>
                  </li>
                  <li className="header__nav__dropdown__item">
                    <a href="#">Zorn Instruments</a>
                  </li>
                </ul>
              </li>

              <li className="header__nav__item">
                <a className="header__nav__text" href="#">
                  Partenerii
                </a>
              </li>
            </ul>
          </nav>

          <div className="header__searchBox">
            <FontAwesomeIcon icon={faPhone} />
            <FontAwesomeIcon icon={faSearch} />
          </div>
        </div>

        <div className="header__brandMessage">
          <h2> DEDICATED TO QUALITY</h2>
        </div>

        <BootstrapCarousel>
          <BootstrapCarousel.Item>
            <div className="carousel-item-overlay">
              <video className="d-block w-100" autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </BootstrapCarousel.Item>
          <BootstrapCarousel.Item>
            <div className="carousel-item-overlay">
              <video className="d-block w-100" autoPlay loop muted>
                <source src={video2} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </BootstrapCarousel.Item>
          <BootstrapCarousel.Item>
            <div className="carousel-item-overlay">
              <video className="d-block w-100" autoPlay loop muted>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </BootstrapCarousel.Item>
        </BootstrapCarousel>
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
                Colaborarile pe termen lung si increderea clientilor in noi si
                in produsele noastre ne obliga sa fim mereu mai buni in tot ceea
                ce inseamna angajamentul nostru de calitate fata de partenerii
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
                tehnico-economica stabilita prin discutii ale clientului cu
                echipa noastra de vanzari.
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
                Colaborarile pe termen lung si increderea clientilor in noi si
                in produsele noastre ne obliga sa fim mereu mai buni in tot ceea
                ce inseamna angajamentul nostru de calitate fata de partenerii
                nostri.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="industry">
        <div className="industry__title">
          <span>Descoperă Industriile Noastre</span>
          <h2>Industrii</h2>
        </div>
        <div className="industry__container">
          <div className="industry__card__number1">
            <img src={industrie1} alt="Webinar" />
            <div className="industry__card__number1__content">
              <h3>Titlul Industrie</h3>
              <p>Numele | Data | Ora | Durata |</p>
            </div>
            <a href=""></a>
          </div>

          <div className="industry__card__number2">
            <div className="industry__card__number2__thumb">
              <img src={industrie2} alt="Industrie" />
            </div>
            <div className="industry__card__number2__body">
              <div className="industry__card__number2__body__date">
                <a href="#">15.12.2025</a>
              </div>
              <h2 className="industry__card__number2__body__title">
                Titlu Industrie
              </h2>
              <h4 className="industry__card__number2__body__subtitle">
                Subtitlu Industrie
              </h4>
              <p className="industry__card__number2__body__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quia id nam corrupti. Assumenda consequatur, unde quos veritatis
                atque doloribus quae animi possimus autem placeat, suscipit
                officia debitis laudantium cupiditate.
              </p>
            </div>
          </div>

          <div className="industry__card__number3">
            <div className="industry__card__number3__image">
              <img src={industrie3} alt="Industrie" />
            </div>

            <div className="industry__card__number3__details">
              <h3>Titlu Industrie</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos adipisci architecto nemo unde dicta quaerat
                deserunt, optio provident facilis quam aut corporis aliquam
                placeat deleniti nisi doloribus, fugiat neque voluptas?
              </p>
            </div>
          </div>

          <div className="industry__card__number4">
            <img src={industrie4} alt="Industrie" />
            <div className="industry__card__number4__content">
              <h3>Titlul Industrie</h3>
              <p>Numele | Data | Ora | Durata |</p>
            </div>
            <a href="#"></a>
          </div>
          <div className="industry__card__number5">
            <img src={industrie5} alt="Industrie" />
            <div className="industry__card__number5__content">
              <h3>Titlul Industrie</h3>
              <p>Numele | Data | Ora | Durata |</p>
            </div>
            <a href="#"></a>
          </div>

          <div className="industry__card__number6">
            <img src={industrie6} alt="Industrie" />
            <div className="industry__card__number6__content">
              <h3>Titlul Industrie</h3>
              <p>Numele | Data | Ora | Durata |</p>
            </div>
            <a href="#"></a>
          </div>
        </div>
      </section>
      <AboutUs />

      <section className="webinars">
        <div className="webinars__title">
          <span>Descoperă Webinarele Noastre</span>
          <h2>Webinarii Gratuite</h2>
        </div>
        <div className="webinars__container">
          <div className="industry__card__number2">
            <div className="industry__card__number2__thumb">
              <img src={webinar1} alt="Industrie" />
            </div>
            <div className="industry__card__number2__body">
              <div className="industry__card__number2__body__date">
                <a href="#">15.12.2025</a>
              </div>
              <h2 className="industry__card__number2__body__title">
                Titlu Webinar
              </h2>
              <h4 className="industry__card__number2__body__subtitle">
                Subtitlu Webinar
              </h4>
              <p className="industry__card__number2__body__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quia id nam corrupti. Assumenda consequatur, unde quos veritatis
                atque doloribus quae animi possimus autem placeat, suscipit
                officia debitis laudantium cupiditate.
              </p>
            </div>
          </div>
          <div className="industry__card__number2">
            <div className="industry__card__number2__thumb">
              <img src={webinar2} alt="Industrie" />
            </div>
            <div className="industry__card__number2__body">
              <div className="industry__card__number2__body__date">
                <a href="#">15.12.2025</a>
              </div>
              <h2 className="industry__card__number2__body__title">
                Titlu Webinar
              </h2>
              <h4 className="industry__card__number2__body__subtitle">
                Subtitlu Webinar
              </h4>
              <p className="industry__card__number2__body__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quia id nam corrupti. Assumenda consequatur, unde quos veritatis
                atque doloribus quae animi possimus autem placeat, suscipit
                officia debitis laudantium cupiditate.
              </p>
            </div>
          </div>
          <div className="industry__card__number2">
            <div className="industry__card__number2__thumb">
              <img src={webinar3} alt="Industrie" />
            </div>
            <div className="industry__card__number2__body">
              <div className="industry__card__number2__body__date">
                <a href="#">15.12.2025</a>
              </div>
              <h2 className="industry__card__number2__body__title">
                Titlu Webinar
              </h2>
              <h4 className="industry__card__number2__body__subtitle">
                Subtitlu Webinar
              </h4>
              <p className="industry__card__number2__body__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quia id nam corrupti. Assumenda consequatur, unde quos veritatis
                atque doloribus quae animi possimus autem placeat, suscipit
                officia debitis laudantium cupiditate.
              </p>
            </div>
          </div>
          <div className="industry__card__number2">
            <div className="industry__card__number2__thumb">
              <img src={webinar4} alt="Industrie" />
            </div>
            <div className="industry__card__number2__body">
              <div className="industry__card__number2__body__date">
                <a href="#">15.12.2025</a>
              </div>
              <h2 className="industry__card__number2__body__title">
                Titlu Webinar
              </h2>
              <h4 className="industry__card__number2__body__subtitle">
                Subtitlu Webinar
              </h4>
              <p className="industry__card__number2__body__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quia id nam corrupti. Assumenda consequatur, unde quos veritatis
                atque doloribus quae animi possimus autem placeat, suscipit
                officia debitis laudantium cupiditate.
              </p>
            </div>
          </div>
          <div className="industry__card__number2">
            <div className="industry__card__number2__thumb">
              <img src={webinar5} alt="Industrie" />
            </div>
            <div className="industry__card__number2__body">
              <div className="industry__card__number2__body__date">
                <a href="#">15.12.2025</a>
              </div>
              <h2 className="industry__card__number2__body__title">
                Titlu Webinar
              </h2>
              <h4 className="industry__card__number2__body__subtitle">
                Subtitlu Webinar
              </h4>
              <p className="industry__card__number2__body__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quia id nam corrupti. Assumenda consequatur, unde quos veritatis
                atque doloribus quae animi possimus autem placeat, suscipit
                officia debitis laudantium cupiditate.
              </p>
            </div>
          </div>

          <div className="industry__card__number2">
            <div className="industry__card__number2__thumb">
              <img src={webinar6} alt="Industrie" />
            </div>
            <div className="industry__card__number2__body">
              <div className="industry__card__number2__body__date">
                <a href="#">15.12.2025</a>
              </div>
              <h2 className="industry__card__number2__body__title">
                Titlu Webinar
              </h2>
              <h4 className="industry__card__number2__body__subtitle">
                Subtitlu Webinar
              </h4>
              <p className="industry__card__number2__body__description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                quia id nam corrupti. Assumenda consequatur, unde quos veritatis
                atque doloribus quae animi possimus autem placeat, suscipit
                officia debitis laudantium cupiditate.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <Colabs />
      <Subscribe />
      <Footer />
      <FontAwesomeIcon icon={faWhatsapp} className="buttonSticky__call" />

    </>
  );
}

export default App;
