import React from "react";
import "./Footer.css";
import image1 from "../../images/footer/footer-bg.png";
import {
  BsTwitter,
  BsDiscord,
  BsFacebook,
  BsYoutube,
  BsInstagram,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-image">
        <img src={image1} alt="footer-image" />
        <div className="footer-socials-logos">
          <a href="https://twitter.com/i/flow/login" target="_blank">
            <BsTwitter className="footer-twitter" size={"3rem"} />
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <BsInstagram className="footer-instagram" size={"3rem"} />
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <BsFacebook className="footer-facebook" size={"3rem"} />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <BsYoutube className="footer-youtube" size={"3rem"} />
          </a>
          <a href="https://discord.com/" target="_blank">
            <BsDiscord className="footer-discord" size={"3rem"} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
