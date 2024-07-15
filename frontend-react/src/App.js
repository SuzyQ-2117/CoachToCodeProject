import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <body>
        <p>Body</p>
      </body>
      <footer>
        <p>This is a footer</p>
      </footer>
    </div>
  );
}

export default App;
