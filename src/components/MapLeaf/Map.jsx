import React from 'react';
import userDatas from '../../data/UserData';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';



const Map = () => {
  const positionsCity = [49.441620, 1.090726];

  return (
    <div style={{ width: '100%', height: '400px' }}>
    <MapContainer center={positionsCity} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={positionsCity}>
        <Popup>
          {userDatas.city}
        </Popup>
      </Marker>
    </MapContainer>
    </div>
  );
};

export default Map;
