import {Navigate} from "react-router-dom";

const CashierRoute = ({element, children}) => {
    const isCashier = false;
    const isLoggedIn = "";


    return isCashier ? (
        children ? (
            <>{children}</>
        ) : (
            <>{element}</>
        )
    ) : (
        <Navigate to="/" replace />
    );
};

export default CashierRoute;
