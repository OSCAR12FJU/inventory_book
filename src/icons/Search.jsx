import PropTypes from "prop-types";

export const Search = (className = "") =>(
    <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-search ${className}`} width="25" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="#03151E" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
  <path d="M21 21l-6 -6" />
</svg>
)

Search.propTypes = {
    className: PropTypes.string.isRequired,
  };