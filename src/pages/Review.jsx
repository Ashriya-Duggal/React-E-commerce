import React from "react";
import Reviews from "../components/review/Reviews";
import { useLocation } from "react-router-dom";

function Review() {
  const location = useLocation();
  const { data } = location.state;

  const { firstName, lastName, email, phoneNumber } = location.state;

  return (
    <div>
      <Reviews data={data} info={[firstName, lastName, email, phoneNumber]} />
    </div>
  );
}

export default Review;
