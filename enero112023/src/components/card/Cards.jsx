import React from "react";
import { v4 as uuidv4 } from "uuid";

function Cards(props) {
    function handleClick(e) {
        if (e.target.previousSibling.classList.contains("blurr")) {
            e.target.previousSibling.classList.remove("blurr");
        } else {
            e.target.previousSibling.classList.add("blurr");
        }
    }
    const url = "https://randomuser.me/api/portraits/";
    const tarjetas = props.items.map((persona) => (
        <li key={uuidv4()}>
            <h2>{persona.nombre}</h2>
            <h3>{persona.profesion}</h3>
            <img
                src={
                    persona.genero === "masculino"
                        ? url +
                          "men/" +
                          Math.ceil(Math.random(0.99) * 100) +
                          ".jpg"
                        : url +
                          "women/" +
                          Math.ceil(Math.random(0.99) * 100) +
                          ".jpg"
                }
            />
            <button onClick={(e) => handleClick(e)}>Difuminar</button>
        </li>
    ));

    return (
        <>
            <ul className="Card">{tarjetas}</ul>
        </>
    );
}

export default Cards;
