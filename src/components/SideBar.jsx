import PropTypes from 'prop-types';
import { ImportIcon } from '../icons/ImportIcon';
import { ItemSidebar } from './ItemSidebar';
import { SoportIcon } from '../icons/SoportIcon copy';
import { ExitIcon } from '../icons/ExitIcon copy';
// import { Link } from 'react-router-dom';

const SideBar = ({isSidebarOpen}) =>{

    return (
   <aside id="logo-sidebar" className={`fixed top-0 left-0 z-40 h-screen w-64 pt-20 transition-transform -translate-x-full bg-primary border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700 h-full ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`} aria-label="Sidebar">
   <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800 bg-primary">
    <ul className="space-y-2 font-medium">
      <ItemSidebar className="mt-2" text={"Añadir Libro"} to="./añadir-libro">
         <ImportIcon />
      </ItemSidebar>
      <br />
      <ItemSidebar text={"Soporte"}>
         <SoportIcon />
      </ItemSidebar>
      <ItemSidebar className="mt-0" text={"Cerrar Sesion"}>
         <ExitIcon />
      </ItemSidebar>
      </ul>
   </div>
</aside>
        
    )
}

SideBar.propTypes = {
   isSidebarOpen: PropTypes.bool.isRequired,
   // changeStyle: PropTypes.func.isRequired, 
 };

export default SideBar;