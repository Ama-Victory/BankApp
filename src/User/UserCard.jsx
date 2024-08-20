import axios from "axios";
import { useState } from "react";
import { useSelector } from "react-redux";

const UserCard = () => {
  const [showCard, setShowCard] = useState(false);
  const user = useSelector((user) => user.bankAppStore?.bankAppStore?.user);
  // const [card,setCard]=useState();

  // const handleCard = () => {
  //   const url = `https://bank-app-z92e.onrender.com/createCardNumber/${user._id}`;
  //   axios
  //     .post(url)
  //     .then((res) => {
  //       console.log(res);
  //       setShowCard(true);
  //       setCard(res?.data?.data)
  //     })
  //     .catch((err) => console.log(err));
  // };

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="container">
        {/* {showCard ? (
          <> */}
            <div className="card">
              <div className="card-inner">
                <div className="front">
                  <img
                    src="https://i.ibb.co/PYss3yv/map.png"
                    className="map-img"
                  />
                  <div className="row">
                    <img src="https://i.ibb.co/G9pDnYJ/chip.png" width="60px" />
                    <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="60px" />
                  </div>
                  <div className="row card-no">
                    {/* <p>5244</p>
                    <p>2150</p>
                    <p>8252</p>
                    <p>6420</p> */}
                    <p>{user.cardNumber}</p>
                  </div>
                  <div className="row card-holder">
                    <p>CARD HOLDER</p>
                    <p>VALID TILL</p>
                  </div>
                  <div className="row name">
                    <p>{user.fullname}</p>
                    <p>10 / 25</p>
                  </div>
                </div>
                <div className="back">
                  <img
                    src="https://i.ibb.co/PYss3yv/map.png"
                    className="map-img"
                  />
                  <div className="bar"></div>
                  <div className="row card-cvv">
                    <div>
                      <img src="https://i.ibb.co/S6JG8px/pattern.png" />
                    </div>
                    <p>{user.cvv}</p>
                  </div>
                  <div className="row card-text">
                    <p>
                      By using this card, the holder agrres to all the terms
                      under which it was issued
                    </p>
                    <p>
                      This card is issued and remains the property of Niviq Inc
                    </p>
                  </div>
                  <div className="row signature">
                    <p>CUSTOMER SIGNATURE</p>
                    <img src="https://i.ibb.co/WHZ3nRJ/visa.png" width="80px" />
                  </div>
                </div>
              </div>
            </div>
          {/* </>
        ) : (
          <button
            style={{ background: "#757ed6", width: "15rem", height: "3rem" }}
            onClick={handleCard}
          >
            Generate your card here🤑
          </button>
        )} */}
      </div>
    </div>
  );
};

export default UserCard;
