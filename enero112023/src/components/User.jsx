import React from "react";

const User = (props) => {
    const user = props.data;

    function handleDelete(e) {
        e.target.parentNode.remove();
        console.log("Usuario Borrado");
    }

    return (
        <section>
            <h2>{user.nombre}</h2>
            <p>Edad: {user.edad}</p>
            <button onClick={(e) => handleDelete(e)}>Eliminar</button>
        </section>
    );
};

export default User;
