import { useState } from 'react';
import Map from './Map';
import FavoritePizzerias from './FavoritePizzerias';

const PizzeriasPage = () => {
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
      <Map 
      addToFavorites={addToFavorites} />
      <FavoritePizzerias 
      favoritePizzerias={favoritePizzerias} 
      removeFromFavorites={removeFromFavorites} />

    </div>
  );
};

export default PizzeriasPage;