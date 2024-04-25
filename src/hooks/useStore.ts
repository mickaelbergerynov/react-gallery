import { create } from "zustand";
import { User, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../config/firebase.config";

type Store = {
    username: string;
    isLoggedIn: boolean;
    login: (email: string, password: string) => Promise<boolean>;
    logout: () => void;
    user: User | null;
}

const auth = getAuth(app);

const getUsernameFromEmail = (email: string | null | undefined) => {
    return email ? email.split("@")[0]! : "anonymous"; 
}

const useStore = create<Store>()((set, get) => ({
    username: getUsernameFromEmail(get()?.user?.email),
    isLoggedIn: !!get()?.user,
    login: async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;
            set({username: user.email ? user.email.split("@")[0] : "Anonymous[logged]"})
            return true;
        } catch (err: any) {
            alert(`Erreur à l'identification : ${err.code}::${err.message}`);
            return false;
        }
    },
    logout: () => {
        auth.signOut();
        set({username: "Anonymous"})
    }, 
    user: auth.currentUser
}));

auth.onAuthStateChanged(async (user) => {
    console.log(user);
    useStore.setState({user: user, isLoggedIn: !!user, username: getUsernameFromEmail(user?.email)})
});

export default useStore;