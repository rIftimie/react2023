import "./App.css";
import Cards from "./components/card/Cards";
import Container from "./components/todo/Container";

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
            <Container className="hola" />
        </div>
    );
}

export default App;
