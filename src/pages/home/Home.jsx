import React from 'react'
import Featured from '../../components/featured/Featured';
import TrustedBy from '../../components/trustedBy/TrustedBy';
import Slide from '../../components/slide/Slide';
import './Home.scss'
import {cards, projects} from "../../data";
import CatCard from '../../components/catCard/CatCard';
import ProjectCard from '../../components/projectCard/ProjectCard';

const Home = () => {
  return (
    <div className='home'>
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map(card=>(
          <CatCard key={card.id} item={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>Um mundo de Talentos freelance ao seu Alcance</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              O melhor para cada orçamento
            </div>
            <p>
            Encontre serviços de alta qualidade em todos os níveis de preço. Sem taxas por hora, 
            apenas preços baseados em projetos
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              O melhor para cada orçamento
            </div>
            <p>
            Encontre serviços de alta qualidade em todos os níveis de preço. Sem taxas por hora, 
            apenas preços baseados em projetos
            </p>

            <div className="title">
              <img src="./img/check.png" alt="" />
              O melhor para cada orçamento
            </div>
            <p>
            Encontre serviços de alta qualidade em todos os níveis de preço. Sem taxas por hora, 
            apenas preços baseados em projetos
            </p>
          </div>
         
          <div className="item">
            <video src="./img/video.mp4"></video>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>MeRecruta business</h1>
            <h1>Uma solução de negócios projetada para equipes</h1>
            <p>Atualize para uma experiência selecionada repleta de ferramentas 
              e benefícios, dedicada às empresas
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Conecte-se a freelancers com experiência comercial comprovada
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Encontre o talento perfeito de um gerente de sucesso do cliente
            </div>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Gerencie o trabalho em equipe e aumente a produtividade com um poderoso espaço de trabalho
            </div>
            <button>Explora MeRecruta business</button>
          </div>
          <div className="item">
            <img   src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png" alt="" />
          </div>
        </div>
      </div>

      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map(card=>(
          <ProjectCard key={card.id} item={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home