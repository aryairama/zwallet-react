import React from 'react'
import Style from './search.module.css'
import Search from '../../../assets/img/icons/search.svg'

const SearchBar = () => {
    return (
        <div>
            <form className={Style.searchContainer}>
                <input type="text" placeholder='Search' className={Style.searchBox}/>
                <img src={Search} alt="search" className={Style.search}/>
            </form>
        </div>
    )
}

export default SearchBar
