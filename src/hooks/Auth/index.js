import { createContext, useContext, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        authenticaded: null,
        user: null,
        role: null,
    });

    const signIn = ({email, password}) => {
        setUser({ id: 1, name: "usuário 1", email });
    };

    const signOut = () => {
        setUser({});
    };

    return (
        <AuthContext.Provider value={{ user, signIn, signOut }}>
        {children}
        </AuthContext.Provider>
        
    );

}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
}
