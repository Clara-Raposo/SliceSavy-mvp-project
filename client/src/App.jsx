import { useState } from 'react';
import "./App.css";
import Navbar from './Components/Navbar';
import Map from './Components/Map';
import FavoritePizzerias from './Components/FavoritePizzerias';
import Footer from './Components/Footer';

const App = () => {
  const [favoritePizzerias, setFavoritePizzerias] = useState([]);

  const addToFavorites = (pizzeria) => {
    if (!favoritePizzerias.some(item => item.id === pizzeria.id)) {
      setFavoritePizzerias(prevFavorites => [...prevFavorites, pizzeria]);
    }
  };

  const removeFromFavorites = (pizzeriaId) => {
    setFavoritePizzerias(prevFavorites => prevFavorites.filter(item => item.id !== pizzeriaId));
  };

  return (
    <div>
      <Navbar />
      <Map 
      addToFavorites={addToFavorites} />
      <FavoritePizzerias 
      favoritePizzerias={favoritePizzerias} 
      removeFromFavorites={removeFromFavorites} />
      <Footer />
    </div>
  );
};


// const App = () => {
//   return (
//     <div>
//       <Navbar />
//       <Map />
//       <FavoritePizzerias />
//     </div>
//   );
// };

export default App;