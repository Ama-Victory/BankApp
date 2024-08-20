import {useState} from "react";
import {close, logo, menu} from "../assets";
import {navLinks} from "../utils/index";
import {Outlet, Link} from "react-router-dom";
import styles from "../style";
import {FaLockOpen} from "react-icons/fa6";
const Navbar = () => {
    const [active, setActive] = useState("Home");
    const [toggle, setToggle] = useState(false);

    return (
        <div>
            <nav
                className={`w-full flex py-6 px-16 max-sm:px-10 justify-between items-center fixed navbar inset-x-0 bg-[#000000b3]   backdrop-filter backdrop-blur-xl bg-opacity-0 z-50  `}
            >
                <div className="h-10 flex items-center gap-2">
                    <img
                        src={logo}
                        alt="Niviq"
                        className="w-14 h-14"
                    />
                    <p className="text-white text-3xl font-bold">NIVIQ</p>
                </div>

                <ul className="list-none md:flex hidden  items-center">
                    {navLinks.map((nav, index) => (
                        <li
                            key={nav.id}
                            className={`font-larsseit font-normal cursor-pointer  text-[14px]  ${(index =
                                navLinks.length - 1
                                    ? "mr-0"
                                    : "mr-10")} text-white mr-10`}
                        >
                            <Link to={`${nav.id}`}>{nav.title}</Link>
                        </li>
                    ))}
                </ul>

                <div className="no-underline  items-center gap-4 md:flex hidden font-larsseit">
                    <Link
                        to="/signup"
                        className="text-[15px] text-white tracking-wide font-light "
                    >
                        Sign up
                    </Link>
                    {/* <button className="text-black text-[15px] bg-[#72e485] hover:bg-[#43ee60] ease-in-out duration-500 py-1 px-4 rounded-lg font-light tracking-wide"><a href="#signin">Sign in</a></button> */}

                    <Link
                        to="/login"
                        class="relative inline-flex items-center justify-center py-1 px-4 overflow-hidden font-medium text-black transition duration-300 ease-in-out  bg-[#72e485] rounded-lg  group"
                    >
                        <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-[rgb(114,228,133)] group-hover:translate-x-0 ease">
                            <FaLockOpen />
                        </span>
                        <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                            Sign in
                        </span>
                        <span className="relative invisible">Sign in</span>
                    </Link>
                </div>

                <div className="md:hidden flex flex-1 justify-end items-center">
                    <img
                        src={toggle ? close : menu}
                        alt="menu"
                        className="w-[22px] h-[22px] object-contain"
                        onClick={() => setToggle(!toggle)}
                    />

                    <div
                        className={`${
                            !toggle ? "hidden" : "block"
                        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[200px] rounded-xl sidebar`}
                    >
                        <ul className="list-none flex justify-end items-start flex-1 flex-col">
                            {navLinks.map((nav, index) => (
                                <li
                                    key={nav.id}
                                    className={`font-poppins font-light cursor-pointer text-[15px] ${
                                        active === nav.title
                                            ? "text-white"
                                            : "text-dimWhite"
                                    } ${
                                        index === navLinks.length - 1
                                            ? "mb-0"
                                            : "mb-4"
                                    }`}
                                    onClick={() => setActive(nav.title)}
                                >
                                    <Link to={`${nav.id}`}>{nav.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="no-underline justify-between  items-center  md:flex mt-8 font-larsseit">
                            <Link
                                to="/signup"
                                className="text-[15px] text-white tracking-wide font-light mr-4"
                            >
                                Sign up
                            </Link>
                            {/* <button className="text-black text-[15px] bg-[#72e485] hover:bg-[#43ee60] ease-in-out duration-500 py-1 px-4 rounded-lg font-light tracking-wide"><a href="#signin">Sign in</a></button> */}

                            <Link
                                to="/signin"
                                class="relative inline-flex items-center justify-center py-1 px-4 overflow-hidden font-medium text-black transition duration-300 ease-in-out  bg-[#72e485] rounded-lg  group"
                            >
                                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-black duration-300 -translate-x-full bg-[#72e485] group-hover:translate-x-0 ease">
                                    <FaLockOpen />
                                </span>
                                <span className="absolute flex items-center justify-center w-full h-full text-black transition-all duration-300 transform group-hover:translate-x-full ease">
                                    Sign in
                                </span>
                                <span className="relative invisible">
                                    Sign in
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>

            <Outlet />
        </div>
    );
};

export default Navbar;
