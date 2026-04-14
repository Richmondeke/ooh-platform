import React from 'react';

const RouteInventoryList: React.FC = () => {
    return (
        <div className="bg-surface text-on-surface min-h-screen font-body flex flex-col overflow-hidden">
            <main className="flex-1 flex flex-col relative bg-surface overflow-hidden">
                {/* Context Header */}
                <div className="px-10 pt-10 pb-8 bg-surface-bright flex justify-between items-end border-b border-outline-variant/10">
                    <div>
                        <nav className="flex items-center gap-2 text-on-surface-variant text-xs font-bold mb-3 uppercase tracking-widest opacity-60">
                            <span className="hover:text-primary transition-colors cursor-pointer">Inventory</span>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span className="text-primary font-black">Route: Pacific Highway Corridor</span>
                        </nav>
                        <h1 className="text-5xl font-black font-headline tracking-tighter text-primary">Route Inventory Detail</h1>
                        <p className="text-on-surface-variant font-medium mt-2">24 potential high-impact assets along this 12-mile stretch</p>
                    </div>
                    <div className="flex gap-4">
                        <div className="flex items-center gap-3 px-6 py-3 rounded-full glass-panel border border-outline-variant/30 text-sm font-black text-primary shadow-sm hover:bg-white transition-all cursor-pointer">
                            <span className="material-symbols-outlined text-secondary">tune</span>
                            Filter Type
                        </div>
                    </div>
                </div>

                {/* Bento Content Layout */}
                <div className="flex-1 overflow-y-auto px-10 py-10 pb-40 space-y-12">
                    {/* Map Overview (Asymmetric Hero) */}
                    <div className="grid grid-cols-12 gap-8 h-96">
                        <div className="col-span-12 lg:col-span-8 rounded-3xl overflow-hidden relative shadow-2xl border border-outline-variant/10 bg-slate-100 h-full">
                            <img className="w-full h-full object-cover grayscale brightness-75 scale-105" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Route Map" />
                            <div className="absolute top-6 left-6 shadow-2xl glass-panel p-4 rounded-2xl flex items-center gap-3 border border-white/20">
                                <div className="w-4 h-4 rounded-full bg-secondary animate-pulse shadow-secondary/50"></div>
                                <span className="text-xs font-black uppercase tracking-widest text-primary">Live Tracking Selection</span>
                            </div>
                        </div>
                        <div className="col-span-12 lg:col-span-4 flex flex-col gap-6 h-full">
                            <div className="flex-1 p-8 rounded-3xl bg-surface-container-low flex flex-col justify-center shadow-sm border border-outline-variant/10 overflow-hidden relative">
                                <span className="text-on-surface-variant font-black text-xs uppercase tracking-[0.2em] mb-2 opacity-60">Total Route Reach</span>
                                <div className="text-6xl font-black font-headline text-primary tracking-tighter">2.4M</div>
                                <span className="text-secondary font-black text-sm mt-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">trending_up</span>
                                    +14.2% Growth
                                </span>
                                {/* Decorative background element */}
                                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
                            </div>
                            <div className="flex-1 p-8 rounded-3xl bg-primary text-white flex flex-col justify-center shadow-2xl shadow-primary/20 relative overflow-hidden">
                                <span className="text-primary-fixed-dim font-black text-xs uppercase tracking-[0.2em] mb-2 opacity-60">Route Efficiency</span>
                                <div className="text-6xl font-black font-headline tracking-tighter">94<span className="text-2xl opacity-40">/100</span></div>
                                <p className="text-on-primary-container text-xs mt-3 font-bold opacity-80 decoration-white/20">Optimal frequency match</p>
                                {/* Decorative background element */}
                                <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            </div>
                        </div>
                    </div>

                    {/* Inventory List */}
                    <div className="space-y-6">
                        <h2 className="text-2xl font-black font-headline text-on-surface flex items-center gap-4 mb-4">
                            <span className="material-symbols-outlined text-primary text-3xl">list_alt</span>
                            Available Billboards
                        </h2>

                        {[1, 2, 3].map((item) => (
                            <div key={item} className="group flex flex-col md:flex-row items-center gap-8 p-6 bg-surface-container-lowest rounded-3xl hover:bg-surface-bright transition-all border border-transparent hover:border-outline-variant/30 hover:shadow-xl hover:-translate-y-1 duration-500">
                                <div className="w-full md:w-64 h-44 rounded-2xl overflow-hidden shrink-0 shadow-lg group-hover:shadow-2xl transition-all">
                                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1500ms]" src={`https://images.unsplash.com/photo-1542${744 + item}173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400`} alt="Billboard" />
                                </div>
                                <div className="flex-1 min-w-0 flex flex-col h-full justify-between">
                                    <div>
                                        <div className="flex items-center gap-3 mb-3">
                                            <span className="px-3 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed text-[10px] font-black uppercase tracking-widest">Digital Hub</span>
                                            <span className="text-on-surface-variant text-[10px] font-black uppercase tracking-widest opacity-40">ID: PB-992{item}</span>
                                        </div>
                                        <h3 className="text-2xl font-black text-primary truncate tracking-tight group-hover:text-primary-container transition-colors">Pacific Highway Crossway</h3>
                                        <p className="text-sm text-on-surface-variant flex items-center gap-2 mt-1 font-semibold">
                                            <span className="material-symbols-outlined text-sm font-normal">location_on</span>
                                            Los Angeles, CA Corridor
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-12 mt-8">
                                        <div>
                                            <span className="block text-[10px] uppercase font-black text-outline tracking-widest opacity-60 mb-1">Weekly Reach</span>
                                            <span className="text-xl font-black text-primary tracking-tight">840.2k</span>
                                        </div>
                                        <div>
                                            <span className="block text-[10px] uppercase font-black text-outline tracking-widest opacity-60 mb-1">CPM Target</span>
                                            <span className="text-xl font-black text-secondary tracking-tight">$4.12</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center justify-center p-8 border-l border-outline-variant/10 md:w-64">
                                    <div className="flex items-center gap-4">
                                        <span className="text-xs font-black text-primary uppercase tracking-widest">Campaign Ready</span>
                                        <div className="w-12 h-6 bg-secondary rounded-full relative p-1 cursor-pointer shadow-lg shadow-secondary/20">
                                            <div className="w-4 h-4 bg-white rounded-full translate-x-6 transition-transform"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Global Summary Bar */}
                <div className="fixed bottom-10 left-10 right-10 glass-panel border border-white/40 px-10 py-6 rounded-[2.5rem] shadow-2xl flex items-center justify-between z-50 animate-in fade-in slide-in-from-bottom-5 duration-700">
                    <div className="flex items-center gap-16">
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-black text-on-surface-variant tracking-[0.2em] mb-1 opacity-60">Selection</span>
                            <span className="text-3xl font-black font-headline text-primary">12 <span className="text-sm opacity-40">Assets</span></span>
                        </div>
                        <div className="h-10 w-px bg-outline-variant/20"></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] uppercase font-black text-on-surface-variant tracking-[0.2em] mb-1 opacity-60">Campaign Reach</span>
                            <span className="text-3xl font-black font-headline text-secondary">4.2M <span className="text-xs opacity-60">IMP</span></span>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-10 py-4 btn-gradient text-white rounded-2xl font-black text-lg shadow-2xl shadow-primary/30 flex items-center gap-4 hover:brightness-110 active:scale-95 transition-all">
                            Initialize Campaign
                            <span className="material-symbols-outlined font-normal">arrow_forward</span>
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RouteInventoryList;
