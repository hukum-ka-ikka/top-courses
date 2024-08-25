import React, { useState } from 'react'
import './Card.css'
import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc";

function Card({cardData, handleToast}) {

    const [like, setLike] = useState(false);

    const handleLikeClick = () => {
        setLike(!like);
        handleToast(like);
    }

  return (
    <div className='card'>
        <img className='image' src={cardData.image.url} alt={cardData.image.alt}/>
        <div className='circle'>
            {like ? <FcLike size="70%" onClick={handleLikeClick} /> : <FcLikePlaceholder size="70%" onClick={handleLikeClick} className='like'/>}
        </div>
        <div className='info'>
            <h4>{cardData.title}</h4>
            <p>{cardData.description.substring(0,100)}</p>
        </div>
    </div>
  )
}

export default Card