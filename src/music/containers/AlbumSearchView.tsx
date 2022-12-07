import React from "react";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../../common/components/Loader";
import ResultsGrid from "../components/ResultsGrid";
import SearchForm from "../components/SearchForm";
import { useFetchAlbumSearchResults } from "../../common/hooks/useFetchAlbumSearchResults";

type Props = {};

const AlbumSearchView = (props: Props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const { data: results, error, isLoading } = useFetchAlbumSearchResults(query);

  return (
    <div>
      <div className="row">
        <div className="col">
          <SearchForm onSearch={(q) => setSearchParams({ q })} query={query} />
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
