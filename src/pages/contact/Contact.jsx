import React from "react";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookMessenger,
    FaWhatsapp,
} from "react-icons/fa";

import {FiSend} from "react-icons/fi";

import "./contact.css";

const Contact = () => {
    return (
        <section className="contact section">
            <h2 className="section__title">
                Ponte en <span>Contacto</span>
            </h2>

            <div className="contact__container container grid">
                <div className="contact__data">
                    <h3 className="contact__title">¡Adelante!</h3>

                    <p className="contact__description">
                        Siéntete libre de contactarme para cualquier consulta o colaboración. Estoy siempre dispuesto a
                        aprender en nuevos proyectos, innovar en ideas creativas y aportar conocimientos que puedan favorecer
                        y formar parte de tus visiones.
                    </p>

                    <div className="contact__info">
                        <div className="info__item">
                            <FaEnvelopeOpen className="info__icon"/>

                            <div>
                                <span className="info__title">Escríbeme</span>
                                <h4 className="info__desc">jmorillosp161@gmail.com</h4>
                            </div>

                        </div>
                        <div className="info__item">
                            <FaPhoneSquareAlt className="info__icon"/>

                            <div>
                                <span className="info__title">Llámame</span>
                                <h4 className="info__desc">+51 903065898</h4>
                            </div>

                        </div>
                    </div>

                    <div className="contact__socials">
                        <a href="https://www.facebook.com/jmorillospinedo/" className="contact__social-link">
                            <FaFacebookMessenger />
                        </a>
                        <a href="https://wa.me/51903065898" className="contact__social-link">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                <form action="" className="contact__form">

                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input type="text" placeholder="Nombre" className="form__control"/>
                        </div>
                        <div className="form__input-div">
                            <input type="email" placeholder="Correo" className="form__control"/>
                        </div>
                        <div className="form__input-div">
                            <input type="text" placeholder="Asunto" className="form__control"/>
                        </div>

                    </div>

                    <div className="form__input-div">
                        <textarea name="" id="" placeholder="Mensaje" className="form__control textarea"></textarea>
                    </div>

                    <button className="button">
                        Enviar
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </button>

                </form>
            </div>
        </section>
    );
}

export default Contact;