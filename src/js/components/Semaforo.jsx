import React from "react"
import { useState } from "react"

const Semaforo = () => {

    const [encendido, setEncendido] = useState("red")  
    
    const cambiarcolor = (color) => {
        setEncendido(color)

    }

    return (
        <main>
            <div className="sbox"></div>
            <div className="box">
                <div className={` red  ${encendido == "red" ? "luz" : ""}`} onClick={()=>cambiarcolor("red")}></div>
                <div className={` yellow  ${encendido == "yellow" ? "luz" : ""}`} onClick={()=>cambiarcolor("yellow")}></div>
                <div className={` green  ${encendido == "green" ? "luz" : ""}`} onClick={()=>cambiarcolor("green")}></div>
            </div>
        </main>
    )
}

export default Semaforo;