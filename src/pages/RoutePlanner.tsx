import React from 'react';

const RoutePlanner: React.FC = () => {
    return (
        <div className="bg-surface text-on-surface min-h-screen font-body">
            <main className="p-8 max-w-[1600px] mx-auto">
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h1 className="text-4xl font-extrabold text-primary tracking-tight font-headline">Route-Based Planner</h1>
                        <p className="text-on-surface-variant mt-2 font-medium">Engineer high-impact OOH campaigns across transit corridors.</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-surface-container-lowest text-primary border border-outline-variant/30 rounded-2xl font-bold text-sm hover:bg-surface-container-low transition-colors shadow-sm flex items-center gap-3">
                            <span className="material-symbols-outlined text-xl">save</span>
                            Save Route
                        </button>
                        <button className="px-8 py-3 btn-gradient text-white rounded-2xl font-black text-sm shadow-xl shadow-primary/20 flex items-center gap-3 active:scale-95 transition-all">
                            <span className="material-symbols-outlined text-xl">rocket_launch</span>
                            Deploy Campaign
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-8 items-start">
                    {/* Left Panel: Input & Controls */}
                    <div className="col-span-12 lg:col-span-4 space-y-6">
                        <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-sm border border-outline-variant/10">
                            <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-8 flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary text-2xl">route</span>
                                Route Configuration
                            </h3>
                            <div className="space-y-6">
                                <div className="relative">
                                    <label className="text-[10px] font-black text-on-surface-variant uppercase absolute left-4 top-3 z-10 opacity-70">Origin</label>
                                    <div className="flex items-center pt-8 pb-3 px-4 bg-surface-container-low rounded-2xl group focus-within:ring-2 focus-within:ring-primary/10 transition-all border border-transparent focus-within:border-primary/20">
                                        <span className="material-symbols-outlined text-primary mr-3" style={{ fontVariationSettings: "'FILL' 1" }}>my_location</span>
                                        <input className="bg-transparent border-none p-0 text-sm font-bold w-full focus:ring-0 text-on-surface" type="text" defaultValue="Silicon Valley, San Jose, CA" />
                                    </div>
                                    <div className="h-6 w-[2px] bg-primary/20 ml-8 my-1"></div>
                                    <label className="text-[10px] font-black text-on-surface-variant uppercase absolute left-4 top-24 z-10 opacity-70">Destination</label>
                                    <div className="flex items-center pt-8 pb-3 px-4 bg-surface-container-low rounded-2xl group focus-within:ring-2 focus-within:ring-primary/10 transition-all border border-transparent focus-within:border-primary/20">
                                        <span className="material-symbols-outlined text-error mr-3" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                                        <input className="bg-transparent border-none p-0 text-sm font-bold w-full focus:ring-0 text-on-surface" type="text" defaultValue="San Francisco Downtown, CA" />
                                    </div>
                                </div>

                                <div className="pt-4 space-y-6">
                                    <div>
                                        <label className="text-[11px] font-black text-on-surface-variant uppercase mb-3 block opacity-70 tracking-widest">Asset Portfolio</label>
                                        <div className="grid grid-cols-2 gap-3">
                                            <button className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-primary bg-primary/5 text-primary font-bold text-xs transition-all shadow-sm">
                                                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                                Digital
                                            </button>
                                            <button className="flex items-center justify-center gap-3 p-4 rounded-xl border-2 border-outline-variant/30 text-on-surface-variant font-bold text-xs hover:border-primary/50 transition-all">
                                                <span className="material-symbols-outlined text-lg">radio_button_unchecked</span>
                                                Static
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-[11px] font-black text-on-surface-variant uppercase mb-3 block opacity-70 tracking-widest">Budget Tier</label>
                                        <div className="relative">
                                            <span className="absolute left-5 top-1/2 -translate-y-1/2 font-black text-on-surface-variant/40 text-lg">$</span>
                                            <input className="w-full pl-10 pr-4 py-4 bg-surface-container-low border-none rounded-2xl text-xl font-black text-primary focus:ring-2 focus:ring-primary/10 tracking-tight" type="number" defaultValue="125000" />
                                        </div>
                                    </div>
                                </div>

                                <button className="w-full py-5 bg-primary text-white rounded-2xl font-black text-sm tracking-widest shadow-2xl shadow-primary/20 hover:brightness-110 active:scale-[0.98] transition-all flex items-center justify-center gap-4">
                                    <span className="material-symbols-outlined">analytics</span>
                                    CALCULATE ROUTE IMPACT
                                </button>
                            </div>
                        </div>

                        {/* AI Insights Card */}
                        <div className="bg-primary/5 p-8 rounded-2xl border border-primary/10 flex flex-col gap-4">
                            <div className="flex items-center justify-between">
                                <h4 className="text-sm font-black text-primary flex items-center gap-3 tracking-widest uppercase">
                                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
                                    AI Strategic Insight
                                </h4>
                            </div>
                            <p className="text-xs text-on-surface-variant leading-relaxed font-semibold">
                                Expanding your search radius by <span className="text-primary font-black underline decoration-primary/30">1.2 miles</span> on HWY-101 could unlock <span className="text-secondary font-black">14% higher reach</span> with only an <span className="text-primary font-black">8% budget expansion</span> level.
                            </p>
                        </div>
                    </div>

                    {/* Center: Map Canvas */}
                    <div className="col-span-12 lg:col-span-5 h-[800px] relative rounded-[2rem] overflow-hidden shadow-2xl shadow-on-surface/5 border border-outline-variant/10">
                        <div className="absolute inset-0 bg-slate-900 overflow-hidden">
                            <img className="w-full h-full object-cover grayscale brightness-50 opacity-60 scale-110" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" alt="Map View" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                            {/* UI Elements for Map */}
                            <div className="absolute top-8 left-8 flex flex-col gap-4">
                                <div className="glass-panel p-2 rounded-2xl shadow-2xl border border-white/20 flex flex-col gap-1">
                                    <button className="w-12 h-12 rounded-xl flex items-center justify-center text-primary bg-white/40 hover:bg-white transition-all">
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                    <button className="w-12 h-12 rounded-xl flex items-center justify-center text-primary bg-white/40 hover:bg-white transition-all">
                                        <span className="material-symbols-outlined">remove</span>
                                    </button>
                                </div>
                            </div>

                            <div className="absolute bottom-10 left-10 right-10">
                                <div className="glass-panel px-8 py-6 rounded-[2rem] shadow-2xl border border-white/40 flex items-center justify-between">
                                    <div className="flex items-center gap-6">
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase font-black tracking-widest text-on-surface-variant opacity-60">Avg. Velocity</span>
                                            <span className="text-xl font-black text-primary">54 MPH</span>
                                        </div>
                                        <div className="h-8 w-px bg-outline-variant/20"></div>
                                        <div className="flex flex-col">
                                            <span className="text-[10px] uppercase font-black tracking-widest text-on-surface-variant opacity-60">Est. Reach</span>
                                            <span className="text-xl font-black text-primary">2.4M / WK</span>
                                        </div>
                                    </div>
                                    <button className="px-6 py-3 bg-primary text-white font-bold rounded-xl shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-3">
                                        View Points
                                        <span className="material-symbols-outlined text-sm">open_in_new</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Asset Inventory Preview */}
                    <div className="col-span-12 lg:col-span-3 space-y-6">
                        <div className="flex items-center justify-between px-2">
                            <h3 className="text-sm font-black text-primary tracking-widest uppercase">Inventory Previews</h3>
                            <button className="text-[10px] font-black text-secondary flex items-center gap-1 hover:underline uppercase tracking-tighter">
                                Select Route Bundle
                            </button>
                        </div>
                        <div className="space-y-4 max-h-[720px] overflow-y-auto pr-2 custom-scrollbar no-scrollbar">
                            {[1, 2, 3].map((item) => (
                                <div key={item} className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant/10 group cursor-pointer hover:border-primary/30 transition-all hover:shadow-md">
                                    <div className="relative h-32 rounded-xl overflow-hidden mb-4">
                                        <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src={`https://images.unsplash.com/photo-1542${744 + item}173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400`} alt="Billboard" />
                                        <div className="absolute top-3 left-3 bg-secondary text-white text-[9px] font-black px-3 py-1 rounded-full uppercase tracking-widest whitespace-nowrap">Digital OOH</div>
                                        <button className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-primary shadow-lg scale-0 group-hover:scale-100 transition-transform">
                                            <span className="material-symbols-outlined text-sm">favorite</span>
                                        </button>
                                    </div>
                                    <div className="flex justify-between items-start mb-3">
                                        <div>
                                            <h4 className="text-xs font-black text-on-surface group-hover:text-primary transition-colors">SF-101 Transit Hub</h4>
                                            <p className="text-[10px] text-on-surface-variant font-medium">Mission District Corridor</p>
                                        </div>
                                        <span className="text-xs font-black text-secondary">$1,200</span>
                                    </div>
                                    <div className="flex gap-2 border-t border-outline-variant/10 pt-3">
                                        <span className="px-2 py-1 bg-surface-container text-[8px] font-black rounded uppercase text-on-surface-variant">32k IMP</span>
                                        <span className="px-2 py-1 bg-surface-container text-[8px] font-black rounded uppercase text-on-surface-variant">H-TRAFFIC</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default RoutePlanner;
