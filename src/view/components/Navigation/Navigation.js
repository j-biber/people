import React from 'react';
import './Navigation.css';


const Navigation = ({ isGrid, onLayoutChange, onRefresh, onPageLinkClick }) => {
    return (
        <nav>
            <ul className="page-navigation">
                <li>
                    <a href="." onClick={onPageLinkClick}>About</a>
                </li>
                <li>
                    <a href="." onClick={onRefresh}>
                        <i className="fas fa-redo-alt"></i>
                    </a>
                </li>
                {isGrid ?
                    <li>
                        <a href="." onClick={onLayoutChange}>
                            <i className="fas fa-list"></i>
                        </a>
                    </li> :
                    <li>
                        <a href="." onClick={onLayoutChange}>
                            <i className="fas fa-grip-horizontal"></i>
                        </a>
                    </li>
                }
            </ul>
        </nav>
    )
}

export { Navigation }