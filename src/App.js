import "./App.css";
import "./style/customStyle.css";
import Navigation from "./Components/Header/Navigation";
import Hero from "./Components/Header/Herro";
import CardBody from "./Components/Body/CardBody";
import MyPagination from "./Components/Body/myPagination";
import { useEffect, useState } from "react";
import { getMoviesList, searchMovie } from "./api/axiosClient";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <div className="header">
        <Navigation />
        <Hero />
      </div>
      <div className="body-content">
        <div className="card-content">
          <CardBody />
        </div>
        <MyPagination />
        <Footer/>
      </div>
    </>
  );
};

export default App;
