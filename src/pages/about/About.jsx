import React from "react";
import Info from "../../components/Info";
import Stats from "../../components/Stats";
import Skills from "../../components/Skills";
import {FaDownload} from "react-icons/fa";
import CV from "../../assets/CV Jose Morillos.pdf";
import "./About.css";

const About = () => {
    return (
        <main className="section container">
            <section className="about">
                <h2 className="section__title">
                    Sobre <span>Mí</span>
                </h2>

                <div className="about__container grid">
                    <div className="about__info">
                        <h3 className="section__subtitle">
                            Información personal
                        </h3>

                        <ul className="info__list grid">
                            <Info />
                        </ul>

                        <a href={CV} download="" className="button">
                            Descargar CV
                            <span className="button__icon"> <FaDownload /></span>
                        </a>
                    </div>

                    <div className="stats grid">
                        <Stats />
                    </div>

                </div>
            </section>

            <div className="separator"></div>

            <section className="skills">
                <h3 className="section__subtitle subtitle__center">Mis habilidades</h3>

                <div className="skills__container grid">
                    <Skills />
                </div>
            </section>
        </main>
    );
}

export default About;