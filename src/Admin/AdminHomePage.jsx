import {NavLink} from "react-router-dom";
import AdminTransactionList from "./Components/AdminTransactionList";

const AdminHomePage = () => {
    return (
        <div className="w-full h-max">
            <div className="w-full h-max flex gap-5 p-5">
                <NavLink to={"/admin/credit-debit"} className={"w-1/2 h-60"}>
                    <div className="w-full h-full border border-gray-300 rounded shadow flex justify-center cursor-pointer items-center">
                        MAKE A DEPOSIT
                    </div>
                </NavLink>
                <NavLink to={"/admin/users"} className={"w-1/2 h-60"}>
                    <div className="w-full h-full border border-gray-300 rounded shadow flex justify-center cursor-pointer items-center">
                        VIEW USERS
                    </div>
                </NavLink>
            </div>
            <div className="w-full h-max flex flex-col p-5">
                <AdminTransactionList />
            </div>
        </div>
    );
};

export default AdminHomePage;
