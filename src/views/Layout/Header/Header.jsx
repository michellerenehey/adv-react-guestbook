import './Header.css';
import { useUser } from '../../../context/UserContext';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../context/ThemeContext';

export default function Header() {
  const { user } = useUser();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`Header ${theme}`}>
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
