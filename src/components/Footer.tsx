import { useCallback } from "react";
import useStore from "../hooks/useStore";
import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";
import httpService from "../services/httpService";

function Footer() {
    const { isLoggedIn, logout } = useStore();
    const navigate = useNavigate();
    const logoutRedirect = useCallback(() => {
        logout();
        navigate("/login");
     }, [navigate, logout]);

     const ping = useCallback(async () => {
        const { ping } = (await httpService('/ping')).data as { ping: string};
        console.log(ping);
        alert(ping);
     }, [])

    return <div className="footer">
        <ProfileCard />
        <div className="small btn btn-link" onClick={() => ping()}>
            Ping
        </div>
        {isLoggedIn && <div className="small btn btn-link" onClick={() => logoutRedirect()}>
            Déconnexion
        </div>}
    </div>
}

export default Footer;