import React from 'react'
import "./Featured.scss";

function Featured() {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Encontre os servicos freelance perfeitos para seu negocio</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="" alt="" />
                        <input type="text" placeholder='Tente criar um aplicativo' />
                    </div>
                    <button>Pesquisar</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                </div>
            </div>
            <div className="right"></div>
        </div>
    </div>
  )
}

export default Featured