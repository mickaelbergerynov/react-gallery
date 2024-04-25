import { Navigate } from "react-router-dom";
import Gallery from "../components/Gallery";
import useStore from "../hooks/useStore";

function Home() {
    const { isLoggedIn } = useStore();
    return isLoggedIn ? <Gallery /> : <Navigate replace to="/login" />
}

export default Home;