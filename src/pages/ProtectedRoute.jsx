import { Navigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProtectedRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    console.log("token", token)

    if (!token || token == undefined) {
        return <Navigate to="/login" />;
    }

    try {
        const decoded = jwtDecode(token);
        const now = Date.now() / 1000;

        if (decoded.exp < now) {
            localStorage.removeItem("token");
            return <Navigate to="/login" />;
        }
    } catch (error) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default ProtectedRoute;