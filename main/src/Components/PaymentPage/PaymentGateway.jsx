import React from "react";
import "./PaymentGateway.css";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import AccountBalanceWalletIcon from "@material-ui/icons/AccountBalanceWallet";
import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import DoubleArrowIcon from "@material-ui/icons/DoubleArrow";

const PaymentGateway = () => {
  return (
    <>
      <div className="gateway__header">
        <div>
          <img
            src="https://images.ixigo.com/image/upload/f_auto/8a178b024470af59d0e1387babf3d02c-imdac.png"
            alt="ixigo"
          />
        </div>
        <div>
          <div>DP</div>
        </div>
      </div>

      <div className="gateway__cont">
        <div className="gateway__title">
          <p>AMOUNT TO PAY</p>
          <p>564</p>
        </div>
        <div className="gateway__upiCont">
          <div className="gateway__upiContLeft">
            <div className="gateway__flex">
              <div>
                <AccountBalanceWalletIcon />
              </div>
              <div>WALLET</div>
            </div>
            <div className="gateway__flex">
              <div>
                <DoubleArrowIcon />
              </div>
              <div>UPI</div>
            </div>
            <div className="gateway__flex">
              <div>
                <CreditCardIcon />
              </div>
              <div>CREDIT/DEBIT CARD</div>
            </div>

            <div className="gateway__flex">
              <div>
                <AccountBalanceIcon />
              </div>
              <div>NET BANKING</div>
            </div>
          </div>
          <div className="gateway__upiContRight">
            <div>
              <div>
                <img
                  src="https://cdn4.iconfinder.com/data/icons/circle-payment/32/payment_006-amazon-128.png"
                  alt=""
                  width="20px"
                />
              </div>
              <div>
                <p>Amazon pay</p>
              </div>
              <div>
                <button>PAY SECURLY</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentGateway;
