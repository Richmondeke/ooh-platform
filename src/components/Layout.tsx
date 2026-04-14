import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-surface selection:bg-primary/10 selection:text-primary">
            {/* TopNavBar */}
            <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/10 flex justify-between items-center h-16 px-8">
                <div className="flex items-center gap-8">
                    <span className="text-xl font-black text-primary font-headline tracking-tight">Horizon Analytics</span>
                    <nav className="hidden md:flex gap-6 items-center">
                        <a className="font-headline font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-all" href="#">Dashboard</a>
                        <a className="font-headline font-semibold tracking-tight text-primary border-b-2 border-primary pb-1" href="#">Campaigns</a>
                        <a className="font-headline font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-all" href="#">Inventory</a>
                        <a className="font-headline font-semibold tracking-tight text-on-surface-variant hover:text-primary transition-all" href="#">Reports</a>
                    </nav>
                </div>
                <div className="flex items-center gap-4">
                    <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-all">notifications</span>
                    <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-primary transition-all">settings</span>
                    <div className="w-8 h-8 rounded-full bg-surface-container overflow-hidden ring-2 ring-primary/10">
                        <img
                            alt="Profile"
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80"
                        />
                    </div>
                </div>
            </header>

            <div className="flex pt-16">
                {/* SideNavBar */}
                <aside className="w-64 fixed left-0 top-16 bottom-0 bg-surface border-r border-outline-variant/10 flex flex-col py-6 px-4 space-y-2">
                    <div className="px-4 mb-6">
                        <h2 className="text-lg font-bold text-primary font-headline">Navigation</h2>
                        <p className="text-xs text-on-surface-variant font-medium opacity-60 uppercase tracking-widest">Page Selection</p>
                    </div>
                    <nav className="flex-1 space-y-1">
                        <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${isActive ? 'bg-primary text-white shadow-premium' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                            <span className="material-symbols-outlined">dashboard</span>
                            <span>Deployment Status</span>
                        </NavLink>
                        <NavLink to="/builder" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${isActive ? 'bg-primary text-white shadow-premium' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                            <span className="material-symbols-outlined">ads_click</span>
                            <span>Campaign Builder</span>
                        </NavLink>
                        <NavLink to="/planner" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${isActive ? 'bg-primary text-white shadow-premium' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                            <span className="material-symbols-outlined">explore</span>
                            <span>Route Planner</span>
                        </NavLink>
                        <NavLink to="/inventory" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${isActive ? 'bg-primary text-white shadow-premium' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                            <span className="material-symbols-outlined">list_alt</span>
                            <span>Route Inventory</span>
                        </NavLink>
                        <NavLink to="/config" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${isActive ? 'bg-primary text-white shadow-premium' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                            <span className="material-symbols-outlined">settings_input_component</span>
                            <span>Asset Config</span>
                        </NavLink>
                        <NavLink to="/checkout" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${isActive ? 'bg-primary text-white shadow-premium' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                            <span className="material-symbols-outlined">shopping_cart</span>
                            <span>Checkout</span>
                        </NavLink>
                        <NavLink to="/approval" className={({ isActive }) => `flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium text-sm ${isActive ? 'bg-primary text-white shadow-premium' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                            <span className="material-symbols-outlined">fact_check</span>
                            <span>Campaign Approval</span>
                        </NavLink>
                    </nav>
                </aside>

                {/* Main Content Area */}
                <div className="ml-64 w-full min-h-[calc(100vh-64px)] overflow-x-hidden">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Layout;
