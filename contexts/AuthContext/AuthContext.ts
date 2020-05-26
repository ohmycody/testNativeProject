import React from 'react';

export interface IAuthContext {
  signIn: () => Promise<void>;
  signOut: () => void;
  accessToken: string | null | undefined;
}

const AuthContext = React.createContext<IAuthContext>({
  signIn: async () => {},
  signOut: () => {},
  accessToken: null,
});

export default AuthContext;
