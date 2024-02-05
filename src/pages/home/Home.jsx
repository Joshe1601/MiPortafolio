import React from "react";
import {ReactTyped} from "react-typed";
import Profile from "../../assets/home2.jpeg";
import Icon from "../../assets/favicon.png"
import {Link} from "react-router-dom";
import {FaArrowRight} from "react-icons/fa";
import "./home.css";
const Home = () => {
    return (
        <section className="home section grid">
            <img src={Profile} alt="" className="home__img"/>
            <div className="home__content">
                <div className="home__icon">
                    <img src={Icon} alt=""/>
                </div>
                <div className="home__data">
                    <h1 className="home__title"><span>Hola, soy Jose Morillos. </span></h1>
                    <h2 className="home__subtitle">
                        <ReactTyped strings={[
                            "Telecom Engineer",
                            "Full Stack Developer",
                            "DevOps Engineer",
                            "Cloud Engineer",
                            "IoT Developer",
                        ]} typeSpeed={50} backSpeed={35} loop shuffle={false} startDelay={100} backDelay={1800}
                                    loopCount={0} showCursor={true} cursorChar={"|"}>
                        </ReactTyped>
                    </h2>
                    {/*<h2 className="home__subtitle">Full Stack Developer</h2>*/}
                    <p className="home__description">Soy un programador freelance apasionado por el desarrollo de aplicaciones web.
                        Actualmente estudio Ingeniería de las Telecomunicaciones en la Pontificia Universidad Católica del Perú y
                        busco aprender constantemente nuevas tecnologías.</p>
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