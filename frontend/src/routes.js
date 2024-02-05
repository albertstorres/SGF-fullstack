import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Login from './pages/Login'

function MainRoutes() {
    return (
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/main' element={<Main />} />
        </Routes>
    );
}

export default MainRoutes;