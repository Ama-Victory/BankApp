import { useSelector } from "react-redux";
import {Navigate} from "react-router-dom";

const UserRoute = ({element, children}) => {
    const userData=useSelector((user)=>user.bankAppStore?.bankAppStore?.user)
    const isUser = userData.isAdmin;


    return isUser === "false" ? (
        children ? (
            <>{children}</>
        ) : (
            <>{element}</>
        )
    ) : (
        <Navigate to="/" replace />
    );
};

export default UserRoute;
