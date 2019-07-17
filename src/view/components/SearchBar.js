import React from 'react';

const SearchBar = ({ handleSearch }) => {
    return (
        <div className="search input-group mb-3">
            <input
                type="search"
                className="form-control"
                placeholder="Search user"
                aria-label="Search Users by Name"
                aria-describedby="button-addon2"
                onChange={handleSearch} />
        </div>
    )
}

export { SearchBar }

