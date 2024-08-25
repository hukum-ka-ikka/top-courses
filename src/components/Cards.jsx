import React, { useEffect, useState } from 'react'
import { apiUrl } from '../data'
import Card from './Card';
import './Cards.css'

function Cards(props) {

    const [data, setData] = useState(null);
    const [displayData, setDisplayData] = useState(null);
    const [isDataAvailable, setIsDataAvailable] = useState(false);

    const fetchData = async () => {
        try {
            const response = await fetch(apiUrl);
            const apiData = await response.json();
            setData(apiData.data);
        }
        catch (error) {
            console.log(`Error occured: ${error}`)
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect( () => {
        if(data) {
            setIsDataAvailable(true);
            if(props.selectedFilter === 'All'){
                const temp_data = Object.values(data).flat(); 
                setDisplayData(temp_data);
            }
            else{
                setDisplayData(data[props.selectedFilter]);
            }
        }
    }, [props.selectedFilter, data]);


  return (
    <div className='Cards'>
        {isDataAvailable && displayData.map((course) => <Card key={course.id} cardData={course} handleToast={props.handleToast}/>)}
    </div>
  )
}

export default Cards