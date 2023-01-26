import { useState } from "react";
import User from "../User";

const usuariosIni = [
    {
        id: 1,
        nombre: "Carlos",
        edad: 23,
    },
    {
        id: 2,
        nombre: "Maria",
        edad: 50,
    },
    {
        id: 3,
        nombre: "Juan",
        edad: 43,
    },
    {
        id: 4,
        nombre: "Jose",
        edad: 19,
    },
    {
        id: 5,
        nombre: "Jesus",
        edad: 30,
    },
];

const Container = () => {
    const [user, setUser] = useState([...usuariosIni]);

    function handleSubmit() {
        setUser(
            user.concat({
                id: user.length + 1,
                nombre: "NUEVO",
                edad: 30,
            })
        );
        console.log(user);
    }
    return (
        <>
            <button onClick={() => handleSubmit()}>Añadir Usuario</button>
            <main>
                {user
                    .map((user) => <User data={user} key={user.id} />)
                    .reverse()}
            </main>
        </>
    );
};

export default Container;
