// import { books } from "../../api/books";
import CardBook from "../../components/CardBook";
import { SearchContext } from "../../components/SectionContext";
import { useContext } from "react";

const SectionBooks = () =>{

  const {bookFilter} = useContext(SearchContext);

  
    return (
    <>
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mt-1 mb-6">
     <h1 className="text-4xl font-bold text-black mb-0">Inventario</h1>
    </div>

    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {bookFilter.map((book) => (
        <CardBook key={book.id} book={book} onClick={() => console.log("hola")}/>
      ))}
    </div>
    </>
    )
}

export default SectionBooks;
