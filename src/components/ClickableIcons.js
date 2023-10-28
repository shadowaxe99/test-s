import React from 'react';
import './ClickableIcons.css';

const ClickableIcons = ({ miniDemos }) => {
  return (
    <div className="clickable-icons-container">
      {miniDemos.map((demo, index) => (
        <div key={index} className="icon-container">
          <img src={demo.icon} alt={demo.title} className="icon" />
          <div className="icon-info">
            <h4>{demo.title}</h4>
            <p>{demo.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ClickableIcons;