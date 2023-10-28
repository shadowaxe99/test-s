import { useState, useEffect } from 'react';
import schedulingBotData from '../data/schedulingBot.js';

const useSchedulingBot = () => {
  const [schedulingBot, setSchedulingBot] = useState(null);

  useEffect(() => {
    setSchedulingBot(schedulingBotData);
  }, []);

  return schedulingBot;
};

export default useSchedulingBot;