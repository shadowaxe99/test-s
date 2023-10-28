import { useState, useEffect } from 'react';
import agents from '../data/agents';

const useAI = () => {
  const [aiAgents, setAIAgents] = useState([]);

  useEffect(() => {
    setAIAgents(agents);
  }, []);

  return aiAgents;
};

export default useAI;