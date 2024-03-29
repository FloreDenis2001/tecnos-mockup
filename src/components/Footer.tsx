import React from "react";
import image from "../assets/massage_bg.png";
import image2 from "../assets/background-footer.png";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram, faPinterest, faWhatsapp, faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <section className="footer">
 
      <div className="footer__container" >
        <div className="footer__container__actions">
          <div className="footer__container__actions__subscribe">
            <div className="footer__container__actions__subscribe__title">
              <p>help@tecnos.com</p>
              <span>+ 92 ( 8800 ) - 6930</span>
            </div>

            <div className="footer__container__actions__subscribe__input">
              <input type="text" placeholder="Email address" />
              <FontAwesomeIcon icon={faPaperPlane} />
            </div>
          </div>

          <div className="footer__container__actions__links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="">Acasa</a>
              </li>
              <li>
                <a href="">Produse</a>
              </li>
              <li>
                <a href="">Aplicatii si tehnologie </a>
              </li>
              <li>
                <a href="">Industrii</a>
              </li>
              <li>
                <a href="">Partenerii</a>
              </li>
            
            </ul>
          </div>

          <div className="footer__container__actions__timming">
            <h3>Orar</h3>
            <p>Luni - Vineri: 09:00 - 20:00</p>
            <p>Sâmbătă: 09:00 - 16:00</p>
            <p>Duminică: Închis</p>
          </div>

          <div className="footer__container__actions__socialMedia">
            <div className="footer__container__actions__socialMedia__icons">
                <FontAwesomeIcon icon={faXTwitter} />
                <FontAwesomeIcon icon={faFacebookF} />
                <FontAwesomeIcon icon={faPinterest} />
                <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="footer__container__actions__socialMedia__address">
                <p>Str. Dej, Nr. 40, Cod Postal 012284</p>
                <p>Sector 1, Bucuresti, Romania</p>
            </div>
          </div>
        </div>
        <div className="footer__container__bottom">
          <div className="footer__container__bottom__content">
            <p>© 2024 Flore Denis. All Rights Reserved</p>
          </div>
          <div className="footer__container__bottom__content">
            <p>Terms Of Use</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>


    </section>
  );
};

export default Footer;