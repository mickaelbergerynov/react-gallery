import { create } from "zustand";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../config/firebase.config";

type Store = {
    username: string;
    idToken: string | null;
    isLoggedIn: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const auth = getAuth(app);

const getUsernameFromEmail = (email: string | null | undefined) => {
    return email ? email.split("@")[0]! : "anonymous";
}

const verifyToken = async (token: string) => {
    const response = await fetch("http://localhost:3333/verify", { 
        method: "POST", 
        body: JSON.stringify({ 'idToken': token }),
        headers: {
            "Content-Type": "application/json"
        }
    });
    return (await response.json()) as { uid: string, email: string};
}

const useStore = create<Store>()((set, get) => ({
    username: getUsernameFromEmail(auth.currentUser?.email),
    isLoggedIn: !!auth.currentUser,
    login: async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            if (!user) {
                set ({ username: "Anonymous", idToken: null, isLoggedIn: false });
                alert("No user given from firebase");
                return false;
            }
            const token = await user.getIdToken(true);
            const tokenVerified = await verifyToken(token);
            if (!tokenVerified || !tokenVerified.uid || !tokenVerified.email || tokenVerified.email != user.email) {
                set ({ username: "Anonymous", idToken: null, isLoggedIn: false });
                alert("Invalid token");
                return false;
            }
            set({ username: getUsernameFromEmail(user.email), idToken: token, isLoggedIn: !!auth.currentUser })
            return true;
        } catch (err: any) {
            alert(`Erreur à l'identification : ${err.code}::${err.message}`);
            return false;
        }
    },
    logout: () => {
        auth.signOut();
        set({ username: "Anonymous", idToken: null })
    },
    idToken: null
}));

auth.onAuthStateChanged(async (user) => { 
    let token: string | null | undefined = await user?.getIdToken();
    const tokenVerified = !token ? null : await verifyToken(token);
    if (!tokenVerified || !tokenVerified.uid || !tokenVerified.email || tokenVerified.email != user?.email) {
        token = null;
    }
    
    useStore.setState({
        isLoggedIn: !!user,
        username: getUsernameFromEmail(user?.email),
        idToken: token
    });
});

export default useStore;