import { create } from "zustand";
import getRandomName from "../utils/getRandomName";

type Store = {
    username: string;
    refreshUsername: () => void;
}

const useStore = create<Store>()((set) => ({
    username: "John Doe", 
    refreshUsername: () => set(() => ({ username: getRandomName() }))
}))

export default useStore;