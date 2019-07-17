import React from 'react';

const Footer = ({ lastFetched }) => {
    return (
        <footer>
            <div className='app-width flex-row footer'>
                <span>Copyright 2019</span>
                <div>Last update: {lastFetched} ago</div>
            </div>
        </footer>
    )
}

export { Footer }