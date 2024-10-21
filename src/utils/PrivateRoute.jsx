import PropTypes from "prop-types";
import { Navigate, Route } from "react-router-dom";

const PrivateRoute = ({element, ...rest}) =>{
    const token = localStorage.getItem('authToken');

    return(
        <Route 
            {...rest}
            element={token ? element : <Navigate to= "/login" />}
            />
    )

}

PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired, 
    rest: PropTypes.object, 
};

export default PrivateRoute;