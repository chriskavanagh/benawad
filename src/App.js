import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [flatLocations, setFlatLocations] = useState([]);
  const h3Class = {
    marginLeft: "1rem",
    color: "#808000",
  };

  const h2Class = {
    color: "#CD5C5C",
    fontWeight: "bolder",
    marginLeft: "1rem",
  };

  const h4Class = {
    color: "#191970",
    fontWeight: "bold",
    marginLeft: "1rem",
  };

  const longitudeClass = {
    display: "inline-block",
    marginLeft: "15px",
  };

  const latitudeClass = {
    display: "inline-block",
    marginLeft: "1rem",
  };

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://randomuser.me/api/?results=20");
      setPeople(res.data.results);
    };
    fetchData();
  }, []);

  function flatten(objects) {
    return objects.map(({ location }) => location);
  }

  useEffect(() => {
    setFlatLocations(flatten(people));
  }, [people]);

  return (
    <div>
      <h1>ReactJS Coding Interview</h1>
      {console.log(flatLocations)}
      {flatLocations.map((p, i) => (
        <div key={i}>
          <h2 style={h2Class}>{p.country}</h2>
          <h3 style={h3Class}>{p.state}</h3>
          <h4 style={h4Class}>{p.city}</h4>
          <h4 style={latitudeClass}>Lat: {p.coordinates.latitude}</h4>
          <h4 style={longitudeClass}>Long: {p.coordinates.longitude}</h4>
          <hr />
        </div>
      ))}
      <hr />
    </div>
  );
}

export default App;
