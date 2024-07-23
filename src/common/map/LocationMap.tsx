import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import 'leaflet-fullscreen/dist/Leaflet.fullscreen.js';
import 'leaflet-fullscreen/dist/leaflet.fullscreen.css';

import LeafletControlGeocoder from "./LeafletControlGeocoder";

const LocationMap = ({ setPosition, position = [28.2096, 83.9856] }) => {

   return (
      <MapContainer center={position} zoom={13} style={{ height: "40vh", width: "100%" }} >
         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
         <LeafletControlGeocoder setPosition={setPosition} />
      </MapContainer>
   );
};

export default LocationMap;