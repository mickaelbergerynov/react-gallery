import ProfileCard from "./ProfileCard";

function Footer({ username, onRefreshClick }: {username: string, onRefreshClick: () => void }) {
    return <div className="footer">
        <ProfileCard username={username} onRefreshClick={onRefreshClick} />
    </div>
}

export default Footer;