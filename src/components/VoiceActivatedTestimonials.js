import React, { useEffect, useState } from 'react';
import { useTestimonials } from '../hooks/useTestimonials';
import '../styles/VoiceActivatedTestimonials.css';

const VoiceActivatedTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const testimonials = useTestimonials();

  const handleVoiceCommand = (event) => {
    if (event.results[0][0].transcript.toLowerCase() === 'tell me more') {
      setActiveTestimonial((prevTestimonial) => (prevTestimonial + 1) % testimonials.length);
    }
  };

  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    const recognition = new SpeechRecognition();

    recognition.onresult = handleVoiceCommand;
    recognition.start();

    return () => recognition.stop();
  }, []);

  return (
    <div className="voice-activated-testimonials">
      <h2>Voice-Activated Testimonials</h2>
      <p>Say "Tell me more" to activate 3 reviews.</p>
      {testimonials[activeTestimonial] && (
        <div className="testimonial">
          <h3>{testimonials[activeTestimonial].title}</h3>
          <p>{testimonials[activeTestimonial].content}</p>
          <p>- {testimonials[activeTestimonial].author}</p>
        </div>
      )}
    </div>
  );
};

export default VoiceActivatedTestimonials;