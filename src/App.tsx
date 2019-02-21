import React, { Component, useState, useEffect } from "react";
import "./App.css";
import Nav from "./Nav";
import PaintingGrid, { Painting } from "./PaintingGrid/PaintingGrid";
import mockedPaintings from "./mocks/paintings.json";

const App = () => {
  const [paintings, setPaintings] = useState<Painting[]>([]);

  useEffect(() => setPaintings(mockedPaintings), []);

  return (
    <div className="App">
      <header>
        <Nav />
        <PaintingGrid paintings={paintings} />
      </header>
    </div>
  );
};

export default App;
