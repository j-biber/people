import React from 'react';
import { UserList } from './users/UserList';
import { SearchBar } from './SearchBar';
import { GenderStats } from './GenderStats/GenderStats';
import { NoMatch } from './NoMatch/NoMatch';
import { About } from './About/About';

const Main = ({ isGrid, users, onSearch, page }) => {

    const numOfFemales = users.reduce((acc, obj) => {
        if (obj.gender === 'female') acc++;
        return acc
    }, 0);

    const numOfMales = users.reduce((acc, obj) => {
        if (obj.gender === 'male') acc++;
        return acc
    }, 0);

    return (
        <main className='app-width'>
            {(page === 'about') ?
                <About /> :
                <>
                    <SearchBar handleSearch={onSearch} />
                    {users.length ?
                        <>
                            <GenderStats
                                numOfFemales={numOfFemales}
                                numOfMales={numOfMales}
                            />
                            <UserList
                                isGrid={isGrid}
                                users={users}
                            />
                        </> :
                        <NoMatch />
                    }
                </>
            }

        </main>
    )
}

export { Main }
