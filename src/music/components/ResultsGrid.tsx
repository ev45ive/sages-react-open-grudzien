import React from "react";
import { Album } from "../../common/model/Album";
import AlbumCard from "./AlbumCard";

type Props = { results: Album[]; };

const ResultsGrid = (props: Props) => {
  return (
    <div>
      <div className="row row-cols-1 row-cols-sm-4 g-0">
        {props.results.map((result) => (
          <div className="col" key={result.id}>
            <AlbumCard album={result} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResultsGrid;
