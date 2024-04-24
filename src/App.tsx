import './App.css';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Header from './components/Header';
import { createContext, useState } from 'react';
import getRandomName from './utils/getRandomName';

export interface IUserContext {
  username: string;
  onRefreshClick: () => void;
}

export const UserContext = createContext<IUserContext>({ username: "John Doe", onRefreshClick: () => {}});

function App() {
  const [randUsername, setRandUsername] = useState(getRandomName());

  return (
    <UserContext.Provider value={{ username: randUsername, onRefreshClick: () => setRandUsername(getRandomName()) }}>
      <div className="App">
        <Header />
        <div className="body">
          <Gallery />
        </div>
        <div className="footer">
          <Footer />
        </div>
      </div>
    </UserContext.Provider>
  );
}

export default App;
