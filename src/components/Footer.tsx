import { useCallback } from "react";
import useStore from "../hooks/useStore";
import ProfileCard from "./ProfileCard";
import { useNavigate } from "react-router-dom";

function Footer() {
    const { isLoggedIn, logout } = useStore();
    const navigate = useNavigate();
    const logoutRedirect = useCallback(() => {
        logout();
        navigate("/login");
     }, [navigate, logout]);
    return <div className="footer">
        <ProfileCard />
        {isLoggedIn && <div className="small btn btn-link" onClick={() => logoutRedirect()}>
            Déconnexion
        </div>}
    </div>
}

export default Footer;