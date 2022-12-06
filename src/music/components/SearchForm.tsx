import React from "react";

type Props = {};

const SearchForm = (props: Props) => {
  return (
    <div className="mb-3">
      <div className="input-group">
        <input type="text" className="form-control" placeholder="Search" />
        <button className="btn btn-outline-secondary" type="button">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchForm;
