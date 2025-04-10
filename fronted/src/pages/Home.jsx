import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import HomeInfo from "../components/HomeInfo";
import AboutHero from "../components/AboutHero";

const Home = () => {

  return (
    <div className="bg-transparent">
      <Header />
      <HeroSection />
      <HomeInfo />
      <AboutHero />
      <Footer />
    </div>
  );
};

export default Home;
