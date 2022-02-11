import './Header.css';
import { useUser } from '../../../context/UserContext';
import { Link } from 'react-router-dom';

export default function Header({ toggleTheme }) {
  const { user } = useUser();

  return (
    <div className="Header">
      <Link to="/" className="header-link">
        Home
      </Link>
      {user ? <p>last signed by {user}</p> : <p>~A vErY cOoL yEaRbOoK~</p>}
      <Link to="/friends" className="header-link">
        Friends
      </Link>
      <button className="theme-button" onClick={toggleTheme}>
        switch color theme
      </button>
    </div>
  );
}
