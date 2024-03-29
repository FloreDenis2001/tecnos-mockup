import React from "react";
import video from "../assets/backgroundVideo.mp4";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (


      <section className="testimonials">
        <div className="testimonials__container">
          <div className="testimonials__title">
            <p className="testimonials__subheading">Testimoniale</p>
            <h1 className="testimonials__heading">Ce spun clientii nostri ?</h1>
          </div>
          <div className="testimonials__content">
            <div className="testimonials__content__item">
              <div className="testimonials__content__starsBox">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <div className="testimonials__content__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>

              <div className="testimonials__content__item__profile">
                <div className="testimonials__content__item__profile__info">
                  <h3>Jessica Brown</h3>
                  <p>Client</p>
                </div>
              </div>
            </div>
            <div className="testimonials__content__item">
              <div className="testimonials__content__starsBox">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <div className="testimonials__content__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>

              <div className="testimonials__content__item__profile">
                <div className="testimonials__content__item__profile__info">
                  <h3>Edna Marxten</h3>
                  <p>Client</p>
                </div>
              </div>
            </div>
            <div className="testimonials__content__item">
              <div className="testimonials__content__starsBox">
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
              </div>

              <div className="testimonials__content__text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>

              <div className="testimonials__content__item__profile">
                <div className="testimonials__content__item__profile__info">
                  <h3>John Doe</h3>
                  <p>Client</p>
                </div>
              </div>
            </div>
         
          </div>
        </div>
      </section>
 

  );
};

export default Testimonials;
