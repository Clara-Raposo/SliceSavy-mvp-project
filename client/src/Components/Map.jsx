import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = () => {
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

  // if (pizzerias.length === 0) {
  //   return <div>Loading...</div>;
  // }

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
          />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
