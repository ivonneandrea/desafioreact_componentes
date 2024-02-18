import { useState } from "react";

import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alert";

const Registro = ({ createCuenta, emailAlternativo }) => {
    const [alert, setAlert] = useState({
        error: "",
        msg: "",
        color: "",
    });

    return (
        <>
            <h2>{createCuenta}</h2>
            <SocialButton
                fbIcon="fa-brands fa-facebook fa-2x"
                ghIcon="fa-brands fa-github fa-2x"
                liIcon="fa-brands fa-linkedin fa-2x"
            />
            <p>{emailAlternativo}</p>

            <Formulario setAlert={setAlert} />
            {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
        </>
    );
};

export default Registro;