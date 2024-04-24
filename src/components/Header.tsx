import logo from '../resources/logo.svg';
import ProfileCard from './ProfileCard';

function Header() {
    return <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <ProfileCard />
    </header>;
}

export default Header;