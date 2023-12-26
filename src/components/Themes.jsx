import React, {useEffect, useState} from "react";
import {themes} from "../data.jsx";
import ThemeItem from "./ThemeItem.jsx";
import {FaCog} from "react-icons/fa";
import {BsSun, BsMoon} from "react-icons/bs";
import "./themes.css";

const getStorageColor = () => {
    let color = 'blue';
    if (localStorage.getItem('color')) {
        color = localStorage.getItem('color');
    }
    return color;
}

const getStorageTheme = () => {
    let theme = 'dark-theme';
    if (localStorage.getItem('theme')) {
        theme = localStorage.getItem('theme');
    }
    return theme;
}

const Themes = () => {
    const [showSwitch, setShowSwitch] = useState(false);
    const [color, setColor] = useState(getStorageColor());
    const [theme, setTheme] = useState(getStorageTheme());

    const changeColor = (color) => {
        setColor(color);
    };

    const toggleTheme = () => {
        if (theme === 'light-theme') {
            setTheme('dark-theme');
        } else {
            setTheme('light-theme');
        }
    }

    useEffect(() => {
        document.documentElement.style.setProperty('--first-color', color);
        localStorage.setItem('color', color);
    }, [color]);

    useEffect(() => {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
    }, [theme]);

    return <div className={`${showSwitch ? 'show-switcher' : ''} style__switcher`}>
        <div className="style__switcher-toggler" onClick={()=>
            setShowSwitch(!showSwitch)}>
            <FaCog/>
        </div>

        <div className="theme__toggler" onClick={toggleTheme}>
            {theme === 'light-theme' ? <BsMoon/> : <BsSun />}
        </div>

        <h2 className="style__switcher-title">Elige un <span>Tema</span></h2>
        <div className="style__switcher-items">
            {themes.map((theme, index) => {
                return (
                    <ThemeItem key={index} {...theme} changeColor={changeColor}/>
                )
            })}
        </div>

        <div className="style__switcher-close" onClick={()=>
            setShowSwitch(!showSwitch)}>&times;</div>
    </div>
}

export default Themes;