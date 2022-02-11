import './App.css';
import Home from './views/Home/Home';
// import Guestbook from './components/Guestbook/Guestbook';
import Friends from './components/Friends/Friends';
import Layout from './views/Layout/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';

function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`App ${theme}`}>
      <BrowserRouter>
        <Layout theme={theme} toggleTheme={toggleTheme}>
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
