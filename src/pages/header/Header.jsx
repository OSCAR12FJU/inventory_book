import PropTypes from 'prop-types';
import { useState } from 'react';
import SearchBar from '../../components/SearchBar';
import IconUser from '../../components/IconUser';
import { LogoBook } from '../../icons/LogoBook';
import { HamburguerIcon } from '../../icons/HamburguerIcon';
import { Link, useLocation } from 'react-router-dom';
import SearchBarChange from '../../components/SearchBarChange';


const Header = ({toggleSidebar}) =>{
    const [isUserOpen, setUserOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
    const location = useLocation();


    const toggleUser = () => {
        setUserOpen(prevState => !prevState)
      }

    const toggleSearch = () => {
        setSearchOpen(prevState => !prevState)
      }
    
    return (
    <>
    <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <div className="flex items-center justify-start">
       <button type="button" className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" onClick={toggleSidebar}
        >
           <span className="sr-only">Open sidebar</span>
           <HamburguerIcon />
        </button>
        
        <Link to="./" className="flex ms-2 md:me-24">
        <LogoBook className="me-1"/>
          <span className="self-center text-xl font-bold sm:text-2xl whitespace-nowrap dark:text-white">
            InvBook
          </span>
            
        </Link>
        </div>

        {/* Search bar (visible on medium screens and larger) */}
      {location.pathname === '/' && (
        <div className="hidden md:flex items-center w-full max-w-md mx-auto">
        <SearchBar />
        </div>)}

        {/* User & Search Icons (for all screen sizes) */}
        <div className="flex items-center space-x-4">
        {/* Search Icon (visible on small screens) */}
        {location.pathname === '/' && (
          <SearchBarChange toggleSearch={toggleSearch} isSearchOpen={isSearchOpen} />

        )}

        {/* User Profile Icon */}
        <div className="relative">
            <IconUser toggleUser={toggleUser} isUserOpen={isUserOpen}/>
        </div> 

      {/* <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
      <div className="relative mt-3 md:hidden"> */}
        {/* <input type="text" id="search-navbar" class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..."> */}
      {/* </div>
      </div> */}



      </div>
    </div>
    </nav>
    </>
);
}

Header.propTypes = {
    // className: PropTypes.string.isRequired,
    toggleSidebar: PropTypes.func.isRequired, 
    search: PropTypes.string.isRequired,
    setSearch: PropTypes.func.isRequired,
  };

export default Header;