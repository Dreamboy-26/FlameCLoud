import axios from "axios";
import React from "react";
import { useState } from "react";
import "../styles/plans.css"
const Plans = ({data}) => {
    const [cat,setCat]=useState(false)
  const deletePlan = async (e) => {
    await axios.delete(`https://flamecloudtest.herokuapp.com/plans/${e.id}`);
  };

  

  return (
    <div className="blur">
       <div className="accordian">
      <h1 className="planName">{data.planName}</h1>
      <button className="plandeleteButton" onClick={() => deletePlan(data)}>delete</button>
    </div>
    </div>
 
  );
};

export default Plans;
