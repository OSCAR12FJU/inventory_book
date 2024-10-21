import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react"
import { getBook } from "../api/books";

export const SearchContext = createContext();

export const SectionContext = ({children}) =>{
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState("");


  useEffect(() => {
    const getBookData = async () =>{
      try{
        const data = await getBook();

        setBooks(data|| [])
        console.log(data)

      }catch(err){
        console.error('Error al cargar los datos', err);
      }
    };
    getBookData();
  }, []);

  const bookFilter = books.filter((book) => book.name.toLowerCase().includes(search.toLowerCase()))

    return(
        <SearchContext.Provider value={{setSearch, bookFilter}}>
            {children}
        </SearchContext.Provider>
    )
}
SectionContext.propTypes = {
    children: PropTypes.node.isRequired, 
};

