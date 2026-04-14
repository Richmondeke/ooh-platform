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
                        <section className="mb-4">
                            <p className="px-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 opacity-50">Planning & Deployment</p>
                            <NavLink to="/" className={({ isActive }) => `flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium text-xs ${isActive ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                                <span className="material-symbols-outlined text-sm">dashboard</span>
                                <span>Status</span>
                            </NavLink>
                            <NavLink to="/planner" className={({ isActive }) => `flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium text-xs ${isActive ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                                <span className="material-symbols-outlined text-sm">explore</span>
                                <span>Route Planner</span>
                            </NavLink>
                            <NavLink to="/checkout" className={({ isActive }) => `flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium text-xs ${isActive ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                                <span className="material-symbols-outlined text-sm">shopping_cart</span>
                                <span>Checkout</span>
                            </NavLink>
                        </section>

                        <section className="mb-4 pt-2 border-t border-outline-variant/10">
                            <p className="px-4 text-[10px] font-bold text-on-surface-variant uppercase tracking-widest mb-2 opacity-50">Reports Engine</p>
                            <NavLink to="/reports" className={({ isActive }) => `flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium text-xs ${isActive ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                                <span className="material-symbols-outlined text-sm">bar_chart</span>
                                <span>Intelligence</span>
                            </NavLink>
                            <NavLink to="/scheduled-reports" className={({ isActive }) => `flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium text-xs ${isActive ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                                <span className="material-symbols-outlined text-sm">schedule_send</span>
                                <span>Scheduled</span>
                            </NavLink>
                            <NavLink to="/export-config" className={({ isActive }) => `flex items-center gap-3 px-4 py-2 rounded-lg transition-all font-medium text-xs ${isActive ? 'bg-primary text-white shadow-md' : 'text-on-surface-variant hover:bg-surface-container-low'}`}>
                                <span className="material-symbols-outlined text-sm">ios_share</span>
                                <span>Export Hub</span>
                            </NavLink>
                        </section>
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
