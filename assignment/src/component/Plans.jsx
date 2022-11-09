import axios from "axios";
import React from "react";
import { useState } from "react";
import "../styles/plans.css"
const Plans = ({data}) => {
    const [cat,setCat]=useState(false)
  const deletePlan = async (e) => {
    await axios.delete(`http://localhost:3000/plans/${e.id}`);
  };

  

  return (
    <div className="accordian">
      <h1 className="planName">{data.planName}</h1>
      <button className="plandeleteButton" onClick={() => deletePlan(data)}>delete</button>
    </div>
  );
};

export default Plans;
