import React from 'react'
import { filterData } from '../data'
import './Filter.css'

function Filter(props) {

  return (
    <div className='filter' >
        {filterData.map((filter) => <div className='filter-contents' key={filter.id} onClick={() => props.handleFilters(filter)}>{filter.title}</div>)}
    </div>
  )
}

export default Filter