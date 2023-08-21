import { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import "../Styles/Map.css";


const Map = ({ addToFavorites }) => {
  const [selectedPizzeria, setSelectedPizzeria] = useState(null);
  const [pizzerias, setPizzerias] = useState([]);
  
  useEffect(() => {
    fetch('/api/pizzerias')
      .then(response => response.json())
      .then(data => setPizzerias(data))
      .catch(error => console.error(error));
  }, []);

    const showCustomMarkers = true;

    const mapStyles = {
    height: '500px',
    width: '100%',
  };

  const center = {
    lat: 41.3851,
    lng: 2.1734,
  };

  const handleAddToFavorites = (pizzeria) => {
    addToFavorites(pizzeria);
    setSelectedPizzeria(null);
  };

  const googleMapsApiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;

  return (
    
    <LoadScript googleMapsApiKey={googleMapsApiKey}>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={14}
        center={center}
        options={{
          mapTypeControl: false,
          streetViewControl: false,
          styles: [
            {
              featureType: 'poi',
              elementType: 'labels', 
              stylers: [{ visibility: showCustomMarkers ? 'off' : 'on' }],
            },
            {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 33
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "color": "#f2e5d4"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5dac6"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#c5c6c6"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#e4d7c6"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#fbfaf7"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#acbcc9"
            }
        ]
    }
          ],

        }}
      >
        {pizzerias.map(pizzeria => (
          <Marker
            key={pizzeria.id}
            position={{ lat: pizzeria.latitude, lng: pizzeria.longitude }}
            // icon={{
            //   url: 'client/src/assets/pizza-icon.svg',
            //   scaledSize: new window.google.maps.Size(30, 30),
            // }}
            onClick={() => setSelectedPizzeria(pizzeria)}
          />
        ))}

        {selectedPizzeria && (
          <InfoWindow
            position={{ lat: selectedPizzeria.latitude, lng: selectedPizzeria.longitude }}
            onCloseClick={() => setSelectedPizzeria(null)}
          >
            <div className='info-window'>
              <h3 className="info-window__title">{selectedPizzeria.name}</h3>
              <p className="info-window__address">{selectedPizzeria.address}</p>
              <img 
              src={selectedPizzeria.photo_url} 
              alt={selectedPizzeria.name} 
              className="info-window__photo"
              />
              <button 
              className="info-window__button"
              onClick={() => handleAddToFavorites(selectedPizzeria)}>Add to favorites</button>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;