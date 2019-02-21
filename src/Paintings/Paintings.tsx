import React, { useState, useEffect } from "react";
import PaintingGrid, { Painting } from "../shared/PaintingGrid";
import mockedPaintings from "../mocks/paintings.json";

const Paintings: React.StatelessComponent = () => {
  const [paintings, setPaintings] = useState<Painting[]>([]);

  useEffect(() => setPaintings(mockedPaintings), []);

  return <PaintingGrid paintings={paintings} />;
};

export default Paintings;
