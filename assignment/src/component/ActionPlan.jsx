import React, { useEffect } from "react";
import "../styles/actions.css";

import { useState } from "react";
import PlanName from "./PlanName";
import axios from "axios";
import Sop from "./Sop";
import Plans from "./Plans";

const ActionPlan = () => {
  const [plan, setplan] = useState(false);
  const [access, setAccess] = useState(false);

  const [newPlan, setNewPlan] = useState([]);


  const handleCreatePlan = () => {
    setplan(!plan);
  };

  const handleManageAccess = () => {
    setAccess(!access);
  };

  const getPlan = async () => {
    const updatedPlan = await axios.get("http://localhost:3000/plans");
    setNewPlan(updatedPlan.data);
  };

  useEffect(() => {
    getPlan();
  }, [newPlan]);

  return (
    <>
      <div className="mainActionDiv">
        <p className="title">SOP</p>
        <div className="titleAndButtons">
          <div>
            <h1>Action Plan</h1>
          </div>

          <div className="manageAndPlanButtons">
            <button onClick={handleManageAccess}>Manage Access</button>
            <button onClick={handleCreatePlan}>New Plan</button>
          </div>
        </div>
        {newPlan.map((e) => {
          return (
            <>
              <Plans data={e} />
            </>
          );
        })}
      </div>

      {plan && <PlanName setPlan={setplan} />}
      {access && <Sop />}
    </>
  );
};

export default ActionPlan;
