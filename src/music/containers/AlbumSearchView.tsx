import React from "react";
import { search } from "../../common/api/MusicApi";
import ResultsGrid from "../components/ResultsGrid";
import SearchForm from "../components/SearchForm";

type Props = {};

const AlbumSearchView = (props: Props) => {

  // TODO: 
  // 1. show mock results
  // 2. start with empty results, show results on 'Search' click

  // search('batman')

  return (
    <div>
      <div className="row">
        <div className="col">
          <SearchForm />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ResultsGrid />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
