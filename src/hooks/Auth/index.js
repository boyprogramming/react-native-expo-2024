import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const ROLE = {
    SUPER: "SUPER",
    ADM: "ADM",
    USER: "USER"
};


export function AuthProvider({ children }) {
    const [user, setUser] = useState({
        authenticated: null,
        user: null,
        role: null,
    });

    const signIn = async ({ email, password }) => {
        if (email === "super@email.com" && password === "Super123") {
            setUser({
                authenticated: true,
                user: { id: 1, name: "Super Usuário", email, role: "SUPER" },
                role: ROLE.SUPER
            });
        } else if (email === "adm@email.com" && password === "Adm123") {
            setUser({
                authenticated: true,
                user: { id: 2, name: "Administrador Usuário", email, role: "ADM" },
                role: ROLE.ADM
            });
        } else if (email === "user@email.com" && password === "User123") {
            setUser({
                authenticated: true,
                user: { id: 3, name: "Usuário", email, role: "USER" },
                role: ROLE.USER

            });
        } else {
            setUser({
                authenticated: false,
                user: null,
                role: null
            });
        }


    };

    const signOut = async () => {
        setUser({
            authenticated: false,
            user: null,
            role: null
        });
    };

    useEffect(() => {
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
