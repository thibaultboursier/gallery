import React, { useState, useEffect } from "react";
import PaintingGrid, { Painting } from "../shared/PaintingGrid";
import mockedPaintings from "../mocks/paintings.json";

const Home: React.StatelessComponent = () => {
  const [paintings, setPaintings] = useState<Painting[]>([]);

  useEffect(() => setPaintings(mockedPaintings.slice(0, 6)), []);

  return <PaintingGrid paintings={paintings} />;
};

export default Home;
