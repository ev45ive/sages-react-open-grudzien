import React, { useEffect, useRef, useState } from "react";

type Props = {
  onSearch: (query: string) => void;
  query: string;
};

const SearchForm = (props: Props) => {
  const [localQuery, setLocalQuery] = useState(props.query);

  useEffect(() => setLocalQuery(props.query), [props.query]);

  // Debounce:
  useEffect(() => {
    if (props.query === localQuery) return;

    const handle = setTimeout(() => props.onSearch(localQuery), 500);
    return () => clearTimeout(handle);
  }, [localQuery]);

  return (
    <form
      className="mb-3"
      onSubmit={(event) => {
        event.preventDefault();
        props.onSearch(localQuery);
      }}
    >
      <div className="input-group">
        <input
          id="searchinput"
          type="text"
          className="form-control"
          placeholder="Search"
          value={localQuery}
          onChange={(e) => setLocalQuery(e.currentTarget.value)}
        />

        <button className="btn btn-outline-secondary" type="submit">
          Search
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
