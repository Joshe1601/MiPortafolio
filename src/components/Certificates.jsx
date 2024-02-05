import React from "react";
import {certificates} from "../data.jsx";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Certificates extends React.Component {
    render() {
        const settings = {
            dots: true,
            className: "center",
            centerMode: true,
            infinite: true,
            centerPadding: "160px",
            speed: 500,
/*            autoplay: true,
            autoplaySpeed: 4000,*/
            slidesToShow: 1,
            slidesToScroll: 2,
            cssEase: "linear",
            responsive: [
            ]
        };
        return (
            <Slider {...settings}>
                {certificates.map(({title, pdf}, index) => {
                    return (
                        <div key={index}>
                            <div className="certificate__box" >
                                <object data={pdf} width="100%" height="400px">
                                 <p>Archivo no disponible. <a href={pdf}>Click acá</a> para poder descargarlo.</p>
                                </object>
                                <div className="certificate__data">
                                    <p className="certificate__title">{title}</p>
                                </div>
                            </div>
                        </div>

                    );
                })}
            </Slider>
        );
    }
}

export default Certificates;