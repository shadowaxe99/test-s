import React from 'react';
import '../styles/DemoVideo.css';

const DemoVideo = () => {
    return (
        <div className="demo-video">
            <video width="320" height="240" controls>
                <source src="demo.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default DemoVideo;