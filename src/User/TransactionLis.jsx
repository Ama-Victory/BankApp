import {Pagination} from "antd";
// import {FaRegEye} from "react-icons/fa";
// import {SlOptions} from "react-icons/sl";

const TransactionsList = () => {
    const data = [1];
    return (
        <>
            <div className="w-full h-max flex flex-col">
                <p>Recent Transactions</p>
                <div className="w-full h-max flex flex-col">
                    <div className="w-full h-max  overflow-x-auto scrollbar-none border border-gray-300 rounded flex flex-col ">
                        <div className="min-w-full w-max h-10 bg-[#f8fafc] flex text-xs font-semibold">
                            <div className="w-80 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                CUSTOMER
                            </div>
                            <div className="w-40 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                TRANSACTION ID
                            </div>
                            <div className="w-28 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                DATE
                            </div>
                            <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                AMOUNT
                            </div>
                            <div className="w-24 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                TYPE
                            </div>
                            <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                STATUS
                            </div>
                            <div className="w-40 h-full flex items-center pl-3 border-r border-r-gray-300 ">
                                MODE
                            </div>
                        </div>
                        <div className="w-full h-max flex flex-col text-xs">
                            {data.map((index) => (
                                <div
                                    className="min-w-full w-max h-14 bg-white flex"
                                    key={index}
                                >
                                    <div className="w-80 h-full flex items-center gap-2 pl-3 border-r border-r-gray-300 ">
                                        <div className="w-max h-max flex flex-col">
                                            <p className="font-semibold">
                                                Akintunde Abdulquadri
                                            </p>
                                            <p className="text-[10px]">
                                                akintundeabdulquadri@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                    <div className="w-40 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                        #123ABC456DEF
                                    </div>
                                    <div className="w-28 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                        10-20-2024
                                    </div>
                                    <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                        N1,203,444.00
                                    </div>
                                    <div className="w-24 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                        Credit
                                    </div>
                                    <div className="w-32 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                        <p className="w-max h-max p-1 rounded-full bg-yellow-300 px-2 text-yellow-700">
                                            Processing
                                        </p>
                                    </div>
                                    <div className="w-40 h-full flex items-center pl-3 border-r border-r-gray-300 font-medium text-gray-500 ">
                                        Bank Transfer
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full h-12 bg-white flex items-center justify-end">
                        <Pagination />
                    </div>
                </div>
            </div>
        </>
    );
};

export default TransactionsList;
