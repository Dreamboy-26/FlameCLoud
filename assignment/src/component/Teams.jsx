import axios from "axios";
import React, { useEffect, useState } from "react";
import "../styles/teams.css";
const Teams = () => {
  const [teamMates, setTeamMates] = useState([]);
  const selectTeams = async () => {
    const updatedTeams = await axios.get("https://flamecloudtest.herokuapp.com/teams");
    setTeamMates(updatedTeams.data);
  };

  useEffect(() => {
    selectTeams();
  }, []);
  return (
    <div className="teams">
      {teamMates.map((e) => {
        return (
          <>
            <div className="teamsName">
              <button>{e.name}</button>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Teams;
