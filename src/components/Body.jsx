import React, { useState } from 'react'
import './Body.css'
import Filter from './Filter';
import Cards from './Cards';
import { toast } from 'react-toastify';

function Body() {

    const [selectedFilter, setSelectedFilter] = useState('All');

    const handleFilters = (filter) => {
        setSelectedFilter(filter.title);
    }

    const handleToast = (like) => {
        if(!like) {
            toast.success('Item Liked');
        }
        else{
            toast.warning('Item Disliked')
        }
    } 

  return (
    <div className='container'>
        <Filter handleFilters={handleFilters} />
        <Cards selectedFilter={selectedFilter} handleToast={handleToast}/>
    </div>
  )
}

export default Body;