import useGetRandomName from '../hooks/useGetRandomName';
import logo from '../logo.svg';
import ProfileCard from './ProfileCard';

function Header() {
    const randomName = useGetRandomName();
    return <header className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <ProfileCard name={randomName} />
    </header>;
}

export default Header;