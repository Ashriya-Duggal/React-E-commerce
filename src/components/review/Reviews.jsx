import React from "react";
import Card from "react-bootstrap/Card";
import "./review.css"
function Reviews(props) {
  const [firstName, lastName, email, phoneNumber] = props.info;
  const [item1, item2, item3, item4, item5] = props.data;
  return (
    <div>
      <Card style={{ width: "18rem" }} className="card">
        <Card.Body >
          <Card.Text>First Name:</Card.Text>
          <h6>{firstName}</h6>
          <Card.Text>Last Name:</Card.Text>
          <h6>{lastName}</h6>
          <Card.Text>Email:</Card.Text>
          <h6>{email}</h6>
          <Card.Text>Phone Number:</Card.Text>
          <h6>{phoneNumber}</h6>
          <Card.Text>PRODUCTS SELECTED:</Card.Text>
          <h6>{item1}</h6>
          <h6>{item2}</h6>
          <h6>{item3}</h6>
          <h6>{item4}</h6>
          <h6>{item5}</h6>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Reviews;
