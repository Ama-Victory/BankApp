import { useSelector } from "react-redux";
import TransactionsList from "./TransactionLis";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const UserHomePage = () => {
  const user = useSelector((state) => state.bankAppStore?.bankAppStore?.user);
  // console.log(user);
  const navigate=useNavigate();

  const moneyIn = (e) => {
    const url = `https://bank-app-z92e.onrender.com/comingIn/${user._id}`;
    axios
      .get(url)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    moneyIn();
  }, [user]);

  return (
    <div className="w-full h-max">
      <div className="w-full h-max flex gap-5 p-5">
        <div className="w-1/2 h-60 border border-gray-300 rounded shadow flex flex-col justify-between">
          <div className="w-full h-12 border-b border-b-gray-200 flex justify-between items-center px-4">
            <p className="font-medium text-sm">SAVINGS ACCOUNT</p>
            <p className="font-medium text-sm">{user.accountNumber}</p>
          </div>
          <div className="W-full h-[calc(100%-6rem)] flex px-5">
            <div className="w-1/2 h-full flex flex-col justify-center gap-5">
              <p>{user.fullname}</p>
              <div className="w-full h-max flex flex-col">
                <p className="text-xs text-gray-400">AVAILABLE BALANCE</p>
                <p className="text-2xl">N{user.accountBalance}.32</p>
              </div>
            </div>
            <div className="w-1/2 h-full flex flex-col justify-center">
              <div className="w-full h-max flex flex-col items-end">
                <p className="text-xs text-gray-400">STATUS</p>
                <p className="text-lg">ACTIVE</p>
              </div>
            </div>
          </div>
          <div className="w-full h-12 border-t border-t-gray-200 flex justify-between items-center px-4">
            <p className="font-medium text-sm">HIDE BALANCE</p>
          </div>
        </div>
        <div className="w-1/2 h-60 border border-gray-300 rounded shadow flex justify-center cursor-pointer items-center gap-3 flex-col" onClick={()=>navigate("/user/transfer")}>
         MAKE A TRANSFER
        </div>
      </div>
      <div className="w-full h-max flex flex-col">
        <TransactionsList />
      </div>
    </div>
  );
};

export default UserHomePage;
