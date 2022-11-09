import React, { useState } from "react";
import axios from "axios";
import "../styles/planName.css"
const PlanName = ({setPlan}) => {
  const [planName, setPlaneName] = useState("");

  const handlePlanName = (e) => {
    setPlaneName(e.target.value);
  };

  const handleCreate = async() => {
    await axios.post("http://localhost:3000/plans", { planName: planName });
  };

  return (
    <>
      <div className="planNameMainDiv">
        <h3>Plan Name</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio sed
          deserunt tempora culpa fuga, quis laborum ratione unde odio? Id cumque
          a neque fuga nobis placeat impedit, qui vel. Fugit
        </p>
        <input
          type="text"
          placeholder="Name your plan"
          onChange={handlePlanName}
        />
        <div className="createCancelButtons">
          <button onClick={()=>setPlan(false)}>Cancel</button>
          <button onClick={handleCreate}>Create</button>
        </div>
      </div>
    </>
  );
};

export default PlanName;
