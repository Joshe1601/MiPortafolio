import React from "react";
import Profile from "../../assets/home2.jpeg";
import {Link} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa";
import "./home.css";
const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img"/>
            <div className="home__content">
                <div className="home__data">
                    <h1 className="home__title"><span>Hola, soy Jose Morillos. </span></h1>
                    <h2 className="home__subtitle">Full Stack Developer</h2>
                    <p className="home__description">Soy un programador full stack apasionado por el desarrollo de aplicaciones web.
                        Actualmente estudio en la Pontificia Universidad Católica del Perú y
                        busco un trabajo de medio tiempo o tiempo completo.</p>
                    <Link to="/about" className="button">
                        Más sobre mí <span className="button__icon"><FaArrowRight/></span>
                    </Link>
                </div>
            </div>
            <div className="color__block">
            </div>
        </section>
    );
}

export default Home;