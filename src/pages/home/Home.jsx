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
                    <h1 className="home__title"><span>Hola, soy Jose Morillos. </span>Desarrollador web jr.</h1>
                    {/*<h3 className="home__subtitle">Full Stack Developer</h3>*/}
                    <p className="home__description">I am a full stack developer with a passion for developing web applications.
                        I am currently working as a freelancer and looking for a full-time job.</p>
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