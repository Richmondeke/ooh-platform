import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import DeploymentStatus from './pages/DeploymentStatus';
import CampaignBuilder from './pages/CampaignBuilder';
import AssetConfiguration from './pages/AssetConfiguration';
import CampaignApproval from './pages/CampaignApproval';
import RoutePlanner from './pages/RoutePlanner';
import RouteInventoryList from './pages/RouteInventoryList';
import RouteCheckout from './pages/RouteCheckout';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<DeploymentStatus />} />
                    <Route path="builder" element={<CampaignBuilder />} />
                    <Route path="planner" element={<RoutePlanner />} />
                    <Route path="inventory" element={<RouteInventoryList />} />
                    <Route path="config" element={<AssetConfiguration />} />
                    <Route path="checkout" element={<RouteCheckout />} />
                    <Route path="approval" element={<CampaignApproval />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
