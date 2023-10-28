import React from 'react';
import { useSchedule } from '../hooks/useSchedule';
import '../styles/AISchedulingBot.css';

const AISchedulingBot = () => {
    const { scheduleMeeting } = useSchedule();

    const handleSchedule = () => {
        scheduleMeeting();
    }

    return (
        <div className="ai-scheduling-bot">
            <h2>Ready to Join Us?</h2>
            <p>Schedule a Meeting: Availability for next 2 weeks</p>
            <button onClick={handleSchedule}>Schedule Meeting</button>
        </div>
    );
}

export default AISchedulingBot;