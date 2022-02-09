import './App.css';
import Home from './views/Home/Home';
// import Guestbook from './components/Guestbook/Guestbook';
import Friends from './components/Friends/Friends';
import Layout from './views/Layout/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exacpt path="/friends">
              <Friends />
            </Route>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
