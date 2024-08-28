import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        authenticaded: null,
        user: null,
        role: null,
    });

    const signIn = async ({email, password}) => {
        if (email === "super@email.com" && password === "Super123") {
             setUser({ id: 1, name: "super", email, role: "SUPER" });
        }
    
        if (email === "adm@email.com" && password === "Super123") {
            setUser({ id: 1, name: "super", email, role: "SUPER" });
       }
   
    };

    const signOut = async () => {
        setUser({});
    };

    useEffect(()=>{
        console.log('AuthProvider', user);
    }, [user]);

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
