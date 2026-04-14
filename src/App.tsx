import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import CampaignBuilder from './pages/CampaignBuilder';
import RoutePlanner from './pages/RoutePlanner';
import RouteInventoryList from './pages/RouteInventoryList';
import Reports from './pages/Reports';
import Profile from './pages/Profile';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/inventory" replace />} />
                    <Route path="inventory" element={<RouteInventoryList />} />
                    <Route path="planner" element={<RoutePlanner />} />
                    <Route path="builder" element={<CampaignBuilder />} />
                    <Route path="reports" element={<Reports />} />
                    <Route path="profile" element={<Profile />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
