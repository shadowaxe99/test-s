import { useState, useEffect } from 'react';
import testimonials from '../data/testimonials';

const useTestimonials = () => {
  const [activeTestimonials, setActiveTestimonials] = useState([]);

  const activateTestimonials = () => {
    setActiveTestimonials(testimonials.slice(0, 3));
  };

  useEffect(() => {
    const voiceCommand = new SpeechRecognition();
    voiceCommand.onresult = (event) => {
      const transcript = event.results[0][0].transcript;
      if (transcript.toLowerCase() === 'tell me more') {
        activateTestimonials();
      }
    };
    voiceCommand.start();
    return () => voiceCommand.stop();
  }, []);

  return activeTestimonials;
};

export default useTestimonials;