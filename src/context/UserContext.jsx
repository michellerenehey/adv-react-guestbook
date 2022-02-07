import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
  const [user, setUser] = useState('');

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>;
}

const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error('useUser is not defined, it must be defined within the UserProvider');
  }

  return context;
};

export { UserProvider, useUser };
