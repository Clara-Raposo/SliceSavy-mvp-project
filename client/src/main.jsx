import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// const googleMapsApiKey = import.meta.env.VITE_APP_GOOGLE_MAPS_API_KEY;

// function loadGoogleMapsScript() {
//   const script = document.createElement('script');
//   script.src = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}&libraries=places`;
//   script.async = true;
//   script.defer = true;
//   document.head.appendChild(script);
// }

// loadGoogleMapsScript();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
