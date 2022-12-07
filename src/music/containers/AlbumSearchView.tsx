import React from "react";
import { useSearchParams } from "react-router-dom";
import { Loader } from "../../common/components/Loader";
import ResultsGrid from "../components/ResultsGrid";
import SearchForm from "../components/SearchForm";
import { useFetchAlbumSearchResults } from "../../common/hooks/useFetchAlbumSearchResults";
import { useQuery } from "@tanstack/react-query";
import { fetchSearchResultsAPI } from "../../common/api/MusicApi";

type Props = {};

const AlbumSearchView = (props: Props) => {
  let [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("q") || "";

  const {
    data: results = [],
    error,
    isInitialLoading
  } = useQuery(

    // Deduplication Key
    ["searchAlbums", query],

    // Fetcher + Abort
    ({ signal }) => fetchSearchResultsAPI(query, { signal }),

    // Options:
    {
      enabled: query !== "",
    }
  );

  return (
    <div>
      <div className="row">
        <div className="col">
          <SearchForm onSearch={(q) => setSearchParams({ q })} query={query} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          {isInitialLoading && <Loader />}
          {error instanceof Error && (
            <p className="alert alert-danger my-2">{error.message}</p>
          )}
          <ResultsGrid results={results} />
        </div>
      </div>
    </div>
  );
};

export default AlbumSearchView;
