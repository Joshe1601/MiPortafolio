import React from "react";
import {portfolio} from "../../data.jsx";
import PortfolioItem from "../../components/PortfolioItem.jsx";
import "./portafolio.css";

const Portafolio = () => {
    return (
        <section className="portfolio section">
            <h2 className="section__title">Mis <span>Proyectos</span></h2>

            <div className="portfolio__container container grid">
                {portfolio.map((item) => {
                    return <PortfolioItem key={item.id} {...item} />
                })}
            </div>
        </section>
    );
}

export default Portafolio;