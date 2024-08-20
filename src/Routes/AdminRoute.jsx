import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";

const AdminRoute = ({element, children}) => {
    const userData=useSelector((user)=>user?.bankAppStore?.bankAppStore?.user)
    const isAdmin = userData?.isAdmin;
    console.log(isAdmin)

    return isAdmin === "true" ? (
        children ? (
            <>{children}</>
        ) : (
            <>{element}</>
        )
    ) : (
        <Navigate to="/" replace />
    );
};

export default AdminRoute;
