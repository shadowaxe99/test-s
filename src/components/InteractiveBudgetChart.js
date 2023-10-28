import React from 'react';
import * as d3 from 'd3';
import { useInvestment } from '../hooks/useInvestment';
import '../styles/InteractiveBudgetChart.css';

const InteractiveBudgetChart = () => {
  const { investment } = useInvestment();

  React.useEffect(() => {
    const data = investment.allocation;
    const width = 500;
    const height = 500;
    const radius = Math.min(width, height) / 2;

    const color = d3.scaleOrdinal(d3.schemeCategory10);

    const svg = d3.select('.chart')
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2}, ${height / 2})`);

    const arc = d3.arc()
      .innerRadius(0)
      .outerRadius(radius);

    const pie = d3.pie()
      .value((d) => d.value)
      .sort(null);

    const path = svg.selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('d', arc)
      .attr('fill', (d, i) => color(i));

    path.append('title')
      .text((d) => `${d.data.name}: ${d.data.value}`);
  }, [investment]);

  return (
    <div className="chart">
      <h2>Investment Allocation</h2>
    </div>
  );
};

export default InteractiveBudgetChart;