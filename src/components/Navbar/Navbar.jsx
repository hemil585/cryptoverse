import React, { useState } from "react";
import "./Navbar.css";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="navbar-container">
        <div className="navbar-logo">
          <h3>CRYPTOVERSE</h3>
        </div>

        <div className="navbar-content">
          <a href="#home">Home</a>
          <a href="#market">Market</a>
          <a href="#chooseus">Choose Us</a>
          <a href="#join">Join</a>
        </div>

        <div className="navbar-socials">
          <a href="https://discord.com/" target="_blank">
            <BsDiscord size={"3rem"} className="navbar-discord-logo" />
          </a>
          <a href="https://twitter.com/i/flow/login" target="_blank">
            <BsTwitter size={"3rem"} className="navbar-twitter-logo" />
          </a>
          <AiOutlineMenu
            size={"3rem"}
            className="navbar-hamburger-menu"
            onClick={toggleMenu}
          />
        </div>
      </div>

      {showMenu && (
        <div className={`mobile-hamburger-menu ${showMenu ? "active" : ""}`}>
          <ImCross
            onClick={toggleMenu}
            size={"2em"}
            className="mobile-hamburger-menu-cross-btn"
          />
          <a onClick={toggleMenu} href="#home">
            Home
          </a>
          <a onClick={toggleMenu} href="#market">
            Market
          </a>
          <a onClick={toggleMenu} href="#chooseus">
            Choose Us
          </a>
          <a onClick={toggleMenu} href="#join">
            Join
          </a>
        </div>
      )}
    </>
  );
};

export default Navbar;
