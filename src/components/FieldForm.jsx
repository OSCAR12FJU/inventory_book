import PropTypes from "prop-types";

const FieldForm = ({textLabel, type, id, name, value, onChange, placeholder, className= "", error}) =>{
    return(
    <div className={`mb-5 ${className}`}>
       <label htmlFor={name} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{textLabel}</label>
       <input type={type} 
       id={id} 
       className="shadow-sm bg-gray-50 bg-input border-input border text-gray-900 text-sm rounded-lg focus:bg-input focus:border-input2 block w-full p-2.5" 
       name={name}x
       value={value}
       onChange={onChange}
       placeholder={placeholder} 
       required />
       {error === true && (
         <p className="mt-2 text-sm text-red-600 "><span className="font-medium">No </span>coinciden las contraseñas</p>
        )}
       
    </div>
    )
}
FieldForm.propTypes = {
    textLabel: PropTypes.string.isRequired, 
    className: PropTypes.string, 
    type: PropTypes.string.isRequired, 
    id: PropTypes.string, 
    placeholder: PropTypes.string, 
    name: PropTypes.string.isRequired, 
    value: PropTypes.string,
    error: PropTypes.bool,
    onChange: PropTypes.func,

};
export default FieldForm;
