import React, { createContext, useContext, useState, useEffect } from 'react';
import { AuthSenseiUser, AuthSenseiContextType, SignInOptions, SignUpOptions } from '../types';
import { signIn, signUp, signOut as authSignOut, getSession } from '../auth';

const AuthSenseiContext = createContext<AuthSenseiContextType | undefined>(undefined);

export const useAuthSensei = () => {
  const context = useContext(AuthSenseiContext);
  if (context === undefined) {
    throw new Error('useAuthSensei must be used within an AuthSenseiProvider');
  }
  return context;
};

export const AuthSenseiProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthSenseiUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadUser = async () => {
      const session = await getSession();
      setUser(session);
      setLoading(false);
    };
    loadUser();
  }, []);

  const signInHandler = async (options: SignInOptions) => {
    const user = await signIn(options);
    setUser(user);
    return user;
  };

  const signUpHandler = async (options: SignUpOptions) => {
    const user = await signUp(options);
    setUser(user);
    return user;
  };

  const signOutHandler = async () => {
    await authSignOut();
    setUser(null);
  };

  const value: AuthSenseiContextType = {
    user,
    signIn: signInHandler,
    signUp: signUpHandler,
    signOut: signOutHandler,
    loading,
  };

  return <AuthSenseiContext.Provider value={value}>{children}</AuthSenseiContext.Provider>;
};

export default AuthSenseiContext;