import { createContext, useContext, useState, useEffect } from 'react';

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => {
    return localStorage.getItem('quiz_user_id') || '';
  });

  useEffect(() => {
    if (userId) {
      localStorage.setItem('quiz_user_id', userId);
    }
  }, [userId]);

  const clearUser = () => {
    localStorage.removeItem('quiz_user_id');
    setUserId('');
  };

  return (
    <UserContext.Provider value={{ userId, setUserId, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};

export default UserContext;
