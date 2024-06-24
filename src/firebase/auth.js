
import {getAuth,signInWithEmailAndPassword} from 'firebase/auth'
import { app } from './firebase'
import {useContext,creatContext,useState} from 'react';

const auth = getAuth(app)

const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const logout = () => {
    setIsAuthenticated(false);
  };

  function login(){
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setIsAuthenticated(true)

    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage)
    });

}

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};



export const useAuth = () => {
    return useContext(AuthContext);
};
