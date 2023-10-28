import React from 'react';
import { useHologram } from '../hooks/useHologram';
import '../styles/AIHologram.css';

const AIHologram = () => {
  const { team } = useHologram();

  return (
    <div className="ai-hologram">
      {team.map((member, index) => (
        <div key={index} className="team-member">
          <h2>{member.role}</h2>
          <p>{member.description}</p>
          <div className="hologram-container">
            {/* Replace with actual hologram component */}
            <div className="hologram">
              <p>{member.hologramSpeech}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AIHologram;