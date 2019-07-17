import React from 'react';
import './GenderStats.css';

const GenderStats = ({ numOfFemales, numOfMales }) => {
    return (
        <div className="stats">
            <div className="stats-female">
                Female: {numOfFemales}
            </div>
            <div className="stats-male">
                Male: {numOfMales}
            </div>
        </div>
    )
}

export { GenderStats }
