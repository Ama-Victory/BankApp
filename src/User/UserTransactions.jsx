import TransactionsList from "./TransactionLis";


const UserTransactions = () => {
    return (
        <div className="w-full h-max">
            <div className="w-full h-max flex p-5">
                <p>Transaction History</p>
                <div className="w-max h-max flex gap-5"></div>
            </div>
            <div className="w-full h-max flex flex-col p-5">
                <TransactionsList/>
            </div>
        </div>
    );
};

export default UserTransactions;
