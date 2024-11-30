import React from "react";
import "../assets/Css/style.css";
import "../assets/Css/responsive.css";
import "bootstrap/dist/Css/bootstrap.min.css";
import 'bootstrap/dist/Css/bootstrap.min.css';
import Header from "./components/Header";
import Banner from "./components/Banner";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Popular from "./components/Popular";
import Feature from "./components/Feature";
const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Section1 />
      <Section2 />
      <Popular />
      <Feature />
    </div>
  );
};

export default App;
