import React, { useEffect, useState } from "react";
import "./MarketUpdate.css";
import { HashLoader } from "react-spinners";
import Pagination from "./Pagination";
import { Link } from "react-router-dom";

const MarketUpdate = () => {

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(10);

  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

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

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = data.slice(firstPostIndex, lastPostIndex);

  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const override = {
    display: "block",
    margin: "7rem 0",
  };

  return (
    <div className="market-container" id="market">
      <h1 className="market-heading-text">Market Update</h1>

      <div className="market-content-scrollbar">
        <div className="market-head-content">
          <p>Coin</p>
          <p>Price</p>
          <p>24h Change</p>
          <p>Market Cap</p>
          <h3>Click on any coin to see details!</h3>
        </div>

        <div className="market-content-container">
          {isLoading ? (
            <HashLoader
              color={"purple"}
              cssOverride={override}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : null}
          {currentPosts.map((coin) => (
            <Link to={`/coin/${coin.id}`} key={coin.id}>
              <div className="market-content">
                <span className="market-image-text-container">
                  <img src={coin.image} alt={coin.image} />
                  {coin.name}
                </span>
                <p>$ {coin.current_price}</p>
                <p
                  className={
                    coin.price_change_percentage_24h?.toFixed(2) <= 0
                      ? "market-coin-text-red"
                      : "market-coin-text-green"
                  }
                >
                  {coin?.price_change_percentage_24h?.toFixed(2) + "%"}{" "}
                </p>
                <p>$ {numberWithCommas(coin.market_cap)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Pagination
            totalPosts={data.length}
            postsPerPage={postsPerPage}
            setCurrentPage={setCurrentPage}
            currentPage={currentPage}
          />
    </div>
  );
};

export default MarketUpdate;
