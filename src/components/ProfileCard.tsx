import userIcon from '../resources/user_icon.jpg'
import useStore from '../hooks/useStore';
import { useNavigate } from 'react-router-dom';
import { useCallback } from 'react';
function ProfileCard() {
    const { username, isLoggedIn } = useStore();
    const navigate = useNavigate();
    const redirectToLogin = useCallback(() => {
        if (!isLoggedIn) navigate("login");
    }, [isLoggedIn, navigate]);
    return <div className="profile-card">
        <img src={userIcon} className="user-logo" alt="logo" onClick={() => redirectToLogin() } />
        <p>
            <code>{username}</code>
        </p>
        {/* <img src={refreshIcon} className="user-refresh-icon" alt="refresh username" onClick={() => refreshUsername()} /> */}
    </div>
}

export default ProfileCard;