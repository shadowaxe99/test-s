import { useState, useEffect } from 'react';
import investmentData from '../data/investment';

const useInvestment = () => {
  const [investment, setInvestment] = useState(null);

  useEffect(() => {
    setInvestment(investmentData);
  }, []);

  return investment;
};

export default useInvestment;