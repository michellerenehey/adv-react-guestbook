import './Home.css';
import { useUser } from '../../context/UserContext';

export default function Home() {
  const { user, setUser } = useUser();

  return (
    <div>
      <label>Name</label>
      <input value={user} onChange={(e) => setUser(e.target.value)} />
    </div>
  );
}
