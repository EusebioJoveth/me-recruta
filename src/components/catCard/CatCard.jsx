import React from 'react'
import { Link } from "react-router-dom"
import "./CatCard.scss";

function CatCard({item}) {
  return (
  <Link to="/gigs?cat=design">
      <div className='catCard'>
        
            <img src={item.img} alt="" />
            <span>{item.desc}</span>
            <span>{item.title}</span>
       
    </div>
  </Link>
  )
}

export default CatCard