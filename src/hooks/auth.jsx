import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services';

import { toast } from 'react-toastify';

const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password });
      const { user, token } = response.data;

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));
      localStorage.setItem("@rocketmovies:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({ user, token });
    } catch (error) {
      if(error.response){
        toast.error(error.response.data.message);
      } else {
        toast.error('Não foi possível entrar');
      }
    }
  }

  async function updateProfile({ user }) {
    try {
      await api.put("/users", user);

      localStorage.setItem("@rocketmovies:user", JSON.stringify(user));

      setData({
        user,
        token: data.token
      });

      toast.success("Usuário atualizado com sucesso!");
    } catch (error) {
      if(error.response) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Não foi possível atualizar o perfil.");
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketmovies:user");
    localStorage.removeItem("@rocketmovies:token");

    setData({});
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketmovies:token");
    const user =localStorage.getItem("@rocketmovies:user");

    if(token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;

      setData({
        token,
        user: JSON.parse(user)
      })
    }
  }, []);

  return(
    <AuthContext.Provider value={
      {
        signIn,
        signOut,
        user: data.user,
        updateProfile
      }
    }>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };