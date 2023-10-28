import React from 'react';
import { useTeam } from '../hooks/useTeam';
import AIHologram from './AIHologram';
import '../styles/TheTeam.css';

const TheTeam = () => {
  const team = useTeam();

  return (
    <div id="theTeam" className="slide">
      <h2>Meet the Innovators</h2>
      <div className="team-members">
        {team.map((member, index) => (
          <div key={index} className="team-member">
            <h3>{member.role} - {member.experience}</h3>
            <AIHologram member={member} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TheTeam;