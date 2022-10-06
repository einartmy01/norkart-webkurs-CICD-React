import React from "react";

const menuStyle = {
  position: "absolute",
  background: "white",
  padding: 20,
  zIndex: "2",
  top: "10vh",
  display: "flex",
};

const locations = [
  { center: [59.00108627952889, 9.744668474238297], name: "Hytta" },
  { center: [59.92285246253298, 10.605971690269234], name: "Morra mi" },
  { center: [61.27638852383443, 6.500936798919031], name: "Morra di" },
];

const LocationMenu = (props) => {
  const map = props.mapConnection;
  console.log(map);
  
  const flyTo = (coordinates) => {
    map.flyTo({ center: coordinates });
  };

  // Om vi har tilgang til kartet, render component. Ellers returner et tomt HTML objekt.
  return (
    <>
      {map ? (
        <div style={menuStyle}>
          {locations.map((location) => (
            <div key={location.center}>
              <input
                id={location.center}
                type="radio"
                name="rtoggle"
                value={location.center}
                onClick={() => flyTo(location.center)}
              />
              <label>{location.name}</label>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default LocationMenu;
