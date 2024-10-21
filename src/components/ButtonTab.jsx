import PropTypes from "prop-types";

const ButtonTab = ({textButton, className = "", handleSectionChange, number, children}) =>{
    const num = parseInt(number)

    return(
    <>
    <a className={`inline-flex items-center px-4 py-3 rounded-lg hover:text-gray-900 hover:bg-button w-full font-semibold rounded-lg text-md px-5 py-2.5 ${className} cursor-pointer`} onClick={() => handleSectionChange(num)}>
      {children}
      {textButton}
    </a>
    </>
    )
}
ButtonTab.propTypes = {
    textButton: PropTypes.string.isRequired, 
    className: PropTypes.string.isRequired, 
    children: PropTypes.node.isRequired, 
    stroke: PropTypes.string.isRequired, 
    handleSectionChange: PropTypes.func.isRequired, 
    number: PropTypes.number.isRequired, 
    // href: PropTypes.string, 
};
export default ButtonTab;