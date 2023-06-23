import React from "react";
import { ReactComponent as IconSearch } from "bootstrap-icons/icons/search.svg";
import { useNavigate } from "react-router-dom";
const Search = () => {
  const Navigate = useNavigate();
  
  return (
    <form action="#" className="search">
      <div className="input-group">
        <input
          id="search"
          name="search"
          type="text"
          className="form-control"
          placeholder="Search"
          required
        />
        <label className="visually-hidden" htmlFor="search"></label>
        <button
          className="btn btn-primary text-white"
          type="submit"
          aria-label="Search"
          onClick={(e) => {Navigate("/category");}}
        >
          <IconSearch />
        </button>
      </div>
    </form>
  );
};
export default Search;
