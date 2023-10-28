import React from 'react';
import { useAI } from '../hooks/useAI';
import RealTimeSimulation from './RealTimeSimulation';
import '../styles/InterconnectedEcosystem.css';

const InterconnectedEcosystem = () => {
    const { protocols } = useAI();

    return (
        <div id="interconnectedEcosystem" className="slide">
            <h2>AI Collaboration for Real-world Solutions</h2>
            <ul>
                <li>AI-to-AI Communication: {protocols.length} protocols</li>
                <li>Collective Utility: Solve problems 3x faster</li>
            </ul>
            <RealTimeSimulation />
        </div>
    );
};

export default InterconnectedEcosystem;