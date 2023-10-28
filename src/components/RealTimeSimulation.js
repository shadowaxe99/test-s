import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { useAI } from '../hooks/useAI';
import '../styles/RealTimeSimulation.css';

const RealTimeSimulation = () => {
  const { aiAgents } = useAI();
  const ref = useRef();

  useEffect(() => {
    const svg = d3.select(ref.current);
    const width = +svg.attr('width');
    const height = +svg.attr('height');

    const simulation = d3.forceSimulation(aiAgents)
      .force('charge', d3.forceManyBody().strength(-10))
      .force('center', d3.forceCenter(width / 2, height / 2))
      .on('tick', ticked);

    function ticked() {
      const u = d3.select('svg')
        .selectAll('circle')
        .data(aiAgents);

      u.enter()
        .append('circle')
        .attr('r', 5)
        .merge(u)
        .attr('cx', function(d) {
          return d.x;
        })
        .attr('cy', function(d) {
          return d.y;
        });

      u.exit().remove();
    }
  }, [aiAgents]);

  return (
    <div className="real-time-simulation">
      <svg ref={ref} width="500" height="500"></svg>
    </div>
  );
};

export default RealTimeSimulation;