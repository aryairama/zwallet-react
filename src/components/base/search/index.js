import React from 'react'
import Style from './search.module.css'
import Search from '../../../assets/img/icons/search.svg'

const SearchBar = (props) => {
    return (
        <div>
            <form onSubmit={(e)=> e.preventDefault()} className={Style.searchContainer}>
                <input type="text" name={props.name} value={props.value} onChange={props.onChange} placeholder='Search' className={Style.searchBox}/>
                <img src={Search} alt="search" className={Style.search}/>
            </form>
        </div>
    )
}

export default SearchBar
