import { useState, useEffect } from 'react';
import scheduleData from '../data/schedule.js';

const useSchedule = () => {
  const [schedule, setSchedule] = useState([]);

  useEffect(() => {
    setSchedule(scheduleData);
  }, []);

  return schedule;
};

export default useSchedule;