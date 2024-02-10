import { Navigate, Outlet, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login';
import useAuth from './hooks/useAuth';
import axios from 'axios';

type Props = {
    redirectTo: string;
}

function ProtectedRoutes({ redirectTo }: Props) {
    const { handleGetToken } = useAuth();

    return handleGetToken() ? <Outlet /> : <Navigate to={redirectTo} />;
}

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route element={<ProtectedRoutes redirectTo='/' />}>
                <Route path='/main?' element={<Main />} />
            </Route >
        </Routes>
    );
}

export default MainRoutes;