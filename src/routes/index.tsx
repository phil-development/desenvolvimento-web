import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom';
import PrivateRoute from './PrivateRoute';


import Home from '../views/Home/Home';
import Dashboard from '../views/Dashboard/Dashboard';
import Settings from '../views/Settings/Settings';
import SignIn from '../views/SignIn/SignIn';
import SignUp from '../views/SignUp/SignUp';

const AppRoutes: React.FC = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/signIn" element={<SignIn />} />

                <Route path="/signUp" element={<SignUp />} />

                <Route path="/" element={<PrivateRoute />}>

                    <Route path="/" element={<Home />} />

                    <Route path="/dashboard"
                        element={<Dashboard />} />

                    <Route path="/settings"
                        element={<Settings />} />

                </Route>

            </Routes>

        </BrowserRouter>
    );
};

export default AppRoutes;