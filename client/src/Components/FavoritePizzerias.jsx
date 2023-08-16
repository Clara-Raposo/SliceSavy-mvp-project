import React from 'react';

const FavoritePizzerias = ({ favoritePizzerias, removeFromFavorites }) => {
  return (
    <div>
      <h2>Favoritos</h2>
      <ul>
        {favoritePizzerias.map(pizzeria => (
          <li key={pizzeria.id}>
            {pizzeria.name} - {pizzeria.address}
            <button onClick={() => removeFromFavorites(pizzeria.id)}>Eliminar de Favoritos</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritePizzerias;


