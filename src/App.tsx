import './App.css';
import NavBar from './components/NavBar';
import StorePage from './pages/StorePage'
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <div className="App">
        <nav>
          <NavBar />
        </nav>
        <main>
          <Routes>
            <Route path="/" element={<StorePage />} />
            <Route path="/cart" element={<CheckoutPage />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
    </div>
  );
}

export default App;
