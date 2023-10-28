import React from 'react';
import { useUser } from '../hooks/useUser';
import { useTime } from '../hooks/useTime';
import '../styles/PersonalizedWelcome.css';

const PersonalizedWelcome = () => {
    const { name } = useUser();
    const { currentTime } = useTime();

    return (
        <div className="personalizedWelcome">
            <p>Hello, {name}, it's {currentTime}</p>
        </div>
    );
};

export default PersonalizedWelcome;