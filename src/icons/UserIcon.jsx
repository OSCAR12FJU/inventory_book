import PropTypes from "prop-types"

export const UserIcon = (className = "") =>(
  <svg xmlns="http://www.w3.org/2000/svg" className= {`icon icon-tabler icon-tabler-login w-5 h-5 me-1 ${className} `}  viewBox="0 0 24 24" strokeWidth="2" stroke="#000" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
  <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
  <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
</svg>
)

UserIcon.propTypes = {
    className: PropTypes.string,
  };