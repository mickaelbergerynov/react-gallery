import userIcon from '../user_icon.jpg'
function ProfileCard({ name } : { name: string }) {
    return <div className="profile-card">
        <img src={userIcon} className="App-logo" alt="logo" />
        <p>
            <code>{name}</code>
        </p>
    </div>
}

export default ProfileCard;