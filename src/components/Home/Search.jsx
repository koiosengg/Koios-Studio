import React, { useState } from "react";
import { Link } from "react-router-dom";

function Search() {
  const [query, setQuery] = useState("");

  const searchOptions = [
    {
      path: "/development",
      title: "Website Development",
      description: "Responsive, UI/UX, Web design",
    },
    {
      path: "/designing",
      title: "Website Design",
      description: "Responsive, UI/UX, Web design",
    },
    {
      path: "/development",
      title: "App Development",
      description: "Responsive, UI/UX, Web design",
    },
    {
      path: "/branding",
      title: "Company Branding",
      description: "Responsive, UI/UX, Web design",
    },
  ];

  const filteredOptions = searchOptions.filter(
    (option) =>
      option.title.toLowerCase().includes(query.toLowerCase()) ||
      option.description.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section className="search">
      <div className="heading">
        <h3>We Got You Covered</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur. Venenatis sapien id ultrices
          sed mauris ut et.
        </p>
      </div>
      <div className="search-container">
        <input
          placeholder="Search pages..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M21 21L16.657 16.657M16.657 16.657C17.3998 15.9141 17.9891 15.0321 18.3912 14.0615C18.7932 13.0909 19.0002 12.0506 19.0002 11C19.0002 9.94936 18.7932 8.90905 18.3912 7.93842C17.9891 6.96779 17.3998 6.08585 16.657 5.34296C15.9141 4.60007 15.0321 4.01078 14.0615 3.60874C13.0909 3.20669 12.0506 2.99976 11 2.99976C9.94936 2.99976 8.90905 3.20669 7.93842 3.60874C6.96779 4.01078 6.08585 4.60007 5.34296 5.34296C3.84263 6.84329 2.99976 8.87818 2.99976 11C2.99976 13.1217 3.84263 15.1566 5.34296 16.657C6.84329 18.1573 8.87818 19.0002 11 19.0002C13.1217 19.0002 15.1566 18.1573 16.657 16.657Z"
            stroke="#606060"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div className="search-input-options">
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => (
              <Link to={option.path} key={index}>
                <h4>{option.title}</h4>
                <p>{option.description}</p>
              </Link>
            ))
          ) : (
            <a>
              <h4>No results found.</h4>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}

export default Search;
