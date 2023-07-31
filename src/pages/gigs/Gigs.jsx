import React, { useState } from 'react'
import './Gig.scss'
import { gigs } from "../../data"
import GigCard from './../../components/gigCard/GigCard'

const Gigs = () => {

  const [ sort, setSort ] = useState("sales");
  const [ open, setOpen ] = useState(false);

  const reSort = (type) => {
    setSort(type)
    setOpen(false)
  }
  return (
    <div className='gigs'>
      <div className="container">
        <span className='breadcrumbs'>MeRecruta &#62; GRÁFICOS & DESIGN &#62;</span>
        <h1>Artistas de IA</h1>
        <p>
        Explore os limites da arte e da tecnologia com os artistas de IA do MeRecruta
        </p>

        <div className="menu">
          <div className="left">
            <span>Orçamento</span>
            <input type="text" name="" id="min" placeholder='Min'/>
            <input type="text" name="" id="max" placeholder='Max'/>
            <button type="button">Aplicar</button>
          </div>
          <div className="right">
            <div className="sortBy">Ordenar Por</div>
            <div className="sortType">{sort === "sales" ? "Mais Vendido" : "Mais Novo"}</div>
            <img src="./img/down.png" alt="" onClick={()=>setOpen(!open)} />
            {open && (
              <div className="rightMenu">
              {sort === "sales" ? (
                <span onClick={()=>reSort("createdAt")}>Mais Novo</span>
                
              ): (
                <span onClick={()=>reSort("sales")}>Mais Vendido</span>
              )}
             </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map(gig =>(
            <GigCard key={gig.id} item={gig} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gigs