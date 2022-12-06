import React, { useEffect, useState } from "react";
import { fetchSearchResultsAPI } from "../../common/api/MusicApi";
import { Album } from "../../common/model/Album";
import ResultsGrid from "../components/ResultsGrid";
import SearchForm from "../components/SearchForm";

type Props = {};

const AlbumSearchView = (props: Props) => {
  const [results, setResults] = useState<Album[]>([]);
  const [query, setQuery] = useState("batman");
  const [error, setError] = useState<Error>();

  useEffect(() => {
    const results = fetchSearchResultsAPI(query);
    results
      .then((data) => setResults(data.albums.items))
      .catch((error) => setError(error));
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
          {error && <p className="alert alert-danger my-2">{error.message}</p>}
          <ResultsGrid results={results} />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
