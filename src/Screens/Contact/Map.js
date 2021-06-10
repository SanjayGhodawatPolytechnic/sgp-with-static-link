import React from "react";
import Main from "../../ReusableComponents/Main";
import "./CSS/Map.css";
import mapboxgl from "mapbox-gl/dist/mapbox-gl-csp";
// eslint-disable-next-line import/no-webpack-loader-syntax
import MapboxWorker from "worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker";
import { useRef } from "react";
import { useState } from "react";
import { useEffect } from "react";

mapboxgl.workerclassName = MapboxWorker;
mapboxgl.accessToken =
  "pk.eyJ1IjoieWFzaDEwIiwiYSI6ImNrYnRiaXQwMTA4ZzMzNW42ZnpnamVyZnkifQ.3QjWS75fymRHz312BZWWiQ";

const LocationMap = () => {
  const mapContainer = useRef();
  const [lng, setLng] = useState(74.383302);
  const [lat, setLat] = useState(16.743425);
  const [zoom, setZoom] = useState(9);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [lng, lat],
      zoom: zoom,
    });

    var marker = new mapboxgl.Marker({
      color: "	#FF0000",
      draggable: true,
    })
      .setLngLat([lng, lat])
      .addTo(map);

    return () => map.remove();
  }, []);

  return (
    <div
      style={{ height: "90vh", width: "105%" }}
      className="p-0 m-0"
      ref={mapContainer}
    ></div>
  );
};

export default LocationMap;
