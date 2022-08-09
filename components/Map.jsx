import React from "react";
import { useState } from "react";
import ReactMapGL from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import { Marker, Popup } from "react-map-gl";
import { LocationMarkerIcon } from "@heroicons/react/solid";

function Map({ searchResult }) {
  const [selectLocation, setSelectLocation] = useState({});

  const coordinates = searchResult.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    longitude: center.longitude,
    latitude: center.latitude,
    zoom: 11,
    width: "100%",
    height: "100vh",
  });

  return (
    <ReactMapGL
      mapboxAccessToken={process.env.mapbox_key}
      {...viewport}
      onMove={(nextViewport) => setViewport(nextViewport.viewport)}
      mapStyle="mapbox://styles/rehoge1071/cl5ojybew001w16l6xthnrdcy"
    >
      {searchResult.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            offsetLeft={-20}
            offsetTopt={-10}
            captureScroll={false}
          >
            <p
              onClick={() => setSelectLocation(result)}
              className=" cursor-pointer text-2xl hover:animate-bounce"
            >
              📍
            </p>
          </Marker>

          {selectLocation.long === result.long ? (
            <Popup
              onClose={() => setSelectLocation({})}
              closeOnclick={true}
              latitude={result.lat}
              longitude={result.long}
            >
              {result.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
}

export default Map;
