import React from 'react';
import { Navigation } from './Navigation/Navigation';

const Header = ({ isGrid, onLayoutChange, onRefresh, onPageLinkClick }) => {
    return (
        <header>
            <div className="app-width flex-row header">
                <div className="logo">
                    <a href="." onClick={onPageLinkClick}>Bit People</a>
                </div>
                <Navigation
                    isGrid={isGrid}
                    onLayoutChange={onLayoutChange}
                    onRefresh={onRefresh}
                    onPageLinkClick={onPageLinkClick}
                />
            </div>
        </header>
    )
}

export { Header }
