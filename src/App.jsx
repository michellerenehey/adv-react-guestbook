import './App.css';
import Home from './views/Home/Home';
import Header from './components/Header/Header';
import Guestbook from './components/Guestbook/Guestbook';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Guestbook />
    </div>
  );
}

export default App;
