import './Friends.css';
import { useUserArray } from '../../context/UserContext';

export default function Friends() {
  const { userArray } = useUserArray();

  if (userArray)
    return (
      <div>
        <p> A reminder of who I need to write to:</p>
        {userArray.map((item) => {
          return (
            <div key={item.id}>
              <p>{item.name}</p>
            </div>
          );
        })}
      </div>
    );
}
