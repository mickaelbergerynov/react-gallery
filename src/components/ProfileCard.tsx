import userIcon from '../resources/user_icon.jpg'
import refreshIcon from '../resources/refresh_icon.png'
import useStore from '../hooks/useStore';
function ProfileCard() {
    const { username, refreshUsername } = useStore();
    return <div className="profile-card">
        <img src={userIcon} className="user-logo" alt="logo" />
        <p>
            <code>{username}</code>
        </p>
        <img src={refreshIcon} className="user-refresh-icon" alt="refresh username" onClick={() => refreshUsername()} />
    </div>
}

export default ProfileCard;