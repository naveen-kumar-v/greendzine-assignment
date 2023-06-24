import React from 'react'

export default function SearchBar({ searchTerm, setSearchTerm, onInput }) {
    const handleSearch = (event) => {
        onInput(event.target.value);
    };

    const handleClick = () => {
        setSearchTerm('');
    }
    return (
        <div className="searchBar">
            <input
                className='searchInput'
                type="text"
                placeholder="Search by first name"
                value={searchTerm}
                onChange={handleSearch}
            />
            <button className='clearSearch' onClick={handleClick}>X</button>
        </div>
    )
}
