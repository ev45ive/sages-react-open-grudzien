import React, { useState } from "react";

type Props = {
  onSearch: (query: string) => void;
};

const SearchForm = (props: Props) => {
  const [localQuery, setLocalQuery] = useState("");

  const search = () => props.onSearch(localQuery);

  return (
    <div className="mb-3">
      <div className="input-group">
        <input
          id="searchinput"
          type="text"
          className="form-control"
          placeholder="Search"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.currentTarget.value)}
        />

        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={search}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
