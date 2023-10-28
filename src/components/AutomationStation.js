import React from 'react';
import '../styles/AutomationStation.css';
import ClickableIcons from './ClickableIcons';

const AutomationStation = () => {
    const title = "Connect, Collaborate, Control";
    const bulletPoints = [
        "Discover 200+ AI Capabilities",
        "User-Developer Bridge: Connect with 500+ developers"
    ];

    return (
        <div id="automationStation" className="slide">
            <h2>{title}</h2>
            <ul>
                {bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <ClickableIcons />
        </div>
    );
};

export default AutomationStation;