import { useState, useEffect } from 'react';
import budgetData from '../data/budget';

const useBudget = () => {
  const [budget, setBudget] = useState([]);

  useEffect(() => {
    setBudget(budgetData);
  }, []);

  return budget;
};

export default useBudget;