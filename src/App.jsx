import React from "react";
import Navbar from "./Components/Navbar/Navbar.jsx";
import Hero from "./Components/Hero/Hero.jsx";
import Products from "./Components/Products/Products.jsx";
import Title from "./Components/Title/Title.jsx";
import Feature from "./Components/Feature/Feature.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title />
        <Products />
        <Feature />
      </div>
    </div>
  );
};

export default App;
