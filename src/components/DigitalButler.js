import React from 'react';
import DemoVideo from './DemoVideo';
import '../styles/DigitalButler.css';

const DigitalButler = () => {
    const title = "Your 24/7 Digital Butler";
    const bulletPoints = [
        "Smart Home Management: Control up to 20 devices",
        "Financial Portfolio Optimization: Increase ROI by 15%"
    ];

    return (
        <div className="digitalButler">
            <h2>{title}</h2>
            <ul>
                {bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <DemoVideo />
        </div>
    );
};

export default DigitalButler;