import React from 'react'
import "./Featured.scss";

function Featured() {
  return (
    <div className='featured'>
        <div className="container">
            <div className="left">
                <h1>Encontre os servicos <i>freelance</i> perfeitos para seu negocio</h1>
                <div className="search">
                    <div className="searchInput">
                        <img src="./img/search.png" alt="" />
                        <input type="text" placeholder='Tente criar um aplicativo' />
                    </div>
                    <button>Pesquisar</button>
                </div>
                <div className="popular">
                    <span>Popular:</span>
                    <button>Web Design</button>
                    <button>Worpress</button>
                    <button>Design de Logotipo</button>
                    <button>Serviços AI</button>
                </div>
            </div>
            <div className="right">
                <img src="./img/man.png" alt="" />
            </div>
        </div>
    </div>
  )
}

export default Featured