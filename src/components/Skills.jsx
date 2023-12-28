import React from "react";
import {skills} from "../data.jsx";
import {CircularProgressbarWithChildren} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
    return (
        <>
            {skills.map(({icon, title, percentage}, index) => {
                return (
                    <div className="progress__box" key={index}>
                        <div className="progress__circle">
                            <CircularProgressbarWithChildren strokeWidth={7} value={100}>
                                <p className="skills__icon">{icon}</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <h3 className="skills__title">{title}</h3>
                    </div>
                )
            })}
        </>
    );
}

export default Skills;