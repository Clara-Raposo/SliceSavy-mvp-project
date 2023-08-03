// src/components/Map.js
import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Map = () => {
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
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
