import React from 'react';
import './Marquee.css';
// import newBadge from '../../assets/new.png';

const Marquee = ({displayText}) => {
    return (
        <div className="announcement-bar">
            <div className="announcement-track">
                <div className="announcement-item">
                    <span className="new-badge-text">New</span>

                    <span variant="success"
                    >{displayText}
    
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Marquee;