import { useState, useEffect } from 'react';
import roadmapData from '../data/roadmap';

const useRoadmap = () => {
  const [roadmap, setRoadmap] = useState([]);

  useEffect(() => {
    setRoadmap(roadmapData);
  }, []);

  return roadmap;
};

export default useRoadmap;