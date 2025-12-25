import React from 'react'

const SearchBlock = ({placeholder, where}) => {
    return (
        <div className="search">
            <input type="text" className='base-text' placeholder={placeholder} />
            <button className='base-text'>НаЙТИ</button>
        </div>
    )
}

export default SearchBlock
