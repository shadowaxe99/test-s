import { useState, useEffect } from 'react';
import hologramData from '../data/hologram.js';

const useHologram = () => {
  const [holograms, setHolograms] = useState([]);

  useEffect(() => {
    setHolograms(hologramData);
  }, []);

  return holograms;
};

export default useHologram;