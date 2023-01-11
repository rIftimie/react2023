import "./App.css";
import Cards from "./components/card/Cards";

function App() {
    function difuminarTodos() {
        document.querySelectorAll(".Card li img").forEach((card) => {
            card.classList.add("blurr");
        });
    }
    function mostrarTodos() {
        document.querySelectorAll(".Card li img").forEach((card) => {
            card.classList.remove("blurr");
        });
    }
    const personas = [
        {
            nombre: "Antonio",
            profesion: "desarrollador",
            genero: "masculino",
        },
        {
            nombre: "Maria",
            profesion: "arquitecta",
            genero: "femenino",
        },
        {
            nombre: "Dani",
            profesion: "futbolista",
            genero: "masculino",
        },
        {
            nombre: "Jose",
            profesion: "fontanero",
            genero: "masculino",
        },
        {
            nombre: "Angela",
            profesion: "peluquera",
            genero: "femenino",
        },
        {
            nombre: "Robert",
            profesion: "desarrollador",
            genero: "masculino",
        },
        {
            nombre: "Rocio",
            profesion: "desarrolladora",
            genero: "femenino",
        },
        {
            nombre: "Jesus",
            profesion: "ingeniero",
            genero: "masculino",
        },
    ];
    return (
        <div className="App">
            <h1>Personal</h1>
            <button onClick={difuminarTodos}>Difuminar Todos</button>
            <button onClick={mostrarTodos}>Mostrar Todos</button>
            <Cards items={personas} />
        </div>
    );
}

export default App;
