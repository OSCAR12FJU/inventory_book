import PropTypes from 'prop-types';


const IconUser = ({toggleUser, isUserOpen}) =>(
    <>
    <button
    type="button"
    className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
    aria-expanded="false"
    data-dropdown-toggle="dropdown-user"
    onClick={toggleUser}>
    <span className="sr-only">Open user menu</span>
    <img
     className="w-8 h-8 rounded-full"
     src="http://localhost:8081/uploads/iconUser.png"
    alt="user photo"/>
    </button>

   <div className={`absolute right-0 mt-2 w-48 bg-white divide-y divide-gray-100 rounded shadow dark:bg-gray-700 dark:divide-gray-600 transition-all duration-300 ease-in-out transform 
   ${isUserOpen
    ? 'opacity-100 scale-100'
    : 'opacity-0 scale-95 pointer-events-none'}`} id="dropdown-user">
    <div className="px-4 py-3">
    <p className="text-sm text-gray-900 dark:text-white">Neil Sims</p>
    <p className="text-sm font-medium text-gray-900 truncate dark:text-gray-300">neil.sims@flowbite.com</p>
    </div>
     <ul className="py-1">
        <li>
          <a href="#"className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">
            Dashboard
          </a>
        </li>
      </ul>
    </div>
    </>
)
IconUser.propTypes = {
    isUserOpen: PropTypes.bool.isRequired,
    toggleUser: PropTypes.func.isRequired, 
  };

export default IconUser;