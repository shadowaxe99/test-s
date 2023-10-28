import React from 'react';
import { useTestimonials } from '../hooks/useTestimonials';
import '../styles/DemocratizingAccess.css';

const DemocratizingAccess = () => {
  const { testimonials, activateTestimonial } = useTestimonials();

  return (
    <div id="democratizingAccess">
      <h2>AI for Everyone, Everywhere</h2>
      <ul>
        <li>Affordable: Plans start at $9.99/month</li>
        <li>Accessible: Available in 50 countries</li>
      </ul>
      <div className="interactiveElement">
        <button onClick={activateTestimonial}>Tell me more</button>
        {testimonials.map((testimonial, index) => (
          <p key={index}>{testimonial}</p>
        ))}
      </div>
    </div>
  );
};

export default DemocratizingAccess;