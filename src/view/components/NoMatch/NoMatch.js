import React from 'react';
import './NoMatch.css';

const NoMatch = () => {
    return (
        <div className='no-match'>
            <p>We couldn't find any user matching your search.</p>
            <i className="far fa-sad-tear"></i>
        </div>
    )
}

export { NoMatch }