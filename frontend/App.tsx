import "regenerator-runtime/runtime";

import React from "react";

import "./assets/global.css";
import { utils } from "near-api-js";

const App = () => {
  const num = 5;
  return (
    <div>
      <div>{utils.format.parseNearAmount(num.toString())}</div>
    </div>
  );
};

export default App;
