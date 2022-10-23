import './App.css';
import NavBar from './components/NavBar';
import StorePage from './pages/StorePage'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <nav>
          <NavBar />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<StorePage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
