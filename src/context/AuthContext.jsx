import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

function useAuth() {
  return useContext(AuthContext);
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const savedUser = localStorage.getItem('authUser');
      if (savedUser) {
        setUser(JSON.parse(savedUser));
      }
    } catch (error) {
      console.error('Failed to parse authUser from localStorage', error);
      localStorage.removeItem('authUser');
    }
  }, []);

  const login = (username, password) => {
    // Simulate login logic
    if (username === 'admin' && password === '123456') {
      //dapat dari dari database
      const user = {
        username: 'admin',
        role: 'administrator',
        name: 'John Doe',
      };
      setUser(user);
      localStorage.setItem('authUser', JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('authUser');
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export { AuthProvider, useAuth };
