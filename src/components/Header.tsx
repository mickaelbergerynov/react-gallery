import logo from '../resources/logo.svg';
import ProfileCard from './ProfileCard';

function Header({ username, onRefreshClick }: {username: string, onRefreshClick: () => void }) {
    return <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <ProfileCard username={username} onRefreshClick={onRefreshClick} />
    </header>;
}

export default Header;