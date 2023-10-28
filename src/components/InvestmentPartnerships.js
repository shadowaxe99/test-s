import React from 'react';
import { useInvestment } from '../hooks/useInvestment';
import InteractiveBudgetChart from './InteractiveBudgetChart';
import '../styles/InvestmentPartnerships.css';

const InvestmentPartnerships = () => {
    const { investmentOpportunities, strategicPartnerships } = useInvestment();

    return (
        <div id="investmentPartnerships" className="slide">
            <h2 className="title">Be a Part of the Revolution</h2>
            <ul className="bulletPoints">
                <li>Investment Opportunities: {investmentOpportunities}</li>
                <li>Strategic Partnerships: {strategicPartnerships}</li>
            </ul>
            <InteractiveBudgetChart />
        </div>
    );
};

export default InvestmentPartnerships;