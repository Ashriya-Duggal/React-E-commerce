import React from "react";
import { useLocation } from "react-router-dom";
import Purchase from "../components/purchase/Purchase";

function Checkout() {
  const location = useLocation();
  const checkoutData = location.state.checkoutData;

  return (
    <div>
       <h1>Checkout Page</h1>
      <div className="data">
        <Purchase checkoutData={checkoutData} />
      </div>
    </div>
  );
}

export default Checkout;
