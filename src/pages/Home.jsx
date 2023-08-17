import React from "react";
import Hero from "../components/Hero/Hero";
import MarketUpdate from "../components/MarketUpdate/MarketUpdate";
import WhyUs from "../components/WhyUs/WhyUs";
import Join from "../components/Join/Join";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <MarketUpdate />
      <WhyUs />
      <Join />
      <Footer />
    </>
  );
};

export default Home;
