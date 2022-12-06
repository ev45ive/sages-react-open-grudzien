import React, { useEffect, useState } from "react";
import { fetchSearchResultsAPI } from "../../common/api/MusicApi";
import { Album } from "../../common/model/Album";
import ResultsGrid from "../components/ResultsGrid";
import SearchForm from "../components/SearchForm";

type Props = {};

const AlbumSearchView = (props: Props) => {
  const [results, setResults] = useState<Album[]>([]);
  const [query, setQuery] = useState("batman");

  useEffect(() => {
    const results = fetchSearchResultsAPI(query);
    results.then((data) => setResults(data));
  }, [query]);

  return (
    <div>
      <div className="row">
        <div className="col">
          <SearchForm onSearch={setQuery} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ResultsGrid results={results} />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
