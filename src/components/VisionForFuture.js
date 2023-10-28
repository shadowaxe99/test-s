import React from 'react';
import InteractiveRoadmap from './InteractiveRoadmap';
import '../styles/VisionForFuture.css';

const VisionForFuture = () => {
    const title = "Our Vision for 2030: Reach 10 million users";
    const bulletPoints = [
        "Seamless Integration of AI into Daily Life: 500+ services",
        "A People-Led AI Revolution: 2 million user-contributions"
    ];

    return (
        <div id="visionForFuture" className="slide">
            <h2>{title}</h2>
            <ul>
                {bulletPoints.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
            <InteractiveRoadmap />
        </div>
    );
};

export default VisionForFuture;