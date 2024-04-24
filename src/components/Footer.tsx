import useGetRandomName from "../hooks/useGetRandomName";
import ProfileCard from "./ProfileCard";

function Footer() {
    const randomName = useGetRandomName();
    return <div className="footer">
        <ProfileCard name={randomName} />
    </div>
}

export default Footer;