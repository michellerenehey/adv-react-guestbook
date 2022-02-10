import { createContext, useContext, useState } from 'react';

const EntriesContext = createContext();

function EntriesProvider({ children }) {
  const [entries, setEntries] = useState([]);

  return (
    <EntriesContext.Provider value={{ entries, setEntries }}>{children}</EntriesContext.Provider>
  );
}

function useEntries() {
  const context = useContext(EntriesContext);
  if (context === undefined) {
    throw new Error('useEntries is not defined, it needs to be in an EntriesProvider');
  }
  return context;
}

export { useEntries, EntriesProvider };
