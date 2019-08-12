import React, {useState} from 'react';

export const AuthContext = React.createContext({
    isAuth: false,
    login: () => {
    }, //for better autocompletion
    logout: () => {
    }
});

const AuthContextProvider = props => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const loginHandle = () => {
        setIsAuthenticated(true);
    };
    const logoutHandle = () => {
        setIsAuthenticated(false);
    }
    return (
        <AuthContext.Provider
            value={{isAuth: isAuthenticated, login: loginHandle, logout: logoutHandle}}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export default AuthContextProvider;