import React from 'react'
import Style from './search.module.css'
import Search from '../../components/base/search'
import ContactCard from '../../components/base/contactCard'
const SearchReceiver = () => {
    return (
        <div>
            <div className={Style.wrapper}>
                <p className="text-18 bold"> Search Receiver</p>
                <Search/>
                <ContactCard/>
            </div>
        </div>
    )
}

export default SearchReceiver
