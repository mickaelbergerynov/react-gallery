import { create } from "zustand";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase.config";

type Store = {
    isLoggedIn: boolean;
    username: string;
    login: (email: string, password: string) => void;
    logout: () => void;
    setUsername: () => void;
}

const useStore = create<Store>()((set) => ({
    isLoggedIn: false,
    username: "Anonymous",
    login: (email: string, password: string) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                set({username: user.email ? user.email.split("@")[0] : "Anonymous[logged]", isLoggedIn: true})
            }).catch((error) => {
                console.error(error);
                alert(`Erreur à l'identification : ${error.code}::${error.message}`);
            })
    },
    logout: () => {
        set({username: "Anonymous", isLoggedIn: false})
    },
    setUsername: () => set((state) => ({ username: state.username }))
}))

export default useStore;