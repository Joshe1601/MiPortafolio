import React from "react";
import {
    FaEnvelopeOpen,
    FaPhoneSquareAlt,
    FaFacebookMessenger,
    FaWhatsapp,
} from "react-icons/fa";

import {FiSend} from "react-icons/fi";

import "./contact.css";
import Frameworks from "../../components/Frameworks.jsx";
import useForm from "../../hooks/useForm";

const Contact = () => {

    const initialData = {
        name: "",
        email: "",
        subject: "",
        message: "",
    }

    const onValidate = (form) => {
        let errors = {};

        if (!form.name.trim()) {
            errors.name = "El nombre es requerido";
        } else if (form.name.length < 3) {
            errors.name = "El nombre debe tener al menos 3 caracteres";
        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(form.name)) {
            errors.name = "El nombre solo puede contener letras y espacios";
        }

        if (!form.email.trim()) {
            errors.email = "El correo es requerido";
        } else if (!/\S+@\S+\.\S+/.test(form.email)) {
            errors.email = "El correo no es válido";
        } else if (form.email.length < 5) {
            errors.email = "El correo debe tener al menos 5 caracteres";
        }

        if (!form.subject.trim()) {
            errors.subject = "El asunto es requerido";
        } else if (form.subject.length < 3) {
            errors.subject = "El asunto debe tener al menos 3 caracteres";
        }

        if (!form.message.trim()) {
            errors.message = "El mensaje es requerido";
        } else if (form.message.length < 20) {
            errors.message = "El mensaje debe tener al menos 20 caracteres";
        }

        return errors;
    }

    const {form, errors, loading, handleChange, handleSubmit} = useForm(initialData, onValidate);

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
                        <a href="https://www.messenger.com/t/100001032341479/" className="contact__social-link">
                            <FaFacebookMessenger />
                        </a>
                        <a href="https://wa.me/51951805121" className="contact__social-link">
                            <FaWhatsapp />
                        </a>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="contact__form">

                    <div className="form__input-group">
                        <div className="form__input-div">
                            <input type="text" placeholder="Nombre" name="name" value={form.name} onChange={handleChange} className="form__control"/>
                            {errors.name && <div className="alert alert-danger" role="alert">
                                {errors.name}
                            </div>}
                        </div>
                        <div className="form__input-div">
                            <input type="email" placeholder="Correo" name="email" value={form.email} onChange={handleChange} className="form__control"/>
                            {errors.email && <div className="alert alert-danger" role="alert">
                                {errors.email}
                            </div>}
                        </div>
                        <div className="form__input-div">
                            <input type="text" placeholder="Asunto" name="subject" value={form.subject} onChange={handleChange} className="form__control"/>
                            {errors.subject && <div className="alert alert-danger" role="alert">
                                {errors.subject}
                            </div>}
                        </div>

                    </div>

                    <div className="form__input-div">
                        <textarea id="" placeholder="Mensaje" name="message" value={form.message} onChange={handleChange} className="form__control textarea"></textarea>
                        {errors.message && <div className="alert alert-danger" role="alert">
                            {errors.message}
                        </div>}
                    </div>

                    <button className="button" type="submit" disabled={loading}>
                        {loading ? "Enviando..." : "Enviar"}
                        <span className="button__icon contact__button-icon">
                            <FiSend />
                        </span>
                    </button>

                </form>
            </div>

            <div className="frameworks__container container grid">
                <Frameworks />
            </div>
        </section>
    );
}

export default Contact;