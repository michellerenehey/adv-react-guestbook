import './App.css';
import Home from './views/Home/Home';
import Header from './components/Header/Header';
import Guestbook from './components/Guestbook/Guestbook';
import Friends from './components/Friends/Friends';

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <Guestbook />
      <Friends />
    </div>
  );
}

export default App;
