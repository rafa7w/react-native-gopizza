import React, {
  createContext,
  useContext,
  ReactNode,
} from 'react';

type AuthContextData = {

}

type AuthProviderProps = {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData)

// importante envolver as interfaces que queremos compartilhar nosso contexto
function AuthProvider({children}: AuthProviderProps) {
  return (
    <AuthContext.Provider value={{}}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, useAuth }