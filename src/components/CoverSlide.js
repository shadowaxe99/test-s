```javascript
import React from 'react';
import './CoverSlide.css';
import Logo from './Logo.js';
import Animation from './3DAnimation.js';

const CoverSlide = () => {
    return (
        <div id="coverSlide" className="slide">
            <Logo />
            <h1 className="title">Elysium Innovations</h1>
            <h2 className="subtitle">Revolutionizing AI with a User-First Approach</h2>
            <p className="date">October 2023</p>
            <Animation />
        </div>
    );
}

export default CoverSlide;
```