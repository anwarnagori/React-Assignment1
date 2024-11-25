import React from "react";
import "../assets/Css/style.css";
import "../assets/Css/responsive.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Section1 from "./components/Section1";
import Section2 from "./Section2";
import Popular from "./components/Popular";
const App = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Section1 />
      <Section2 />
      <Popular />
    </div>
  );
};

export default App;
