import React from "react";
import {skills} from "../data.jsx";
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
    return (
        <>
            {skills.map(({icon, title, percentage}, index) => {
                return (
                    <div className="progress__box" key={index}>
                        <div className="progress__circle">
                            <CircularProgressbar
                                strokeWidth={7} value={parseInt(percentage)}
                                text={`${percentage}%`} />
                        </div>

                        <p className="skills__icon">{icon}</p>
                        <h3 className="skills__title">{title}</h3>
                    </div>
                )
            })}
        </>
    );
}

export default Skills;