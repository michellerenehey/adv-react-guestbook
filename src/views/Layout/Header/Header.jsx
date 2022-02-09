import './Header.css';
import { useUser } from '../../../context/UserContext';

export default function Header() {
  const { user } = useUser();

  return (
    <div className="Header">
      {user ? <p>last signed by {user}</p> : <p>~A vErY cOoL yEaRbOoK~</p>}
    </div>
  );
}
