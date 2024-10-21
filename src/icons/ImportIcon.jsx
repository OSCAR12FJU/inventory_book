import PropTypes from "prop-types";

export const ImportIcon = ({className = ''}) =>(
<svg xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-book-upload ${className}`} width="25" height="25" viewBox="0 0 24 24" strokeWidth="2" stroke="#03151E" fill="none" strokeLinecap="round" strokeLinejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M14 20h-8a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12v5" />
  <path d="M11 16h-5a2 2 0 0 0 -2 2" />
  <path d="M15 16l3 -3l3 3" />
  <path d="M18 13v9" />
</svg>
)

ImportIcon.propTypes = {
    className: PropTypes.string.isRequired,
  };
 