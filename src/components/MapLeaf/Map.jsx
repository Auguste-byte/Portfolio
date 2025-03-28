import React from 'react';
import userDatas from '../../data/UserData';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const Map = () => {
  const positionsCity = [49.441620, 1.090726];

  const customIcon = new L.Icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png', 
    iconSize: [25, 41], // Taille de l'icône
    iconAnchor: [12, 41], // Ancrage de l'icône
    popupAnchor: [1, -34], // Ancrage de la popup
  });

  return (
    <div style={{ width: '100%', height: '400px' }}>
    <MapContainer center={positionsCity} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={positionsCity} icon={customIcon}>
        <Popup>
          {userDatas.city}
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
};

export default Map;
