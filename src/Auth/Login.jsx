import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import hero from "../assets/hero.png";
import logo from "../assets/LOGO.png";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { bankUser } from "../Global/features";
import { toast, ToastContainer } from "react-toastify";
import { Toaster } from "react-hot-toast";

const Login = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassWord] = useState("");
  const [passWordError, setPassWordError] = useState(false);
  const [showPassWord, setShowPassWord] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmail = (e) => {
    const newData = e.target.value;
    setEmail(newData);
    setEmailError(true);

    if (newData.trim() === "") {
      setEmailError("email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newData)) {
      setEmailError("invalid email format");
    }
  };

  const handlePassWord = (e) => {
    const newData = e.target.value;
    setPassWord(newData);
    setPassWordError(true);

    if (newData.trim() === "") {
      setPassWordError(true);
    }else{
      setPassWordError(false)
    }
  };

  const handleLogin = () => {
    if (!email || !password) {
      toast.error("please input all data");
    }else if(emailError.length >= 1){
      toast.error("email is not valid")
    }
     else {
      setLoading(true);
      const datas = { email, password };
      const url = "https://bank-app-z92e.onrender.com/login";
      axios
        .post(url, datas)
        .then((res) => {
          setLoading(false)
          dispatch(bankUser(res?.data?.data));
          setTimeout(() => {
            if (res?.data?.data?.isAdmin === "true") {
              nav("/admin/home");
            } else if (res?.data?.data?.isAdmin === "false") {
              nav("/user/home");
            }
          }, 2000);
        })
        .catch((err) => {
          setLoading(false)
          toast.error(err?.response?.data?.message);
        });
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="w-full h-screen flex p-4">
      <ToastContainer/>
      <div className="w-[50%] h-full flex flex-col justify-center items-center gap-10 bg-sky-200 rounded shadow-2xl">
        <div className="w-[80%] h-max pl-10 ">
          <p className="text-3xl font-bold">Safe,simple, and smart banking.</p>
          <p className="text-3xl font-bold">
            <span className="text-[#2860aa]">NiviQ</span> -The future is here
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
            <p className="text-2xl font-bold">Login</p>
          </div>

          <div className="w-full h-max flex flex-col gap-4">
            <div className="w-full h-max">
              <p className="text-sm">Email</p>
              <input
                type="email"
                className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                placeholder="example@gmail.com"
                value={email}
                onChange={handleEmail}
              />
              {emailError ? <p style={{ color: "red" }}>{emailError}</p> : null}
            </div>
            <div className="w-full h-max">
              <p className="text-sm">Password</p>
              <div className="w-full h-10 flex items-center rounded border border-gray-300 shadow pr-2">
                <input
                  type={showPassWord ? "text" : "password"}
                  className="w-full outline-none pl-3"
                  placeholder="Create a password with unique characters"
                  value={password}
                  onChange={handlePassWord}
                />
                <span className="w-max h-max cursor-pointer">
                  {showPassWord ? (
                    <FaRegEyeSlash onClick={() => setShowPassWord(false)} />
                  ) : (
                    <FaRegEye size={18} onClick={() => setShowPassWord(true)} />
                  )}
                </span>
              </div>
              {passWordError ? (
                <p style={{ color: "red" }}>hghhh</p>
              ) : null}
            </div>
          </div>
          <div className="w-full h-max flex flex-col items-center gap-3">
            <button
              className="w-full h-10 rounded bg-[#8c4cfb] text-white"
              onClick={handleLogin}
            >
              {loading ? "Loading...." : "Continue"}
            </button>
            <NavLink to={"/reset-password"}>
              <span className="cursor-pointer text-green-600">
                Forget Password?
              </span>
            </NavLink>
            <p className="flex gap-4">
              Dont have an account{" "}
              <NavLink to={"/signup"}>
                <span className="cursor-pointer text-green-600">Sign Up</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
