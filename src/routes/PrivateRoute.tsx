
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const PrivateRoute: React.FC = () => {
    const token = localStorage.getItem("token");
    const location = useLocation();

    return token ? (
        <Outlet />
    ) : (
        <Navigate to="/signIn" state={{ from: location }} replace />
    );
};

export default PrivateRoute;