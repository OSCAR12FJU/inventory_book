import PropTypes from "prop-types";

export const Eye = ( className = "") =>(
  <svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-eye ${className}`} width="20" height="20" viewBox="0 0 24 24" strokeWidth="2" stroke="#03151E" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
  <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" />
</svg>
)

Eye.propTypes = {
    className: PropTypes.string.isRequired,
  };
