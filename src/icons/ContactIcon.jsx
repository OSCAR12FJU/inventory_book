import PropTypes from "prop-types"

export const ContactIcon = (className = "") =>(
  <svg xmlns="http://www.w3.org/2000/svg" className= {`icon icon-tabler icon-tabler-login w-5 h-5 me-1 ${className} `} viewBox="0 0 24 24" strokeWidth="2" stroke="#2c3e50" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M4 14v-3a8 8 0 1 1 16 0v3" />
  <path d="M18 19c0 1.657 -2.686 3 -6 3" />
  <path d="M4 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
  <path d="M15 14a2 2 0 0 1 2 -2h1a2 2 0 0 1 2 2v3a2 2 0 0 1 -2 2h-1a2 2 0 0 1 -2 -2v-3z" />
</svg>
)

ContactIcon.propTypes = {
    className: PropTypes.string,
  };