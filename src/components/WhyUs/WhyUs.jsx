import React from "react";
import ChooseBox from "../ChooseBox/ChooseBox";
import hand from "../../images/chooseus/choose-main.png";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <div className="why-choose-us-container" id="chooseus">
      <div className="why-choose-us-heading">
        <span>
          <p>Why</p>
          CHoose Us
        </span>
      </div>

      <div className="why-choose-us-content-container">
        <div className="why-choose-us-content-one">
          <ChooseBox
            img="fa-solid fa-wallet"
            title="CONNECT YOUR WALLET"
            text="Use Trust Wallet, Metamask or to connect to the app."
          />
          <ChooseBox
            img="fa-solid fa-pen-ruler"
            title="SELECT YOUR QUANTITY"
            text="Upload your crypto and set a title, description and price."
          />
          <ChooseBox
            img="fa-solid fa-bolt"
            title="CONFIRM TRANSACTION"
            text="Earn by selling your crypto on our marketplace."
          />
        </div>

        <div className="why-choose-us-content-image">
          <img src={hand} alt="hand image"></img>
        </div>

        <div className="why-choose-us-content-two">
          <ChooseBox
            img="fa-solid fa-satellite-dish"
            title="RECEIVE YOUR OWN NFTS"
            text="Invest all your crypto at one place on one platform."
          />
          <ChooseBox
            img="fa-solid fa-chess-knight"
            title="TAKE A MARKET
                  TO SELL"
            text="Discover, collect the right crypto collections to buy or sell."
          />
          <ChooseBox
            img="fa-solid fa-boxes-stacked"
            title="DRIVE YOUR COLLECTION"
            text="We make it easy to Discover, Invest and manage."
          />
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
