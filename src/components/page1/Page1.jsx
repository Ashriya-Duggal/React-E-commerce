import React, { useState, useEffect } from "react";
import "./page.css";

function Page1(props) {
  const [grey, setGrey] = useState(false);
  const [data, setData] = useState();

  function handleClick(e) {
    if (e.target.name === props.name) {
      setGrey(true);
    }

    setData(e.target.name);
  }

  useEffect(() => {
    if (data) {
      props.temp(data);
    }
    // eslint-disable-next-line
  }, [data]);

  console.log(data);
  return (
      <tr>
        <td>{props.name}</td>
        <td>{props.price}</td>
        <td>
          <button
            name={props.name}
            onClick={handleClick}
            style={{
              backgroundColor: grey ? "grey" : "white",
              paddingTop: "5px",
              paddingBottom: "8px",
            }}
          >
            buy
          </button>
        </td>
      </tr>
    
  );
}

export default Page1;
