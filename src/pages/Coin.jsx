import React, { useEffect, useState } from "react";
import "./Coin.css";
import { Link, useParams } from "react-router-dom";
import DOMPurify from "dompurify";
import { BiArrowBack } from "react-icons/bi";
import { HashLoader } from "react-spinners";

const Coin = () => {
  const { coinID } = useParams();

  const [coin, setCoin] = useState({});
  const [loadCoin, setLoadCoin] = useState(true);

  const url = `https://api.coingecko.com/api/v3/coins/${coinID}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Error!");
        }
        const json = await response.json();
        setLoadCoin(false);
        setCoin(json);
        console.log(coin);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [url]);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const override = {
    display: "block",
  };

  const h24 = coin.market_data ? coin.market_data.price_change_24h : "";

  return (
    <>
      <Link to="/">
        <BiArrowBack size={"4rem"} className="coin-go-back-btn"></BiArrowBack>
      </Link>
      {coin && (
        <div className="coin-container">
          <div className="coin-image-name">
            {loadCoin ? (
              <HashLoader
                color={"purple"}
                cssOverride={override}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : null}
            {coin.image ? <img src={coin.image.large} alt={coin.id} /> : null}
            <h4 className="coin-data-name">{coin.name}</h4>
            <p className="coin-data-rank">Rank #{coin.market_cap_rank}</p>
          </div>
          {loadCoin ? (
            <HashLoader
              color={"purple"}
              cssOverride={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : null}

          {coin && (
            <div className="coin-content">
              <div className="coin-content-first-row">
                <span>
                  24h Change:
                  <p className={h24 >= 0 ? "green-text" : "red-text"}>
                    {coin.market_data
                      ? coin.market_data.price_change_percentage_24h.toFixed(
                          2
                        ) + "%"
                      : ""}
                  </p>
                </span>

                <span>
                  Price:
                  <p className={"green-text"}>
                    {coin.market_data
                      ? "$" +
                        numberWithCommas(
                          coin.market_data.current_price.usd.toFixed(2)
                        )
                      : null}
                  </p>
                </span>

                <span>
                  Symbol:
                  <p className="purple-text">{coin.symbol}</p>
                </span>
              </div>

              <div className="coin-content-description">
                <p
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(
                      coin.description ? coin.description.en : ""
                    ),
                  }}
                ></p>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Coin;
