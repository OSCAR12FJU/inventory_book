import PropTypes from "prop-types";

const SectionLogin = ({children, className = ""}) =>{

    return(
    <>
    <section className={`w-full mt-2 mx-auto container lg:max-w-4xl md:max-w-2xl pb-10 ${className}`}>
        {children}
    </section>
    </>
    )
}

SectionLogin.propTypes = {
    className: PropTypes.string, 
    children: PropTypes.node.isRequired, 
};


export default SectionLogin;