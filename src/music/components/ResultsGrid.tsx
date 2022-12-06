import React from "react";
import AlbumCard from "./AlbumCard";

type Props = {};

const ResultsGrid = (props: Props) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-4 g-0">
        {[1, 2, 3, 4, 5].map(() => (
          <div className="col">
            <AlbumCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsGrid;
