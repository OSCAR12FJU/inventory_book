import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const ItemSidebar = ({className = "",children, text, to = ""}) =>(
    <li className={`${className}`}>
      <Link to={to} className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-white dark:hover:bg-gray-700 group">
      {children}
      <span className="flex-1 ms-3 whitespace-nowrap font-bold">{text}</span>
      {/* <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-[#4BC1D2] rounded-full dark:bg-gray-700 dark:text-gray-300">{textItem}</span> */}
      </Link>
      </li>
)

ItemSidebar.propTypes = {
    text: PropTypes.string.isRequired, 
    to: PropTypes.string.isRequired, 
    className: PropTypes.string.isRequired, 
    children: PropTypes.node.isRequired, 
    // textItem: PropTypes.string,

};