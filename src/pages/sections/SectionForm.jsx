// import PropTypes from "prop-types";
import { useState } from "react";
import HeaderForm from "../../components/HeaderForm";
import FormLogin from "../../forms/FormLogin";
// import FormContact from "../../forms/FormContact";
// import FormNewUser from "../../forms/FormNewUser";
import SectionLogin from "./SectionLogin";
import FormNewUser from "../../forms/FormNewUser";
import FormContact from "../../forms/FormContact";

const SectionForm = () =>{

    const [activeSection, setActiveSection] = useState(2);
    console.log(activeSection)

    const handleSectionChange = (section) =>{
        setActiveSection(section)
    }

    return(
    <>
    <HeaderForm activeSection={activeSection} handleSectionChange={handleSectionChange} />
    <SectionLogin>
        {/* <FormLogin /> */}
        {activeSection === 1 && (
            <FormNewUser />
        )}
        {activeSection === 2 && (
            <FormLogin />
        )}
        {activeSection === 3 && (
            <FormContact />
        )}
    
    </SectionLogin>

    {/* <section className={`w-full mx-auto container lg:max-w-4xl md:max-w-2xl pb-24 ${className}`}>
        {children}
    </section> */}
    </>
    )
}

// SectionForm.propTypes = {
//     className: PropTypes.string, 
//     children: PropTypes.node.isRequired, 
// };


export default SectionForm;