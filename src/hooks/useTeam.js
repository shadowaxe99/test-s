import { useState, useEffect } from 'react';
import team from '../data/team';

const useTeam = () => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    setTeamData(team);
  }, []);

  return teamData;
};

export default useTeam;