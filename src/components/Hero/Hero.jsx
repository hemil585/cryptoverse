import React, { useEffect, useState } from "react";
import "./Hero.css";
import { HashLoader } from "react-spinners";
import { Link } from "react-router-dom";

const Hero = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const override = {
    display: "block",
    margin: "7rem 0",
  };

  return (
    <>
      <div className="hero-container" id="home">
        <div className="hero-content">
          <div className="hero-content-text">
            <h1>
              Track and Trade
              <br /> <span>Crypto currencies</span>
            </h1>
          </div>
        </div>

        <div className="hero-coins-slider">
          {isLoading ? (
            <HashLoader
              color={"purple"}
              cssOverride={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : null}
          {data.map((coin) => (
            <Link to={`coin/${coin.id}`}>
            <div className="hero-coin" key={coin.id}>
              <div className="hero-floating-image-container">
                <img src={coin.image} alt={coin.name} />
              </div>
              <span className="hero-coin-content">
                <h4>{coin.name}</h4>
                <h5
                  className={
                    coin.price_change_percentage_24 >= 1
                      ? "hero-coin-text-green"
                      : "hero-coin-text-red"
                  }
                >
                  {coin?.price_change_percentage_24h?.toFixed(2) + "%"}{" "}
                </h5>
              </span>

              <div className="hero-coin-price">
                <h3>
                  {"$ " + numberWithCommas(coin.current_price?.toFixed(2))}
                </h3>
              </div>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Hero;
