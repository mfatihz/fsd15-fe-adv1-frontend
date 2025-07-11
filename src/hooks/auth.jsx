import { createContext, useContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router";

const fakeAuth = () =>
    new Promise((resolve) => {
        setTimeout(() => resolve("2342f2f1d131rf12"), 250);
    });

export const ProtectedRoute = ({ children }) => {
    const { token } = useAuth();
    const location = useLocation();

    if (!token) {
        return <Navigate to="/login" replace state={{ from: location }} />;
    }

    return children;
}

const AuthContext = createContext({
    token: "",
    onLogin: () => { },
    onLogout: () => { },
});

export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();

    const [token, setToken] = useState("");

    const handleLogin = async () => {
        const token = await fakeAuth();
        
        setToken(token);

        const origin = location.state?.from?.pathname || '/';
        
        navigate(origin);
    };

    const handleLogout = () => {
        setToken("");
    };

    const value = {
        token,
        onLogin: handleLogin,
        onLogout: handleLogout,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
