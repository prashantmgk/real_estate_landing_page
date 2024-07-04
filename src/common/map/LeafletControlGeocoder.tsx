import { useEffect, useRef } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";

import icon from "./constants";

export default function LeafletControlGeocoder({ setPosition }) {
   const map = useMap();
   const markerRef = useRef(null);

   useEffect(() => {
      const geocoder = L.Control.Geocoder.nominatim();

      // Create a marker at the center of the map on start if it doesn't exist
      if (!markerRef.current) {
         const center = map.getCenter();
         markerRef.current = L.marker(center, { icon, draggable: true })
            .addTo(map)
            .on("dragend", function () {
               const position = (markerRef.current as L.Marker)?.getLatLng();
               geocoder.reverse(
                  position,
                  map.options.crs.scale(map.getZoom()),
                  (results) => {
                     const result = results[0];
                     if (result) {
                        setPosition({
                           lat: position.lat,
                           lng: position.lng,
                           address: result.name,
                        });
                     }
                  }
               );
            });
      }

      const geocoderControl = L.Control.geocoder({
         defaultMarkGeocode: false,
         geocoder: geocoder,
      })
         .on("markgeocode", function (e) {
            const latlng = e.geocode.center;
            const address = e.geocode.name;

            setPosition({ lat: latlng.lat, lng: latlng.lng, address });

            // Update the marker position without removing it
            if (markerRef.current) {
               (markerRef.current as L.Marker).setLatLng(latlng).update();
            }

            map.fitBounds(e.geocode.bbox);
         })
         .addTo(map);

      //  map.scrollWheelZoom.disable();

      map.on("click", function (e) {
         const latlng = e.latlng;
         geocoder.reverse(
            latlng,
            map.options.crs.scale(map.getZoom()),
            (results) => {
               const result = results[0];
               if (result) {
                  setPosition({ lat: latlng.lat, lng: latlng.lng, address: result.name });

                  // Update the marker position without removing it
                  if (markerRef.current) {
                     (markerRef.current as L.Marker).setLatLng(latlng).update();
                  }
               }
            }
         );
      });

      return () => {
         map.removeControl(geocoderControl);
      };
   }, [map, setPosition]);

   return null;
}
