import './Friends.css';
// import { useUser } from '../../context/UserContext';

export default function Friends({ userArray }) {
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
