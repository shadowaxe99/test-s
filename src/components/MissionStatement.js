import React from 'react';
import { useTime, useUser } from '../hooks';
import '../styles/MissionStatement.css';

const MissionStatement = () => {
  const { currentTime } = useTime();
  const { userName } = useUser();

  return (
    <div id="missionStatement" className="slide">
      <h2 className="title">Our Mission: To serve 1 million users by 2025.</h2>
      <div className="interactiveElement">
        <p>Hello, {userName}, it's {currentTime}</p>
      </div>
    </div>
  );
};

export default MissionStatement;