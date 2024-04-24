import userIcon from '../resources/user_icon.jpg'
import refreshIcon from '../resources/refresh_icon.png'
function ProfileCard({ username, onRefreshClick }: {username: string, onRefreshClick: () => void }) {
    return <div className="profile-card">
        <img src={userIcon} className="user-logo" alt="logo" />
        <p>
            <code>{username}</code>
        </p>
        <img src={refreshIcon} className="user-refresh-icon" alt="refresh username" onClick={() => onRefreshClick()} />
    </div>
}

export default ProfileCard;