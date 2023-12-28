import React from "react";
import reactLogo from '/src/assets/react.svg'
import viteLogo from '/vite.svg'
import './frameworks.css'

const Frameworks = () => {
    return (
        <>
            <div>
                <div className="card">
                    <p>
                        Este portafolio fue hecho con:
                    </p>
                </div>
                <h1 className="frameworks__title">Vite + <span>React</span></h1>

                <a href="https://vitejs.dev">
                    <img src={viteLogo} className="logo" alt="Vite logo" />
                </a>
                <a href="https://react.dev">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
                <p className="read-the-docs">
                    Haz click en los logos para ver la documentación
                </p>
            </div>


        </>
    );
}

export default Frameworks;