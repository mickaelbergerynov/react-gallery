import userIcon from '../resources/user_icon.jpg'
import refreshIcon from '../resources/refresh_icon.png'
import { useState } from 'react';
import getRandomName from '../utils/getRandomName';
function ProfileCard() {
    const [username, setUsername] = useState(getRandomName());
    return <div className="profile-card">
        <img src={userIcon} className="user-logo" alt="logo" />
        <p>
            <code>{username}</code>
        </p>
        <img src={refreshIcon} className="user-refresh-icon" alt="refresh username" 
            onClick={() => setUsername(getRandomName())} />
    </div>
}

export default ProfileCard;