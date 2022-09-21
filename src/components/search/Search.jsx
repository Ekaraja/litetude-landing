import React from 'react'
import search from "../../assets/icons/Icon-Search.svg"

import './search.css'

const Search = () => {
	return (
		<div className='search'>
			<img src={search} alt="Search Icon" />
			<input type="text" placeholder='Search' />
		</div>
	)
}

export default Search