import React from 'react';
import { useRoadmap } from '../hooks/useRoadmap';
import * as d3 from 'd3';

const InteractiveRoadmap = () => {
    const { roadmapData } = useRoadmap();

    React.useEffect(() => {
        const svg = d3.select("#roadmap")
            .append("svg")
            .attr("width", 800)
            .attr("height", 600);

        const milestones = svg.selectAll("circle")
            .data(roadmapData)
            .enter()
            .append("circle");

        milestones
            .attr("cx", (d, i) => i * 100 + 50)
            .attr("cy", 300)
            .attr("r", 50)
            .attr("fill", "blue")
            .on("click", (d) => {
                alert(`Milestone: ${d.title}\nDescription: ${d.description}`);
            });
    }, [roadmapData]);

    return (
        <div id="roadmap">
            <h2>Our Vision for 2030: Reach 10 million users</h2>
            <ul>
                <li>Seamless Integration of AI into Daily Life: 500+ services</li>
                <li>A People-Led AI Revolution: 2 million user-contributions</li>
            </ul>
            <p>Click on the milestones to learn more.</p>
        </div>
    );
};

export default InteractiveRoadmap;