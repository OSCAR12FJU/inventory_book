import PropTypes from "prop-types";
import ButtonTab from "./ButtonTab";
import { NewUserIcon } from "../icons/NewUserIcon";
import { LoginIcon } from "../icons/LoginIcon";
import { ContactIcon } from "../icons/ContactIcon";

const HeaderForm = ({activeSection, handleSectionChange}) =>(
    <div className="flex justify-center aling-center p-4 mx-auto">
    <ul className="flex flex-wrap -mb-px text-sm font-bold text-center text-gray-500">
        <li className="me-2">
            <ButtonTab 
             className={`${
             activeSection === 1 ? "bg-button text-black" : "bg-white text-gray-600"
            }`} textButton="Registrarse"
            number= "1" 
            handleSectionChange={handleSectionChange}>
                <NewUserIcon />
            </ButtonTab>
            

        </li>
        <li className="me-2">
            <ButtonTab 
            className={`${activeSection === 2 ? "bg-[#4BC1D2] text-black" : "bg-grray-50 text-gray-600"
            }`}
            activeSection={activeSection}
            textButton="Iniciar Sesion" 
            number="2" 
            handleSectionChange={handleSectionChange}>
                <LoginIcon />
            </ButtonTab>
        </li>
        <li className="me-2">
            <ButtonTab 
            className={`${
            activeSection === 3 ? "bg-[#4BC1D2] text-black" : "bg-grray-50 text-gray-600"
            }`}
            textButton="Contactanos" 
            number="3" 
            activeSection={activeSection}
            handleSectionChange={handleSectionChange}>
                <ContactIcon />
            </ButtonTab>
            
        </li>
        
    </ul>
</div>
)

HeaderForm.propTypes = {
    handleSectionChange: PropTypes.func.isRequired, 
    activeSection: PropTypes.number.isRequired, 
};

export default HeaderForm;