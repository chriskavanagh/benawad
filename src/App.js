import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [people, setPeople] = useState([]);
  const [flatLocations, setFlatLocations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("https://randomuser.me/api/?results=20");
      setPeople(res.data.results);
      console.log(res.data.results);
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
    <div style={wrapperClass}>
      <h1 style={h1Class}>ReactJS Coding Interview</h1>
      {console.log(flatLocations)}
      <table>
        <tr>
          <th style={headerClass}>City</th>
          <th style={headerClass}>State</th>
          <th style={headerClass}>Country</th>
          <th style={headerClass}>Lat</th>
          <th style={headerClass}>Long</th>
        </tr>
        {flatLocations.map((p, i) => (
          <tr key={i}>
            <td style={h2Class}>{p.country}</td>
            <td style={h3Class}>{p.state}</td>
            <td style={h4Class}>{p.city}</td>
            <td style={latClass}>{p.coordinates.latitude}</td>
            <td>{p.coordinates.longitude}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;

const wrapperClass = {
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
};

const h1Class = {
  marginBottom: "5rem",
  marginTop: "1rem",
};

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

const latClass = {
  paddingLeft: "2rem",
  paddingRight: "3rem",
};

const headerClass = {
  fontSize: "21px",
  paddingBottom: "1.5rem",
  textDecoration: "underline",
};
