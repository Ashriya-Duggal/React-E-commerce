import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { useNavigate, useLocation } from "react-router-dom";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import "./purchase.css";

function Purchase(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state.checkoutData;

  const [firstNameError, setfirstNameError] = useState(false);
  const [lastNameError, setlastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneNumberError, setPhoneError] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  function firstNameChange(e) {
    const firstNameValue = e.target.value;
    setFirstName(firstNameValue);
  }

  function lastNameChange(e) {
    const lastNameValue = e.target.value;
    setLastName(lastNameValue);
  }

  function emailChange(e) {
    const emailValue = e.target.value;
    setEmail(emailValue);
  }

  function phoneNumberChange(e) {
    const phoneNumberValue = e.target.value;
    setPhoneNumber(phoneNumberValue);
  }

  const fname = "^[A-Za-z]{1,}[.]{0,1}[A-Za-zs]{0,}$";
  const lname = "^[A-Za-z]{1,}[.]{0,1}[A-Za-zs]{0,}$";
  const email1 = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
  const phone1 = /^[0-9]*$/;

  function handleClick() {
    if (!firstName.match(fname) ) {
      setfirstNameError(true);
    } else setfirstNameError(false);

    if (!lastName.match(lname)) {
      setlastNameError(true);
    } else setlastNameError(false);

    if (!email.match(email1)) {
      setEmailError(true);
    } else setEmailError(false);

    if (!phoneNumber.match(phone1)) {
      setPhoneError(true);
    } else setPhoneError(false);

    if (
      firstName.match(fname) &&
      lastName.match(lname) &&
      email.match(email1) &&
      phoneNumber.match(phone1)
    ) {
      setfirstNameError(false);
      setlastNameError(false);
      setEmailError(false);
      setPhoneError(false);
      navigate("/review", {
        state: {
          data: data,
          firstName: firstName,
          lastName: lastName,
          email: email,
          phoneNumber: phoneNumber,
        },
      });
    }
  }
  console.log(data);
  return (
    <div className="check">
      <Table bordered hover>
        <thead>
          <tr>
            <th>Selected items</th>
          </tr>
        </thead>
        <tbody>
          {props.checkoutData.map((value) => {
            return (
              <tr>
                <td>{value}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <div>
        <div className="checkout-main">
          <h1> Customer Info</h1>
          <FloatingLabel
            controlId="floatingInput1"
            label="Your Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="firstName"
              onChange={firstNameChange}
              placeholder="Your First Name"
              required
              style={{ border: firstNameError ? "red 2px solid" : "" }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingInput"
            label="Your Last Name"
            className="mb-3"
          >
            <Form.Control
              type="text"
              name="lastName"
              onChange={lastNameChange}
              placeholder="Your Last Name"
              required
              style={{ border: lastNameError ? "red 2px solid" : "" }}
            />
          </FloatingLabel>

          <FloatingLabel
            controlId="floatingInput1"
            label="Email address"
            className="mb-3"
          >
            <Form.Control
              type="email"
              name="email"
              onChange={emailChange}
              placeholder="name@example.com"
              style={{ border: emailError ? "red 2px solid" : "" }}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Phone Number">
            <Form.Control
              type="tel"
              name="phoneNumber"
              onChange={phoneNumberChange}
              placeholder="Phone Number"
              required
              className="eye1"
              style={{ border: phoneNumberError ? "red 2px solid" : "" }}
            />
          </FloatingLabel>

          <button className="btn1" onClick={handleClick} type="submit">
            Review and submit
          </button>
        </div>
      </div>
    </div>
  );
}

export default Purchase;
