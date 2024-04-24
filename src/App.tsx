import './App.css';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Header from './components/Header';
import { createContext, useState } from 'react';
import getRandomName from './utils/getRandomName';

function App() {
  const [username, setUsername] = useState(getRandomName());

  return (
      <div className="App">
        <Header username={username} onRefreshClick={() => setUsername(getRandomName())}/>
        <div className="body">
          <Gallery />
        </div>
        <div className="footer">
          <Footer username={username} onRefreshClick={() => setUsername(getRandomName())}/>
        </div>
      </div>
  );
}

export default App;
