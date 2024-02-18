import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./assets/components/Registro";

function App() {
    return (
        <>
            <main>
                <section className="registrationContainer">
                    <Registro
                        createCuenta="Crea una cuenta"
                        emailAlternativo="O usa tu email para registrarte"
                    />
                </section>
            </main>
        </>
    );
}

export default App;