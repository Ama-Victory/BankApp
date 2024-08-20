import {FaRegEye} from "react-icons/fa6";
import hero from "../assets/hero.png";
import logo from "../assets/LOGO.png";
import {NavLink} from "react-router-dom";

const ResetPassword = () => {
    return (
        <div className="w-full h-screen flex p-4">
            <div className="w-[50%] h-full flex flex-col justify-center items-center gap-10 bg-sky-200 rounded shadow-2xl">
                <div className="w-[80%] h-max pl-10 ">
                    <p className="text-3xl font-bold">
                        Safe,simple, and smart banking.
                    </p>
                    <p className="text-3xl font-bold">
                        <span className="text-[#2860aa]">NiviQ</span> -The
                        future is here
                    </p>
                </div>
                <div className="">
                    <img src={hero} alt="" className="" />
                </div>
            </div>
            <div className="w-[50%] h-full p-10 flex items-center justify-center">
                <div className="w-[80%] h-max border border-gray-300 shadow-2xl rounded flex flex-col items-center justify-center gap-4 py-4 px-5">
                    <div className="w-full h-max flex items-center justify-center">
                        <img src={logo} alt="" className="w-10 h-10" />
                    </div>
                    <div className="w-full h-max flex flex-col items-center gap-3">
                        <p className="text-2xl font-bold">Reset Password</p>
                    </div>

                    <div className="w-full h-max flex flex-col gap-4">
                        <div className="w-full h-max">
                            <p className="text-sm">Email</p>
                            <input
                                type="email"
                                className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                                placeholder="example@gmail.com"
                            />
                        </div>
                        <div className="w-full h-max">
                            <p className="text-sm">New Password</p>
                            <div className="w-full h-10 flex items-center rounded border border-gray-300 shadow pr-2">
                                <input
                                    type="password"
                                    className="w-full outline-none pl-3"
                                    placeholder="Create a password with unique caracters"
                                />
                                <span className="w-max h-max cursor-pointer">
                                    <FaRegEye size={18} />
                                    {/* <FaRegEyeSlash /> */}
                                </span>
                            </div>
                        </div>
                        <div className="w-full h-max">
                            <p className="text-sm">Confirm New Password</p>
                            <div className="w-full h-10 flex items-center rounded border border-gray-300 shadow pr-2">
                                <input
                                    type="password"
                                    className="w-full outline-none pl-3"
                                    placeholder="Create a password with unique caracters"
                                />
                                <span className="w-max h-max cursor-pointer">
                                    <FaRegEye size={18} />
                                    {/* <FaRegEyeSlash /> */}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-max flex flex-col items-center gap-3">
                        <button className="w-full h-10 rounded bg-[#8c4cfb] text-white">
                            Continue
                        </button>

                        <NavLink to={"/login"}>
                            <span className="cursor-pointer text-green-600">
                                Back To Login
                            </span>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
