import React from "react";
import "./BasicApp.css";

const BasicApp = ({ tip, wallet }) => {
  return (
    <div className={`container`}>
      <h1>
        Welcome <br />
        {wallet.accountId}
      </h1>
      <button onClick={() => wallet.signOut()}>Logout</button>
    </div>
  );
};

export default BasicApp;
