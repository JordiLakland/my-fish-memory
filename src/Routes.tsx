import { Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/Home';
import ReactPage from './pages/React';
import ArraysPage from './pages/Arrays';

export default function AppRoutes(): JSX.Element {
    return (
        <Routes>
            <Route 
                path='/' 
                element={<HomePage />} 
            />
            <Route 
                path='react' 
                element={<ReactPage />} 
            />
            <Route 
                path='arrays' 
                element={<ArraysPage />} 
            />
            <Route
                path="*"
                element={<Navigate to="/" replace />}
            />
        </Routes>
    )
}