import userIcon from '../resources/user_icon.jpg'
import refreshIcon from '../resources/refresh_icon.png'
import { useContext } from 'react';
import { IUserContext, UserContext } from '../App';
function ProfileCard() {
    const { username, onRefreshClick } = useContext<IUserContext>(UserContext);
    return <div className="profile-card">
        <img src={userIcon} className="user-logo" alt="logo" />
        <p>
            <code>{username}</code>
        </p>
        <img src={refreshIcon} className="user-refresh-icon" alt="refresh username" onClick={() => onRefreshClick()} />
    </div>
}

export default ProfileCard;