import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const UserTransfer = () => {
  const [accountNumber, setAccount] = useState();
  const [amount, setAmount] = useState();
  const [description, setDescription] = useState();
  const [showPin, setShowPin] = useState(false);
  const [pin, setPin] = useState();
  const userId=useSelector((state)=>state.bankAppStore?.bankAppStore?.user._id)

  const handlePin = (e) => {
    const newData = e.target.value;
    setPin(newData);
  };

  const handleAccount = (e) => {
    const newData = e.target.value;
    setAccount(newData);
  };

  const handleAmount = (e) => {
    const newData = e.target.value;
    setAmount(newData);
  };

  const handleDescription = (e) => {
    const newData = e.target.value;
    setDescription(newData);
  };

  const handleProceed=()=>{
    
    if(!accountNumber || !amount || !description){
      alert("enter all requirement")
    }else{
      setShowPin(true)
    }
  }

  const handleTransfer =()=>{
     if(!pin){
      alert("enter pin")
     }else{
      const data={accountNumber,amount,description,pin:Number(pin)};
      const url =`https://bank-app-z92e.onrender.com/transfer/${userId}`
      axios.post(url,{accountNumber,amount,description,pin:Number(pin)})
      .then((res)=>(
        console.log(res)
      ))
      .catch((err)=>{
        console.log(err)
      })
     }
  }

  return (
    <div className="w-full h-[80vh] ">
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-1/3 h-max flex flex-col gap-4 items-center justify-center shadow-xl p-4">
          <div className="w-full h-max flex flex-col gap-2">
            <p className="text-sm">Recipient Account Number</p>
            <input
              type="number"
              className="w-full h-10 rounded border border-gray-300 shadow pl-3"
              onChange={handleAccount}
              placeholder="enter account number"
            />
          </div>
          <div className="w-max h-max px-4 py-1 bg-slate-500 rounded-full text-xs font-semibold text-white">
            <p>Account Name Will Appear Here</p>
          </div>
          <div className="w-full h-max flex flex-col gap-2">
            <p className="text-sm">Amount</p>
            <input
              type="number"
              className="w-full h-10 rounded border border-gray-300 shadow pl-3"
              onChange={handleAmount}
              placeholder="enter amount to send"
            />
          </div>
          <div className="w-full h-max flex flex-col gap-2">
            <p className="text-sm">Transaction Description</p>
            <input
              type="text"
              className="w-full h-10 rounded border border-gray-300 shadow pl-3"
              onChange={handleDescription}
              placeholder="enter description"
            />
          </div>
          <div className="w-full h-max flex items-center justify-center">
            <button
              className="w-max h-max px-8 py-2 rounded-full bg-green-700 text-white text-sm"
              onClick={handleProceed}
            >
              PROCEED
            </button>
          </div>
          {showPin ? (
            <>

            <input
              type="number"
              onChange={handlePin}
              style={{ boxShadow: "2px 2px 2px 2px" }}
            />
            <button style={{background:"green",width:"4rem"}} onClick={handleTransfer}>send</button>
            </>
          ) : null}
        </div>
      </div>
      l
    </div>
  );
};

export default UserTransfer;
