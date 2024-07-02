import React from "react";
import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import Info from "../Components/Info.jsx";
import About from "../Components/About.jsx";
import Reviews from "../Components/Reviews.jsx";
import Footer from "../Components/Footer.jsx";

function Home() {
  return (
    <div className="home-section">
      <Navbar />
      <Hero />
      <Info />
      <About />
      <Reviews />
      <Footer />
    </div>
  );
}

export default Home;
