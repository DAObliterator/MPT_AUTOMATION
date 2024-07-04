import axios from "axios";
import React, { useState, useEffect, useContext, createContext } from "react";

export const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({children}) => {

    const [ isLoggedIn , setIsLoggedIn ] = useState(false);
    const [ userDetails, setUserDetails ] = useState("");
    const [isAdmin , setIsAdmin] = useState(false);


    useEffect(() => {

      //check  if logged in 
      axios.post(
        import.meta.env.VITE_ENV === "development"
          ? import.meta.env.VITE_API_DEV + "/loginStatus"
          : import.meta.env.VITE_API_PROD + "/loginStatus",
        { },
        { withCredentials: true }
      ).then((response) => {

        console.log(`${JSON.stringify(response.data)} --- inside AuthProvider`);

        setUserDetails(response.data.user);
        setIsLoggedIn(true);
        setIsAdmin(response.data.isAdmin);
        

      }).catch((error) => {

      });

    },[])

    return (
      <AuthContext.Provider
        value={{
          isLoggedIn,
          setIsLoggedIn,
          userDetails,
          setUserDetails,
          isAdmin,
          setIsAdmin,
        }}
      >
        {" "}
        {children}{" "}
      </AuthContext.Provider>
    ); 


}
