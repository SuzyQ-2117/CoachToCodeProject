import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import About from './pages/About';
import ToDoPage from './pages/ToDoPage';

function App() {
  return (
    <div>
      <div className="white-container">
        <div className="flex">
          <BrowserRouter> 
            <Navbar />
            <div className="whole-box">
              <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about' element={<About />} />
                <Route path='/todo' element={<ToDoPage />} />
              </Routes>
            </div>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
