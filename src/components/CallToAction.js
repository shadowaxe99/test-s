import React from 'react';
import AISchedulingBot from './AISchedulingBot';
import useSchedule from '../hooks/useSchedule';
import '../styles/CallToAction.css';

const CallToAction = () => {
  const { schedule } = useSchedule();

  return (
    <div id="callToAction" className="slide">
      <h2>Ready to Join Us?</h2>
      <ul>
        <li>Schedule a Meeting: Availability for next 2 weeks</li>
        <li>Download Our Whitepaper: 30 pages of in-depth analysis</li>
      </ul>
      <AISchedulingBot schedule={schedule} />
    </div>
  );
};

export default CallToAction;