import React from "react";
import "./Join.css";
import coinImage1 from '../../images/hero/bitcoin.png'
import coinImage2 from '../../images/hero/ethereum.png'

const Join = () => {
  return (
    <div className="join-container" id="join">
      <img src={coinImage1} className="join-container-floating-coin-image-one" alt="coin image" />
      <img src={coinImage2} className="join-container-floating-coin-image-two" alt="coin image" />
      <div className="join-container-text-one">
        <h1>join us via</h1>
      </div>
      <div className="join-container-text-two">
        <h1>discord</h1>
      </div>
      <div className="join-container-text-three">
        <p>Invest and manage all your crypto at one place.</p>
      </div>

      <a href="https://discord.com/login?redirect_to=%2Fchannels%2F%40me" target="_blank" className="join-container-join-button">
          Join via Discord
      </a>
    </div>
  );
};

export default Join;
