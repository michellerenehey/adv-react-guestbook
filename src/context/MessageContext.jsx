import { createContext, useContext, useState } from 'react';

const MessageContext = createContext();

function MessageProvider({ children }) {
  const [messages, setMessages] = useState([]);

  return (
    <MessageContext.Provider value={{ messages, setMessages }}>{children}</MessageContext.Provider>
  );
}

function useMessages() {
  const context = useContext(MessageContext);
  if (context === undefined) {
    throw new Error('useMessages is not defined, it needs to be in a MessageProvider');
  }
  return context;
}

export { useMessages, MessageProvider };
