import PropTypes from 'prop-types';
import { Eye } from '../icons/Eye';

const CardBook = ({book, onClick}) =>{
    return(
        // <div className="col-lg-3 col-sm-4 col-md-6 mb-4">
        <div 
          className="bg-white  overflow-hidden cursor-pointer relative "
          onClick={onClick}
        >
          <div className="h-72 overflow-hidden">
            <img
              src={book.image}
              className="w-full h-full object-contain"
              alt={book.name}
            />
          </div>
          <div className="pl-4 pr-4 pt-2 pb-2">
            <h3 className="text-lg font-bold text-black-100 mt-1 leading-tight">{book.name}</h3>
            <h4 className="text-md text-gray-400 text-sm mt-2 ">{book.author}</h4>
            <a className="absolute top-2 right-2 bg-[#4BC1D2] px-1 py-1 rounded-full">
            <Eye />
            </a>
          </div>
        </div>
    )
}


CardBook.propTypes = {
    book: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired, 
  };
export default CardBook;
