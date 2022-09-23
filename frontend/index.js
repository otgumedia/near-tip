// React
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

// NEAR
import { Tip } from "./near-interface";
import { Wallet } from "./near-wallet";

// When creating the wallet you can optionally ask to create an access key
// Having the key enables to call non-payable methods without interrupting the user to sign
const wallet = new Wallet({ createAccessKeyFor: process.env.CONTRACT_NAME });

// Abstract the logic of interacting with the contract to simplify your flow
const tip = new Tip({
  contractId: process.env.CONTRACT_NAME,
  walletToUse: wallet,
});

// Setup on page load
window.onload = async () => {
  const isSignedIn = await wallet.startUp();

  ReactDOM.render(
    <App isSignedIn={isSignedIn} tip={tip} wallet={wallet} />,
    document.getElementById("root")
  );
};
