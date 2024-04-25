import { useCallback, useEffect, useState } from "react";
import useStore from "../hooks/useStore";
import { useNavigate } from "react-router-dom";

function Login() {
    const { login, isLoggedIn } = useStore();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(true);
    const [password, setPassword] = useState("");

    useEffect(() => {
        const loadingId = setTimeout(() => {
            setLoading(false);
        }, 1000)
        if (isLoggedIn) navigate("/");

        return () => clearTimeout(loadingId);
    }, [isLoggedIn, navigate]);

    const onLoginClick = useCallback(async () => {
        const logged = await login(email, password)
        if (logged) navigate("/")
    }, [email, password, login, navigate])

    return (loading
        ? <div className="login-loader">
            Chargement...
        </div>
        : <div className="login-page">
            <div className="title">Identification</div>
            <div className="login-container">
                <div className="input-container login-input-container">
                    <label htmlFor="login-input">Adresse e-mail</label>
                    <input id="login-input" type="text" className="login-input"
                        onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="input-container pswd-input-container">
                    <label htmlFor="password-input">Mot de passe</label>
                    <input id="password-input" type="password" className="pswd-input"
                        onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className="send-btns">
                    <div className="btn btn-send" onClick={() => onLoginClick()}>
                        Connexion
                    </div>
                    <div className="btn small btn-link sign-up-link">
                        S'inscrire
                    </div>
                </div>
            </div>
        </div>)
}

export default Login;