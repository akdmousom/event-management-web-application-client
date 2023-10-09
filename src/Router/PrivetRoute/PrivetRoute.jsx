import { useContext } from "react";
import { AuthContext } from "../../Utils/AuthProvider/AuthProvider";
import { Navigate, useLocation} from "react-router-dom";
import PropTypes from "prop-types"

const PrivetRoute = ({children}) => {

    const location = useLocation();
    
    const {userInfo, loading} = useContext(AuthContext)

    if (loading) {

        return (
            <div className="flex max-w-[1200px] mx-auto justify-center  min-h-screen ">
                <span className="loading loading-ring text-warning loading-lg"></span>
            </div>
        )
        
    }

    if (!userInfo) {

        
        return <Navigate state={location.pathname} to={'/login'}></Navigate>
        
    }
    
    return children
};



export default PrivetRoute;