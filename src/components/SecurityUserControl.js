import React from 'react';
import ARPopup from './ARPopup';
import '../styles/SecurityUserControl.css';

const SecurityUserControl = () => {
    const title = "Your Data, Your Control";
    const bulletPoints = [
        "Blockchain Security: 256-bit encryption",
        "Decentralized Platform: 10,000 nodes"
    ];

    return (
        <div id="securityUserControl" className="slide">
            <h2>{title}</h2>
            <ul>
                {bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <ARPopup />
        </div>
    );
};

export default SecurityUserControl;