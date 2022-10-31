import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import * as auth from '../services/auth';

// Isso vai ser usado quando tivermos uma API REST
// import api from '../services/api';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [token, setToken] = useState('');

  useEffect(() => {
    async function loadStoragedData() {
      const [storagedUser, storagedToken] = await AsyncStorage.multiGet([
        '@Cameloo:user',
        '@Cameloo:token',
      ]);

      if (storagedUser[1] && storagedToken[1]) {
        // Isso vai ser usado quando tivermos uma API REST
        // api.defaults.headers.Authorization = `Bearer ${storagedToken[1]}`;

        setUser(JSON.parse(storagedUser[1]));
      }
    }

    loadStoragedData();
  }, []);

  const signUp = useCallback(async (data) => {
    const response = await auth.signUp(data);

    // Isso vai ser usado quando tivermos uma API REST
    // api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    await AsyncStorage.multiSet([
      ['@Cameloo:token', response.data.token],
      ['@Cameloo:user', JSON.stringify(response.user)],
    ]);

    return response;
  }, []);

  const signIn = useCallback(async ({ email, password }) => {
    const response = await auth.signIn({ email, password });

    setUser(response.user);
    setToken(response.data.token);

    // Isso vai ser usado quando tivermos uma API REST
    // api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    await AsyncStorage.multiSet([
      ['@Cameloo:token', response.data.token],
      ['@Cameloo:user', JSON.stringify(response.user)],
    ]);
  }, []);

  const logout = useCallback(() => {
    AsyncStorage.clear().then(() => {
      setUser({});
      setToken('');
    });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        signIn,
        signUp,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
