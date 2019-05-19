import React from 'react';

const SearchBox = ({ searchField, searchChange}) => {
    return (
        <div className='pa2'>
            <input 
                className='pa2 ba bg-lightest-white bw3 b--white-40 input-search'
                type='search'
                placeholder='Search Mario Friends' 
                onChange={searchChange}/>
        </div>
    );
}
export default SearchBox;