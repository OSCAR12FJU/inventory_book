
import PropTypes from 'prop-types';
import { Search } from '../icons/Search';
import SearchBar from './SearchBar';


const SearchBarChange = ({toggleSearch, isSearchOpen}) =>{
    
    return(
    <>
    <button type="button" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5" onClick={toggleSearch}>
          <Search />
            {/* <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
            >
            <path
                stroke="#03151E"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
            </svg> */}
            {/* <span className="sr-only">Buscar</span> */}
    </button>
    {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"></div> */}
    <div className="relative mt-8 md:hidden"> 
    <div className={`absolute right-0 w-48 bg-white divide-y divide-gray-100 rounded shadow transition-all duration-300 ease-in-out transform 
   ${isSearchOpen
    ? 'opacity-100 scale-100'
    : 'opacity-0 scale-95 pointer-events-none'
    }`} >
    <div className="px-4 py-3">
    {/* <p className="text-sm text-gray-900 dark:text-white">Neil Sims</p>
    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">neil.sims@flowbite.com</p>
    </div>
     <ul className="py-1">
        <li>
          <a href="#"className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
            Dashboard
          </a>
        </li>
      </ul> */}
      <SearchBar />
    </div> 
    </div>
    </div>
    </>
);
}

SearchBarChange.propTypes = {
    isSearchOpen: PropTypes.bool.isRequired,
    toggleSearch: PropTypes.func.isRequired, 
  };

export default SearchBarChange;