import PropTypes from "prop-types";

const SectionContainer = ({className = "", children}) =>(
    <>
    <section className={`${className} w-full lg:max-w-4xl md:max-w-2xl pb-24`}>
     {children} 
    </section>
    </>
)
SectionContainer.propTypes = {
    className: PropTypes.string, 
    children: PropTypes.node.isRequired, 
};

export default SectionContainer;

