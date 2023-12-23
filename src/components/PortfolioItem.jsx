import React, {useState} from "react";
import Close from "../assets/close.svg";

const Portafolio = ({img, title, details}) => {
    const [modal, setModal] = useState(false);

    const toggleModal = () =>{
        setModal(!modal);
    };

    return(
        <div className="portfolio__item">
            <img src={img} alt={title} className="portfolio__img"/>

            <div className="portfolio__hover" onClick={toggleModal}>
                <h3 className="portfolio__title">{title}</h3>
            </div>

            {modal && (
                <div className="portfolio__modal">
                    <div className="portfolio__modal-content">
                        <img src={Close} alt="Close Image" className="modal__close" onClick={toggleModal}/>

                        <h3 className="modal__title">{title}</h3>

                        <ul className="modal__list grid">
                            {details.map(({icon, title, desc}, index) => {
                                return (
                                    <li key={index} className="modal__item">
                                        <span className="item__icon">{icon}</span>

                                        <div>
                                            <span className="item__title">{title}</span>
                                            <span className="item__details">{desc}</span>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                        <img src={img} alt={title} className="modal__img"/>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Portafolio;