import React, { useEffect, useState } from 'react'
import "./NavBar.scss"
import {Link, useLocation} from "react-router-dom"

function NavBar() {

    const [active, setActive] = useState(false);
    const [open, setOpen] = useState(false);

    const {pathname} = useLocation()

    const isActive = () =>{
        window.scrollY > 0 ? setActive(true) : setActive(false);
    }
    
    useEffect(()=>{
        window.addEventListener("scroll", isActive)

        return ()=>{
            window.removeEventListener("scroll", isActive)
        }
    }, []);

    const currentUser ={
        id: 1,
        username: "Adriela Joveth",
        isSeller: true
    }
  return (
    <div className={active || pathname !== "/" ? "navbar active" : "navbar"}>
      <div className="container">
        <div className="logo">
          <Link to="/" className="link">
            <span className="text">MeRecruta</span>
          </Link>

          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>MeRecruta Negócios</span>
          <span>Explorar</span>
          <span>English</span>
          <span>Entrar</span>
          {!currentUser?.isSeller && <span>Torne-se Um Vendedor</span>}
          {currentUser && (
            <div className="user" onClick={() => setOpen(!open)}>
              <img
                src="https://images.pexels.com/photos/1115697/pexels-photo-1115697.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <span>{currentUser?.username}</span>
              {open && (
                <div className="options">
                  {currentUser?.isSeller && (
                    <>
                      <Link className="link" to="/mygigs">
                        Shows
                      </Link>
                      <Link className="link" to="add">
                        adicionar novos shows
                      </Link>
                    </>
                  )}
                  <Link className="link" to="/orders">
                    Pedidos
                  </Link>
                  <Link className="link" to="/messages">
                    Mensagens
                  </Link>
                  <Link className="link" to="/">
                    Sair
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {(active || pathname !== "/") && (
        <>
          <hr />
          <div className="menu">
            <Link className="link menuLink" to="/">
              Gráficos & Design
            </Link>
            <Link className="link menuLink" to="/">
              Vídeo & Animação
            </Link>
            <Link className="link menuLink" to="/">
              Redação & Trandução
            </Link>
            <Link className="link menuLink" to="/">
              Serviços de IA
            </Link>
            <Link className="link menuLink" to="/">
              Marketing digital
            </Link>
            <Link className="link menuLink" to="/">
              Música & Audio
            </Link>
            <Link className="link menuLink" to="/">
              Programação e Tecnologia
            </Link>
            <Link className="link menuLink" to="/">
              Negócios
            </Link>
            <Link className="link menuLink" to="/">
              Estilo de vida
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default NavBar