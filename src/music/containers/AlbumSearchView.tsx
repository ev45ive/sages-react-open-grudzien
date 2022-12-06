import React, { useEffect, useState } from "react";
import { fetchSearchResultsAPI } from "../../common/api/MusicApi";
import { Loader } from "../../common/components/Loader";
import { Album } from "../../common/model/Album";
import ResultsGrid from "../components/ResultsGrid";
import SearchForm from "../components/SearchForm";

type Props = {};

const AlbumSearchView = (props: Props) => {
  const [results, setResults] = useState<Album[]>([]);
  const [query, setQuery] = useState("batman");
  const [error, setError] = useState<Error>();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setResults([]);
    setError(undefined);

    fetchSearchResultsAPI(query)
      .then((data) => setResults(data))
      .catch((error) => setError(error))
      .finally(() => setIsLoading(false));
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
          {isLoading && <Loader />}
          {error && <p className="alert alert-danger my-2">{error.message}</p>}
          <ResultsGrid results={results} />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
