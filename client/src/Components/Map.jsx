import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const Map = () => {
  const [selectedPizzeria, setSelectedPizzeria] = useState(null);
  const [pizzerias, setPizzerias] = useState([]);

  useEffect(() => {
    fetch('/api/pizzerias')
      .then(response => response.json())
      .then(data => setPizzerias(data))
      .catch(error => console.error(error));
  }, []);

  const mapStyles = {
    height: '500px',
    width: '100%',
  };

  const center = {
    lat: 41.3851,
    lng: 2.1734,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDFFy5w5u2Nx1ydPNOUn_tMfLrd9zQnF1E">
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={center}
      >
        {pizzerias.map(pizzeria => (
          <Marker
            key={pizzeria.id}
            position={{ lat: pizzeria.latitude, lng: pizzeria.longitude }}
            onClick={() => setSelectedPizzeria(pizzeria)}
          />
        ))}

        {selectedPizzeria && (
          <InfoWindow
            position={{ lat: selectedPizzeria.latitude, lng: selectedPizzeria.longitude }}
            onCloseClick={() => setSelectedPizzeria(null)}
          >
            <div>
              <h3>{selectedPizzeria.name}</h3>
              <p>{selectedPizzeria.address}</p>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;



