import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/sop.css"
import Teams from "./Teams";
const Sop = ({setAccess}) => {
  const [getPlanSop, setGetPlanSop] = useState([]);
  
  const [teams, setTeams] = useState(false);
  const inputValue = [];

  const getPlan = async () => {
    const updatedPlan = await axios.get("https://flamecloudtest.herokuapp.com/plans");
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
        <button onClick={()=>setAccess(false)}>Cancel</button>
        <button onClick={()=>setAccess(false)}>Update</button>
      </div>
    
      <div className="teamsop">
      {teams && <Teams/>}
      </div>
    </>
  );
};

export default Sop;
