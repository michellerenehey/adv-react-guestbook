import './App.css';
import Home from './views/Home/Home';
import Friends from './components/Friends/Friends';
import Layout from './views/Layout/Layout';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { useTheme } from './context/ThemeContext';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`App ${theme}`}>
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
