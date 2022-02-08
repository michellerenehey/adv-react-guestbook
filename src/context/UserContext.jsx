import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState('');
  const [userArray, setUserArray] = useState([]);

  return (
    <UserContext.Provider value={{ user, setUser, userArray, setUserArray }}>
      {children}
    </UserContext.Provider>
  );
}

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser is not defined, it must be defined within the UserProvider');
  }

  const { user, setUser } = context;
  return { user, setUser };
};

const useUserArray = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUserArray is not defined, it must be defined within the UserProvider');
  }

  const { userArray, setUserArray } = context;
  return { userArray, setUserArray };
};

export { UserProvider, useUser, useUserArray };
