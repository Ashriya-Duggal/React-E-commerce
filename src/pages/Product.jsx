import React, { useState } from "react";
import Page1 from "../components/page1/Page1";
import Table from "react-bootstrap/Table";
import { useNavigate } from "react-router-dom";
function Product() {
  const navigate = useNavigate();

  const [checkoutData, setCheckoutData] = useState([]);

  function checkoutClick() {
    navigate("/Checkout", { state: { checkoutData } });
  }

  function temp(data) {
    setCheckoutData((prev) => {
      return [...prev, data];
    });
  }
  return (
    <div className="main">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Page1 temp={temp} name="shirt" price="25" />
          <Page1 temp={temp} name="trousers" price="35" />
          <Page1 temp={temp} name="pants" price="18" />
          <Page1 temp={temp} name="tops" price="45" />
          <Page1 temp={temp} name="tees" price="15" />
        </tbody>
      </Table>
      <button className="purchase" onClick={checkoutClick}>
        Checkout
      </button>
    </div>
  );
}

export default Product;
