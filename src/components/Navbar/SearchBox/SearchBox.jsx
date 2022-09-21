import "./SearchBox.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../context/data-context";

const SearchBox = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const {
    dataState: { videos },
  } = useData();

  const navigate = useNavigate();

  const searchSuggestions = () => {
    if (searchKeyword !== "") {
      return videos.filter((video) =>
        video.title.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }
  };

  const performSearch = (keyword) => {
    if (keyword) {
      navigate(`/results?search_query=${encodeURIComponent(keyword)}`);
    }
    setSearchKeyword("");
  };

  return (
    <div className="flex-row wd-full search-div">
      <input
        type="search"
        className="input input-search input-primary"
        id="search"
        name="search"
        placeholder="Search..."
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
        onKeyUp={(e) => {
          if (e.key === "Enter") performSearch(e.target.value);
        }}
      />
      <button className="btn btn-search" type="search">
        <i className="fas fa-2x fa-search" title="search" />
      </button>
      {searchSuggestions() && (
        <ul className="suggestions-box wd-full">
          {searchSuggestions().map((video) => (
            <li
              key={video._id}
              className="suggestion-list pd-x-base pd-y-sm"
              onClick={() => performSearch(video.title)}
            >
              {video.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export { SearchBox };
