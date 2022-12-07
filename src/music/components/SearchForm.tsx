import React, { useEffect, useRef, useState } from "react";

type Props = {
  onSearch: (query: string) => void;
};

const SearchForm = (props: Props) => {
  const [localQuery, setLocalQuery] = useState("");

  useEffect(() => {
    // console.log("Start search...", localQuery);

    const handle = setTimeout(() => {
      // console.log("Finish search...", localQuery);
      props.onSearch(localQuery)
    }, 500);

    // before next effect run & before destory
    return () => {
      clearTimeout(handle);
      // console.log("cancel!");
    };
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
