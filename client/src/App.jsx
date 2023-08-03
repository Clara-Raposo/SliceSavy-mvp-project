import React from "react";
import "./App.css";
import Navbar from './Components/Navbar';
import Map from './Components/Map';
//import FavoritePizzerias from './Components/FavoritePizzerias';
//import Footer from './Components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <Map />
    </div>
  );
};

export default App;