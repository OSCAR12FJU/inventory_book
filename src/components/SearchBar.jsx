import { Search } from "../icons/Search";
import { useContext } from "react";
import { SearchContext } from "./SectionContext";

const SearchBar = () =>{

    const {setSearch} = useContext(SearchContext);

    const searcher = (e) =>{
        setSearch(e.target.value)
    }
    return(
        <>
        <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search />
            <span className="sr-only">Search icon</span>
            </div>
            <input
            type="text"
            id="search-navbar"
            onChange={searcher}
            className="block w-full p-2 ps-10 text-sm text-gray-900 bg-input border-input border rounded-lg placeholder-black placeholder:font-medium focus:bg-input focus:border-input2"
            placeholder="Buscar libros..."
            />
        </div>
        </>

    )
}

// SearchBar.propTypes = {
//     search: PropTypes.string.isRequired,
//     setSearch: PropTypes.func.isRequired,
//   };
export default SearchBar;