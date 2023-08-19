import "../Styles/FavoritePizzerias.css";
import { HiOutlineX } from "react-icons/hi";

const FavoritePizzerias = ({ favoritePizzerias, removeFromFavorites }) => {
  return (
    <div className="favorite-pizzerias">
      <h2 className="favorite-pizzerias__title">Favorites</h2>
      <ul className="favorite-pizzerias__list">
        {favoritePizzerias.map(pizzeria => (
          <li key={pizzeria.id} className="favorite-pizzerias__item">
            <div className="favorite-pizzerias__info">
              <span className="favorite-pizzerias__name">{pizzeria.name}</span>
              <button
                className="favorite-pizzerias__remove-button"
                onClick={() => removeFromFavorites(pizzeria.id)}
              >
                <HiOutlineX />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FavoritePizzerias;


