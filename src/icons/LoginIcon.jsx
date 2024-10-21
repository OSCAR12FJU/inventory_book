import PropTypes from "prop-types"

export const LoginIcon = (className = "") =>(
    <svg xmlns="http://www.w3.org/2000/svg" className= {`icon icon-tabler icon-tabler-login w-5 h-5 me-1 ${className} `}  viewBox="0 0 24 24" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" stroke="#4B5563">
    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
    <path d="M15 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
    <path d="M21 12h-13l3 -3" />
    <path d="M11 15l-3 -3" />
  </svg>
)

LoginIcon.propTypes = {
    className: PropTypes.string,
  };