import './App.css';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="body">
        <Gallery />
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
}

export default App;
