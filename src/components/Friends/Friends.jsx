import './Friends.css';
import { useUserArray } from '../../context/UserContext';

export default function Friends() {
  const { userArray } = useUserArray();

  if (userArray)
    return (
      <div>
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
