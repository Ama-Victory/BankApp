import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import hero from "../assets/hero.png";
import logo from "../assets/LOGO.png";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [surName, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassWord] = useState(true);
  const [password, setPassWord] = useState("");
  const [passWordError, setPassWordError] = useState(false);
  const [passWordFeaturesError, setPassWordFeaturesError] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [dateOfBirthError, setDateOfBirthError] = useState(false);
  const [address, setAddrress] = useState("");
  const [addressInfo, setAddressInfo] = useState("");
  const [addressError, setAddressError] = useState(false);
  const [gender, setGender] = useState("");
  const [genderInfo, setGenderInfo] = useState("");
  const [methodOfSavings, setMethodOfSavings] = useState("");
  const [methodOfSavingsInfo, setMethodOfSavingsInfo] = useState("");
  const [phoneNumber, setPhoneNumber] = useState();
  const [phoneNumberError, setPhoneNumberError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFirstName = (e) => {
    const newData = e.target.value;
    setFirstName(newData);
  };

  const handleSurName = (e) => {
    const newData = e.target.value;
    setSurname(newData);
  };

  const handleEmail = (e) => {
    const newData = e.target.value;
    setEmail(newData);
    setEmailError(true);

    if (newData === "") {
      setEmailError("email is required");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newData)) {
      setEmailError("email is not valid");
    }
  };

  const handlePassWord = (e) => {
    const newData = e.target.value;
    setPassWord(newData);
    setPassWordError(true);
    setPassWordFeaturesError(true);

    if (newData.trim() === "") {
      setPassWordError("password is required");
      setPassWordFeaturesError(false);
    }
    if (
      !/[a-z]/.test(newData) ||
      !/[A-Z]/.test(newData) ||
      !/\d/.test(newData) ||
      !/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(newData) ||
      password.length < 8
    ) {
      setPassWordFeaturesError(true);
      // setPassWordError("")
    } else {
      // setPassWordError("")
      setPassWordFeaturesError(false);
    }
  };

  const handleDateOfBirth = (e) => {
    const newData = e.target.value;
    setDateOfBirth(newData);

    if (newData === "") {
      setDateOfBirthError("date of birth is required");
    }
  };

  const handleAddress = (e) => {
    const newData = e.target.value;
    // setAddrress(newData);
    setAddressInfo(newData)
    setAddressError(true);

    if (newData === "") {
      setAddressError("address is required");
    }
  };
  // console.log(address);

  const handleGender = (e) => {
    const newData = e.target.value;
    setGenderInfo(newData);
  };

  const handleSavings = (e) => {
    const newData = e.target.value;
    setMethodOfSavings(newData);
  };

  const handlePhoneNumber = (e) => {
    const newData = e.target.value;
    setPhoneNumber(newData);
    setPhoneNumberError(true);

    if (newData.trim() === "") {
      setPhoneNumberError("phone number is required");
    }
  };

  const handleContinue = () => {
    if (!firstName || !surName || !email || !password) {
      toast.error("input all fields");
    } else if (passWordFeaturesError === true || emailError.length >= 1) {
      toast.error("please meet up with the requirements 😎");
    } else {
      setStep(2);
    }
  };

  const handleSignUp = () => {
    if (!dateOfBirth || !address || !gender) {
      toast("required");
    } else {
      setLoading(true);
      const datas = {
        fullname: firstName + " " + surName,
        email,
        password,
        dob: dateOfBirth,
        address: address,
        phoneNumber,
        gender,
        methodOfSavings,
      };
      const url = "https://bank-app-z92e.onrender.com/signup";
      axios
        .post(url, datas)
        .then((res) => {
          setLoading(false);
          navigate("/user/home");
        })
        .catch((err) => {
          setLoading(false);
          toast.error(err.response.data);
        });
    }
  };

  // console.log(methodOfSavings);
  return (
    <div className="w-full h-screen flex p-4">
      <ToastContainer />
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
            <p className="text-2xl font-bold">Create your account</p>
            <p className="text-base text-gray-500">
              Enter the fields below to get started
            </p>
          </div>
          {step === 1 ? (
            <>
              <div className="w-full h-max flex items-center flex-col gap-4">
                <div className="w-full h-10 border border-gray-400 rounded flex gap-2 items-center justify-center cursor-pointer">
                  <FcGoogle size={20} />
                  <p>Sign in with Google</p>
                </div>
                <div className="w-full h-max flex gap-2 items-center">
                  <span className="w-1/2 h-max border-b border-gray-500"></span>
                  <span className="text-sm">OR</span>
                  <span className="w-1/2 h-max border-b border-gray-500"></span>
                </div>
              </div>
              <div className="w-full h-max flex flex-col gap-2">
                <div className="w-full h-max flex gap-4">
                  <div className="w-1/2 h-max">
                    <p className="text-sm">First Name</p>
                    <input
                      type="text"
                      className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                      placeholder="John"
                      value={firstName}
                      onChange={handleFirstName}
                    />
                  </div>
                  <div className="w-1/2 h-max">
                    <p className="text-sm">Last Name</p>
                    <input
                      type="text"
                      className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                      placeholder="Doe"
                      value={surName}
                      onChange={handleSurName}
                    />
                  </div>
                </div>
                <div className="w-full h-max">
                  <p className="text-sm">Email</p>
                  <input
                    type="email"
                    className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                    placeholder="example@gmail.com"
                    value={email}
                    onChange={handleEmail}
                  />
                  <div>
                    {emailError ? (
                      <p style={{ color: "red" }}>{emailError}</p>
                    ) : null}
                  </div>
                </div>
                <div className="w-full h-max">
                  <p className="text-sm">Password</p>
                  <div className="w-full h-10 flex items-center rounded border border-gray-300 shadow pr-2">
                    <input
                      type={showPassword ? "password" : "text"}
                      className="w-full outline-none pl-3"
                      placeholder="Create a password with unique caracters"
                      value={password}
                      onChange={handlePassWord}
                    />
                    <span className="w-max h-max cursor-pointer">
                      {showPassword ? (
                        <FaRegEye
                          size={18}
                          onClick={() => setShowPassWord(false)}
                        />
                      ) : (
                        <FaRegEyeSlash
                          size={18}
                          onClick={() => setShowPassWord(true)}
                        />
                      )}
                    </span>
                  </div>
                  {passWordError ? (
                    <p style={{ color: "red" }}>{passWordError}</p>
                  ) : null}
                  {passWordFeaturesError ? (
                    <p style={{ color: "red" }}>
                      password must include,lowercase,uppercase,special
                      character,number and be more than 8
                    </p>
                  ) : null}
                </div>
              </div>
              <div className="w-full h-max flex flex-col items-center gap-3">
                <button
                  className="w-full h-10 rounded bg-[#8c4cfb] text-white"
                  onClick={handleContinue}
                >
                  Continue
                </button>
                <p className="flex gap-4">
                  Already have an account{" "}
                  <NavLink to={"/login"}>
                    <span className="cursor-pointer text-green-600">
                      Log In
                    </span>
                  </NavLink>
                </p>
              </div>
            </>
          ) : step === 2 ? (
            <>
              <div className="w-full h-max flex flex-col gap-4">
                <div className="w-full h-max">
                  <p className="text-sm">Date of birth</p>
                  <input
                    type="date"
                    className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                    placeholder="example@gmail.com"
                    value={dateOfBirth}
                    onChange={handleDateOfBirth}
                  />
                </div>
                {dateOfBirthError ? { dateOfBirthError } : null}
                <div className="w-full h-max">
                  <p className="text-sm">Address</p>
                  <select
                    name=""
                    id=""
                    className="w-full h-10 rounded border border-gray-300 shadow pl-3 text-sm"
                    onChange={handleAddress}
                    value={addressInfo}
                  >
                    <option value="">what state are you from</option>
                    <option value="abia">Abia</option>
                    <option value="Adamawa">Adamawa</option>
                    <option value="Akwa Ibom">Akwa Ibom</option>
                    <option value="Anambra">Anambra</option>
                    <option value="Bauchi">Bauchi</option>
                    <option value="Bayelsa">Bayelsa</option>
                    <option value="Benue">Benue</option>
                    <option value="Borno">Borno</option>
                    <option value="Cross River">Cross River</option>
                    <option value="Delta">Delta</option>
                    <option value="Ebonyi">Ebonyi</option>-
                    <option value="Edo">Edo</option>
                    <option value="Ekiti">Ekiti</option>
                    <option value="Enugu">Enugu</option>
                    <option value="Gombe">Gombe</option>
                    <option value="Imo">Imo</option>
                    <option value="Jigawa">Jigawa</option>
                    <option value="Kaduna">Kaduna</option>
                    <option value="Kano">Kano</option>
                    <option value="Kastina">Kastina</option>
                    <option value="Kebbi">Kebbi</option>
                    <option value="Kogi">Kogi</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Nasarawa">Nasarawa</option>
                    <option value="Niger">Niger</option>
                    <option value="Ogun">Ogun</option>
                    <option value="Ondo">Ondo</option>
                    <option value="Osun">Osun</option>
                    <option value="Oyo">Oyo</option>
                    <option value="Plateau">Plateau</option>
                    <option value="Rivers">Rivers</option>
                    <option value="Sokoto">Sokoto</option>
                    <option value="Taraba">Taraba</option>
                    <option value="Yobe">Yobe</option>
                    <option value="Zamfara">Zamfara</option>
                  </select>
                </div>
                {addressError ? <p>{addressError}</p> : null}
                <div className="w-full h-max">
                  <p className="text-sm">Gender</p>
                  <select
                    name=""
                    id=""
                    className="w-full h-10 rounded border border-gray-300 shadow pl-3 text-sm"
                    value={genderInfo}
                    onChange={handleGender}
                  >
                    <option value=""> Click to select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                </div>
                <div className="w-full h-max">
                  <p className="text-sm">Phone number</p>
                  <input
                    type="number"
                    className="w-full h-10 rounded border border-gray-300 shadow pl-3"
                    placeholder="090111612726"
                    value={phoneNumber}
                    onChange={handlePhoneNumber}
                  />
                </div>
                {phoneNumberError ? (
                  <p style={{ color: "red" }}>{phoneNumberError}</p>
                ) : null}
                <div className="w-full h-max">
                  <p className="text-sm">Method Of Savings</p>
                  <select
                    name=""
                    id=""
                    className="w-full h-10 rounded border border-gray-300 shadow pl-3 text-sm"
                    value={methodOfSavings}
                    onChange={handleSavings}
                  >
                    <option value=""> Click to select account type</option>
                    <option value="savings">Savings</option>
                    <option value="current">Current</option>
                  </select>
                </div>
                <div className="w-full h-max flex flex-col items-center gap-3 mt-3">
                  <button
                    className="w-full h-10 rounded bg-[#8c4cfb] text-white"
                    onClick={handleSignUp}
                  >
                    {loading ? "Loading..." : "Create Account"}
                  </button>
                  <button
                    className="w-full h-10 rounded bg-red-300 text-white"
                    onClick={() => setStep(1)}
                  >
                    Cancel
                  </button>
                  <p className="flex gap-4">
                    Already have an account{" "}
                    <NavLink to={"/login"}>
                      <span className="cursor-pointer text-green-600">
                        Log In
                      </span>
                    </NavLink>
                  </p>
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
