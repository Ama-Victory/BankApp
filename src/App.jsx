import {RouterProvider, createBrowserRouter} from "react-router-dom";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import ErrorPage from "./Components/ErrorPage";
import Admin from "./Admin/Admin";
import AdminHomePage from "./Admin/AdminHomePage";
import AdminTransactions from "./Admin/AdminTransactions";
import AdminUsers from "./Admin/AdminUsers";
import UserTransactions from "./User/UserTransactions";
import UserTransfer from "./User/UserTransfer";
import User from "./User/User";
import UserHomePage from "./User/UserHomePage";
import Cashier from "./Cashier/Cashier";
import CashierHomePage from "./Cashier/CashierHomePage";
import CashierTransactions from "./Cashier/CashierTransactions";
import CashierTransfer from "./Cashier/CashierTransfer";
import CashierDebit from "./Cashier/CashierDebit";
import AdminRoute from "./Routes/AdminRoute";
import UserRoute from "./Routes/UserRoute";
import CashierRoute from "./Routes/CashierRoute";
import LandingPage from "./User/LandingPage";
import "./index.css";
import ResetPassword from "./Auth/ResetPassword";
import UserLoan from "./User/UserLoan";
import UserCard from "./User/UserCard";
import UserProfile from "./User/UserProfile";
import AdminCreditDebit from "./Admin/AdminCreditDebit";
import AdminProfile from "./Admin/AdminProfile";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "",
            element: <LandingPage />,
        },
        {
            path: "login",
            element: <Login />,
        },
        {
            path: "signup",
            element: <SignUp />,
        },
        {
            path: "reset-password",
            element: <ResetPassword />,
        },
        {
            path: "/admin",
            errorElement: <ErrorPage />,
            element: <AdminRoute element={<Admin />}></AdminRoute>,
            children: [
                {
                    path: "home",
                    element: <AdminHomePage />,
                },
                {
                    path: "transactions",
                    element: <AdminTransactions />,
                },
                {
                    path: "users",
                    element: <AdminUsers />,
                },
                {
                    path: "profile",
                    element: <AdminProfile />,
                },
                {
                    path: "credit-debit",
                    element: <AdminCreditDebit />,
                },
            ],
        },
        {
            path: "/user",
            errorElement: <ErrorPage />,
            element: <UserRoute element={<User />}></UserRoute>,
            children: [
                {
                    path: "home",
                    element: <UserHomePage />,
                },
                {
                    path: "transactions",
                    element: <UserTransactions />,
                },
                {
                    path: "transfer",
                    element: <UserTransfer />,
                },
                {
                    path: "loan",
                    element: <UserLoan />,
                },
                {
                    path: "cards",
                    element: <UserCard />,
                },
                {
                    path: "profile",
                    element: <UserProfile />,
                },
            ],
        },
        {
            path: "/cashier",
            errorElement: <ErrorPage />,
            element: <CashierRoute element={<Cashier />}></CashierRoute>,
            children: [
                {
                    path: "home",
                    element: <CashierHomePage />,
                },
                {
                    path: "transactions",
                    element: <CashierTransactions />,
                },
                {
                    path: "transfer",
                    element: <CashierTransfer />,
                },
                {
                    path: "debit",
                    element: <CashierDebit />,
                },
            ],
        },
    ]);

    return (
        <>
            <RouterProvider router={router} />
        </>
    );
};

export default App;
