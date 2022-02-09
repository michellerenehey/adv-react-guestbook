import './App.css';
import Home from './views/Home/Home';
// import Header from './components/Header/Header';
import Guestbook from './components/Guestbook/Guestbook';
import Friends from './components/Friends/Friends';
import Layout from './views/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Layout>
        <Home />
        <Guestbook />
        <Friends />
      </Layout>
    </div>
  );
}

export default App;
