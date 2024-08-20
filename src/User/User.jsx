import {NavLink, Outlet, useNavigate} from "react-router-dom";
import logo from "../assets/LOGO.png";
import {MdDarkMode, MdDashboard} from "react-icons/md";
import {FaRegUser} from "react-icons/fa6";
import {useState} from "react";
import { useSelector } from "react-redux";

function User() {
    const [showUserBox, setShowUserBox] = useState(false);
    const user=useSelector((state)=>state.bankAppStore?.bankAppStore?.user);
    const Navigate=useNavigate();
    return (
        <div className="w-full h-screen flex">
            <div className="w-[25%] h-full ">
                <div className="w-full h-20 flex items-center justify-center shadow">
                    <div className="h-10 flex items-center gap-2">
                        <img src={logo} alt="Niviq" className="w-20 h-20" />
                        <p className=" text-4xl font-bold text-[rgb(117,126,214)]">
                            NIVIQ
                        </p>
                    </div>
                </div>
                <div className="w-full h-max flex flex-col gap-2">
                    <NavLink
                        to={"/user/home"}
                        className={({isActive}) =>
                            !isActive
                                ? "transition-all hover:text-[0.90rem] hover:bg-[rgb(117,126,214)]   hover:text-[#fff] text-[rgb(117,126,214)]"
                                : "transition-all bg-[rgb(117,126,214)] text-white"
                        }
                    >
                        <div className="w-full h-12 px-4 flex items-center gap-4 cursor-pointer transition-all duration-400">
                            <MdDashboard className="w-5 h-5" />
                            <p className="text-sm font-medium">Dashboard</p>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/user/transfer"}
                        className={({isActive}) =>
                            !isActive
                                ? "transition-all hover:text-[0.90rem] hover:bg-[rgb(117,126,214)]   hover:text-[#fff] text-[rgb(117,126,214)]"
                                : "transition-all bg-[rgb(117,126,214)] text-white"
                        }
                    >
                        <div className="w-full h-12 px-4 flex items-center gap-4 cursor-pointer transition-all duration-400">
                            <MdDashboard className="w-5 h-5" />
                            <p className="text-sm font-medium">Transfer</p>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/user/transactions"}
                        className={({isActive}) =>
                            !isActive
                                ? "transition-all hover:text-[0.90rem] hover:bg-[rgb(117,126,214)]   hover:text-[#fff] text-[rgb(117,126,214)]"
                                : "transition-all bg-[rgb(117,126,214)] text-white"
                        }
                    >
                        <div className="w-full h-12 px-4 flex items-center gap-4 cursor-pointer transition-all duration-400">
                            <MdDashboard className="w-5 h-5" />
                            <p className="text-sm font-medium">Transactions</p>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/user/loan"}
                        className={({isActive}) =>
                            !isActive
                                ? "transition-all hover:text-[0.90rem] hover:bg-[rgb(117,126,214)]   hover:text-[#fff] text-[rgb(117,126,214)]"
                                : "transition-all bg-[rgb(117,126,214)] text-white"
                        }
                    >
                        <div className="w-full h-12 px-4 flex items-center gap-4 cursor-pointer transition-all duration-400">
                            <MdDashboard className="w-5 h-5" />
                            <p className="text-sm font-medium">Loan</p>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/user/cards"}
                        className={({isActive}) =>
                            !isActive
                                ? "transition-all hover:text-[0.90rem] hover:bg-[rgb(117,126,214)]   hover:text-[#fff] text-[rgb(117,126,214)]"
                                : "transition-all bg-[rgb(117,126,214)] text-white"
                        }
                    >
                        <div className="w-full h-12 px-4 flex items-center gap-4 cursor-pointer transition-all duration-400">
                            <MdDashboard className="w-5 h-5" />
                            <p className="text-sm font-medium">Card</p>
                        </div>
                    </NavLink>
                    <NavLink
                        to={"/user/profile"}
                        className={({isActive}) =>
                            !isActive
                                ? "transition-all hover:text-[0.90rem] hover:bg-[rgb(117,126,214)]   hover:text-[#fff] text-[rgb(117,126,214)]"
                                : "transition-all bg-[rgb(117,126,214)] text-white"
                        }
                    >
                        <div className="w-full h-12 px-4 flex items-center gap-4 cursor-pointer transition-all duration-400">
                            <MdDashboard className="w-5 h-5" />
                            <p className="text-sm font-medium">Profile</p>
                        </div>
                    </NavLink>
                </div>
            </div>
            <div className="h-full w-[75%] p-4 flex flex-col gap-2">
                <div className="w-full h-20 flex items-center justify-between shadow border border-gray-200 rounded px-4">
                    <div className="w-max">Hello {user.fullname}</div>
                    <div className="w-max h-max">
                        <div
                            className="w-max h-10 bg-[rgb(117,126,214)]  rounded-full flex items-center px-4 cursor-pointer gap-2 relative"
                            onClick={() => setShowUserBox(!showUserBox)}
                        >
                            <FaRegUser />
                            <p className="text-white">{user.fullname}</p>
                            <span
                                className={`w-60 h-max py-3 px-2 rounded flex flex-col gap-3 bg-white shadow-lg border-2 absolute right-[-22px] top-14 toggle-dropdown ${
                                    showUserBox ? " active" : ""
                                }`}
                            >
                                <div className="w-full h-10 rounded shadow-md flex items-center pl-2 cursor-pointer">
                                    View Profile
                                </div>
                                <div className="w-full h-10 rounded shadow-md flex items-center pl-2 cursor-pointer justify-between pr-2">
                                    Toggle Mode <MdDarkMode size={22} />
                                </div>
                                <div className="w-full h-10 rounded shadow-md flex items-center pl-2 text-red-500 cursor-pointer" onClick={()=>Navigate("/login")}>
                                    Logout
                                </div>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="w-full h-[calc(100%-5rem)] shadow border border-gray-200 rounded  overflow-y-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default User;
