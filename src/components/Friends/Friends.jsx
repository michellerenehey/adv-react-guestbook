import { useUserArray } from '../../context/UserContext';

export default function Friends() {
  const { userArray } = useUserArray();

  return (
    <div className="Friends">
      {userArray.length > 0 && (
        <div>
          <h3> Who signed my yearbook:</h3>
          {userArray.map((item) => {
            return (
              <div key={item.id}>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
