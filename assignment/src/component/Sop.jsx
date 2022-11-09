import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/sop.css"
import Teams from "./Teams";
const Sop = () => {
  const [getPlanSop, setGetPlanSop] = useState([]);
  
  const [teams, setTeams] = useState(false);
  const inputValue = [];

  const getPlan = async () => {
    const updatedPlan = await axios.get("http://localhost:3000/plans");
    setGetPlanSop(updatedPlan.data);
  };
 

  const handleTeams = (e) => {
    inputValue.push(e.name);
    console.log(inputValue);
  };

  useEffect(() => {
    getPlan();
  
  }, []);
  return (
    <>
      <div className="sopMainDiv">
        <h3>SOP Access</h3>
        {getPlanSop.map((e) => {
          return (
            <>
              <div className="planNameButton">
                <h3>{e.planName}</h3>
                <div>
                  
                </div>
                <button onClick={() => setTeams(!teams)}>Add</button>
              </div>
             
            </>
          );
        })}
        <button>Cancel</button>
        <button>Update</button>
      </div>
    
      <div>
      {teams && <Teams/>}
      </div>
    </>
  );
};

export default Sop;
