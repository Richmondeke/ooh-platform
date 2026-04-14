import React from 'react';
import {
    Explore,
    Map as MapIcon,
    Route as RouteIcon,
    AddLocationAlt,
    Save,
    Settings,
    ChevronRight,
    TrendingUp,
    Tune,
    Traffic,
    Timer
} from '@mui/icons-material';

const RoutePlanner: React.FC = () => {
    return (
        <div className="flex h-full bg-surface-container-low">
            {/* Left Planning Panel */}
            <aside className="w-96 h-full bg-white border-r border-outline-variant/10 flex flex-col shrink-0 shadow-premium">
                <div className="p-8 border-b border-outline-variant/5">
                    <nav className="flex items-center gap-2 text-[10px] text-on-surface-variant mb-2 uppercase font-black tracking-widest">
                        <span>Planner</span>
                        <ChevronRight className="!text-[10px]" />
                        <span className="text-primary">New Campaign Route</span>
                    </nav>
                    <h2 className="text-2xl font-black text-primary font-headline tracking-tighter">Strategic Routing</h2>
                    <p className="text-on-surface-variant text-xs mt-1">Optimize media delivery along prime commuter paths.</p>
                </div>

                <div className="flex-1 overflow-y-auto p-8 space-y-8 no-scrollbar">
                    {/* Navigation Mode */}
                    <section>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">Optimization Goal</label>
                        <div className="grid grid-cols-2 gap-2">
                            <button className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-primary bg-primary/5 text-primary">
                                <TrendingUp />
                                <span className="text-xs font-bold">Impressions</span>
                            </button>
                            <button className="flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-transparent bg-surface-container-low text-on-surface-variant hover:border-outline-variant/30 transition-all">
                                <Timer />
                                <span className="text-xs font-bold">Frequency</span>
                            </button>
                        </div>
                    </section>

                    {/* Route Nodes */}
                    <section>
                        <div className="flex justify-between items-center mb-4">
                            <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant block">Route Waypoints</label>
                            <button className="text-[10px] font-black text-secondary uppercase tracking-tighter flex items-center gap-1">
                                <AddLocationAlt className="!text-xs" /> Add Node
                            </button>
                        </div>
                        <div className="space-y-3 relative">
                            <div className="absolute left-[19px] top-6 bottom-6 w-0.5 bg-gradient-to-b from-primary via-primary/20 to-secondary border-l border-dashed border-primary/30"></div>
                            <RouteNode
                                label="Primary Market Origin"
                                address="Santa Monica Blvd & 4th St"
                                status="Active"
                                dotColor="bg-primary"
                            />
                            <RouteNode
                                label="Mid-Route Transit Hub"
                                address="Wilshire / Vermont Station"
                                status="Optimizing"
                                dotColor="bg-primary/50"
                            />
                            <RouteNode
                                label="Campaign Destination"
                                address="Grand Central Market, DTLA"
                                status="Target Meta"
                                dotColor="bg-secondary"
                            />
                        </div>
                    </section>

                    {/* Parameters */}
                    <section className="bg-surface-container-low/50 p-6 rounded-2xl border border-outline-variant/10">
                        <h3 className="text-sm font-bold text-on-surface mb-4 flex items-center gap-2">
                            <Tune className="!text-sm" /> Route Constraints
                        </h3>
                        <div className="space-y-4">
                            <div className="flex justify-between items-center">
                                <span className="text-xs text-on-surface-variant font-medium">Traffic Density Factor</span>
                                <span className="text-xs font-bold text-primary">High (0.85)</span>
                            </div>
                            <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                                <div className="h-full bg-primary w-[85%]"></div>
                            </div>
                            <div className="flex justify-between items-center pt-2">
                                <span className="text-xs text-on-surface-variant font-medium">Auto-Optimize Path</span>
                                <div className="w-10 h-5 bg-secondary rounded-full relative">
                                    <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                <div className="p-8 space-y-3">
                    <button className="w-full bg-primary text-white py-4 rounded-xl font-black text-sm shadow-xl flex items-center justify-center gap-2 hover:bg-primary-container transition-all">
                        <Explore /> Calculate Intelligence
                    </button>
                    <button className="w-full py-4 text-primary font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 hover:bg-primary/5 rounded-xl transition-all">
                        <Save className="!text-sm" /> Save Route Template
                    </button>
                </div>
            </aside>

            {/* Main Canvas Area */}
            <section className="flex-1 relative overflow-hidden bg-slate-900">
                {/* Placeholder for Interactive Map */}
                <div className="absolute inset-0 grayscale opacity-40 mix-blend-overlay">
                    <img
                        src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=2000"
                        alt="City Map Background"
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Map UI Overlays */}
                <div className="absolute top-8 left-8 flex gap-3">
                    <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-premium border border-white/40 flex items-center gap-4">
                        <div className="p-2 bg-primary/10 rounded-lg text-primary">
                            <Traffic />
                        </div>
                        <div>
                            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Real-time Load</p>
                            <p className="text-sm font-black text-on-surface">1.2M Vehicles/Day</p>
                        </div>
                    </div>
                    <div className="bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-premium border border-white/40 flex items-center gap-4">
                        <div className="p-2 bg-secondary/10 rounded-lg text-secondary">
                            <MapIcon />
                        </div>
                        <div>
                            <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-widest">Coverage Delta</p>
                            <p className="text-sm font-black text-on-surface">94.2% Accuracy</p>
                        </div>
                    </div>
                </div>

                {/* Map Toolbars */}
                <div className="absolute bottom-8 right-8 flex flex-col gap-3">
                    <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                        <AddLocationAlt />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                        <RouteIcon />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-on-surface-variant hover:text-primary transition-colors">
                        <Settings />
                    </button>
                </div>

                {/* Map Active Route Indication */}
                <svg className="absolute inset-0 pointer-events-none w-full h-full" viewBox="0 0 1000 800">
                    <path
                        d="M200,400 L400,300 L600,500 L800,200"
                        fill="none"
                        stroke="#003461"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray="1, 15"
                        className="animate-[dash_20s_linear_infinite]"
                    />
                    <circle cx="200" cy="400" r="12" fill="#003461" />
                    <circle cx="400" cy="300" r="12" fill="#003461" />
                    <circle cx="600" cy="500" r="12" fill="#003461" />
                    <circle cx="800" cy="200" r="12" fill="#006b5f" />
                </svg>

                {/* Floating Intelligence Card */}
                <div className="absolute bottom-12 left-12 w-80 bg-primary-container text-white p-6 rounded-3xl shadow-2xl border border-white/10 backdrop-blur-md">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-white/10 rounded-xl">
                            <Explore className="text-secondary-fixed" />
                        </div>
                        <h4 className="font-bold text-sm tracking-tight">Route Efficiency Score</h4>
                    </div>
                    <div className="text-4xl font-black mb-2 font-headline tracking-tighter">98.4<span className="text-lg font-normal opacity-60 ml-1">/100</span></div>
                    <p className="text-[10px] opacity-70 leading-relaxed">This route maximizes digital dwell time by 22% compared to standard commuter paths.</p>
                    <div className="mt-6 pt-6 border-t border-white/10 flex justify-between items-center text-[10px] font-black uppercase tracking-widest">
                        <span className="text-secondary-fixed">View Heatmap</span>
                        <ChevronRight className="!text-sm" />
                    </div>
                </div>
            </section>

            <style>{`
        @keyframes dash {
          to { stroke-dashoffset: -1000; }
        }
      `}</style>
        </div>
    );
};

const RouteNode: React.FC<{ label: string; address: string; status: string; dotColor: string }> = ({ label, address, status, dotColor }) => (
    <div className="flex items-start gap-4 p-4 rounded-2xl hover:bg-surface-container-low/50 transition-colors cursor-pointer group">
        <div className={`w-10 h-10 rounded-full ${dotColor} flex items-center justify-center shrink-0 z-10 border-4 border-white shadow-sm ring-1 ring-outline-variant/10 group-hover:scale-110 transition-transform`}>
            <div className="w-2 h-2 rounded-full bg-white animate-pulse"></div>
        </div>
        <div className="flex-1">
            <div className="flex justify-between items-start">
                <h4 className="text-xs font-black text-on-surface uppercase tracking-tighter">{label}</h4>
                <span className="text-[9px] font-bold text-on-surface-variant opacity-60 uppercase">{status}</span>
            </div>
            <p className="text-[11px] text-on-surface-variant mt-0.5 line-clamp-1">{address}</p>
        </div>
    </div>
);

export default RoutePlanner;
