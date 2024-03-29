import React from "react";
import image from "../assets/industrie5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const AboutUs = () => {
  return (
    <section
      className="aboutUs"
      style={{
        backgroundImage: `url(${image})`,
      }}
    >
      <div className="aboutUs__container">
        <div className="aboutUs__content">
          <img
            src="https://www.tecnos.ro/wp-content/uploads/2018/05/logo-tecnos.png"
            alt="Romstal"
            className="aboutUs__logo"
            width={250}
          />
          <h2 className="heading__aboutUs">
            Expertiza Noastră în Testare și Măsurare
          </h2>
          <p className="description__aboutUs">
            La Tecnos, ne dedicăm să furnizăm cele mai avansate și precise
            echipamente de testare și măsurare pentru industria modernă. Fie că
            este vorba de testarea materialelor, controlul calității sau
            evaluarea performanței, aparatele noastre asigură rezultate fiabile
            și precise, ajutându-vă să atingeți standardele cele mai înalte de
            calitate și performanță.
          </p>
          <div className="aboutUs__container__btn">
            <button className="button button__main">Contact</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
