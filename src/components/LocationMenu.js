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
  { center: [9.744668474238297, 59.00108627952889], name: "Hytta" },
  { center: [10.605971690269234, 59.92285246253298], name: "Morra mi" },
  { center: [16.184159403173364, 54.30870986021159], name: "Morra di" },
  { center: [9.56724247599451, 58.84553861904199], name: "Deg" },
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
