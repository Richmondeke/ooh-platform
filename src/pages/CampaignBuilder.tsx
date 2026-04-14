import React from 'react';

const CampaignBuilder: React.FC = () => {
    return (
        <div className="bg-surface text-on-surface">
            <main className="p-8 max-w-7xl mx-auto">
                {/* Breadcrumbs & Title */}
                <div className="mb-8">
                    <nav className="flex gap-2 text-xs font-bold text-on-surface-variant/60 uppercase tracking-widest mb-2">
                        <a className="hover:text-primary transition-colors" href="#">Campaigns</a>
                        <span>/</span>
                        <span className="text-primary">Review & Cart</span>
                    </nav>
                    <div className="flex justify-between items-end">
                        <div>
                            <h2 className="text-4xl font-extrabold text-primary tracking-tight mb-2">Campaign Review</h2>
                            <p className="text-on-surface-variant max-w-lg">Finalize your inventory selection. Review the projected impact and budget allocation before deploying the campaign.</p>
                        </div>
                        <div className="flex gap-3">
                            <button className="px-6 py-3 rounded-xl border border-outline-variant/30 text-primary font-bold text-sm hover:bg-surface-container-high transition-all">
                                Export PDF
                            </button>
                            <button className="px-8 py-3 rounded-xl btn-gradient text-white font-bold text-sm shadow-xl shadow-primary/20 active:scale-95 transition-all">
                                Finalize Campaign
                            </button>
                        </div>
                    </div>
                </div>

                {/* Summary Bento Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary">
                                <span className="material-symbols-outlined">shopping_cart</span>
                            </div>
                            <span className="text-xs font-bold text-secondary bg-secondary-container px-2 py-1 rounded-full">+2 Assets added</span>
                        </div>
                        <p className="text-on-surface-variant text-sm font-medium mb-1">Total Items</p>
                        <p className="text-3xl font-black text-primary tracking-tight">14 Units</p>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-full bg-secondary/5 flex items-center justify-center text-secondary">
                                <span className="material-symbols-outlined">account_balance_wallet</span>
                            </div>
                            <div className="w-24 h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div className="w-4/5 h-full bg-secondary"></div>
                            </div>
                        </div>
                        <p className="text-on-surface-variant text-sm font-medium mb-1">Budget Utilization</p>
                        <p className="text-3xl font-black text-primary tracking-tight">$124,500 <span className="text-sm font-normal text-on-surface-variant">/ $150k</span></p>
                    </div>
                    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/10">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-full bg-tertiary-fixed-dim/20 flex items-center justify-center text-tertiary">
                                <span className="material-symbols-outlined">visibility</span>
                            </div>
                            <span className="text-xs font-bold text-on-surface-variant">EST. REACH: 84%</span>
                        </div>
                        <p className="text-on-surface-variant text-sm font-medium mb-1">Total Impressions</p>
                        <p className="text-3xl font-black text-primary tracking-tight">2.8M <span className="text-sm font-normal text-secondary">+12.4%</span></p>
                    </div>
                </div>

                {/* Inventory List */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden">
                    <div className="px-8 py-6 flex justify-between items-center border-b border-surface-container-low">
                        <h3 className="text-lg font-bold text-primary">Selected Inventory</h3>
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-on-surface-variant flex items-center gap-1 cursor-pointer">
                                <span className="material-symbols-outlined text-lg">filter_list</span>
                                Filter
                            </span>
                            <span className="text-sm text-on-surface-variant flex items-center gap-1 cursor-pointer">
                                <span className="material-symbols-outlined text-lg">sort</span>
                                Sort
                            </span>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-surface-container-low/50">
                                    <th className="px-8 py-4 text-xs font-black text-primary/60 uppercase tracking-widest">Asset Name</th>
                                    <th className="px-6 py-4 text-xs font-black text-primary/60 uppercase tracking-widest">Type</th>
                                    <th className="px-6 py-4 text-xs font-black text-primary/60 uppercase tracking-widest">Location</th>
                                    <th className="px-6 py-4 text-xs font-black text-primary/60 uppercase tracking-widest">Impressions</th>
                                    <th className="px-6 py-4 text-xs font-black text-primary/60 uppercase tracking-widest text-right">Price</th>
                                    <th className="px-8 py-4"></th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface-container-low">
                                {/* Row 1 */}
                                <tr className="hover:bg-surface-container-low/30 transition-colors group cursor-pointer">
                                    <td className="px-8 py-5">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-slate-200 overflow-hidden">
                                                <img
                                                    alt="Billboard"
                                                    className="w-full h-full object-cover"
                                                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=200"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-bold text-primary">Times Square North</p>
                                                <p className="text-xs text-on-surface-variant">ID: #DX-90210</p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-5">
                                        <span className="px-2 py-1 bg-primary/5 text-primary text-[10px] font-bold rounded uppercase">Digital OOH</span>
                                    </td>
                                    <td className="px-6 py-5 text-sm text-on-surface-variant font-medium">47th & Broadway, NY</td>
                                    <td className="px-6 py-5 text-sm font-bold text-primary">850,000</td>
                                    <td className="px-6 py-5 text-sm font-black text-primary text-right">$42,000</td>
                                    <td className="px-8 py-5 text-right">
                                        <button className="text-on-surface-variant hover:text-error transition-colors">
                                            <span className="material-symbols-outlined text-xl">delete</span>
                                        </button>
                                    </td>
                                </tr>
                                {/* Add more rows as needed by copying the logic */}
                            </tbody>
                        </table>
                    </div>
                    <div className="px-8 py-6 bg-slate-50/50 flex items-center justify-between">
                        <button className="flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                            <span className="material-symbols-outlined text-lg">add_circle</span>
                            Browse More Assets
                        </button>
                        <div className="flex items-center gap-8">
                            <div className="text-right">
                                <p className="text-xs font-bold text-on-surface-variant/60 uppercase tracking-wider">Subtotal</p>
                                <p className="text-2xl font-black text-primary">$79,500</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Asymmetric Map & Analytics Preview */}
                <div className="mt-10 grid grid-cols-1 lg:grid-cols-5 gap-6">
                    {/* Map Preview Layer */}
                    <div className="lg:col-span-3 h-[400px] rounded-xl overflow-hidden relative group border border-outline-variant/10">
                        <img
                            alt="Map View"
                            className="w-full h-full object-cover"
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                        {/* Glass Controls */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                            <button className="w-10 h-10 glass-panel rounded-full flex items-center justify-center text-primary shadow-lg">
                                <span className="material-symbols-outlined">zoom_in</span>
                            </button>
                            <button className="w-10 h-10 glass-panel rounded-full flex items-center justify-center text-primary shadow-lg">
                                <span className="material-symbols-outlined">zoom_out</span>
                            </button>
                        </div>
                        <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                            <div className="glass-panel p-4 rounded-xl max-w-xs shadow-2xl">
                                <h4 className="text-primary font-bold text-sm mb-1">Geographical Density</h4>
                                <p className="text-xs text-on-surface-variant">Concentration focused in high-income urban corridors.</p>
                            </div>
                            <button className="px-4 py-2 glass-panel text-primary rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
                                <span className="material-symbols-outlined text-sm">fullscreen</span>
                                Expand Map
                            </button>
                        </div>
                    </div>
                    {/* Secondary Summary Card */}
                    <div className="lg:col-span-2 flex flex-col gap-6">
                        <div className="flex-1 bg-primary text-white p-8 rounded-xl relative overflow-hidden flex flex-col justify-between">
                            <div className="absolute -right-10 -top-10 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
                            <div>
                                <span className="px-3 py-1 bg-white/10 rounded-full text-[10px] font-bold tracking-widest uppercase mb-4 inline-block">Estimated ROI</span>
                                <h3 className="text-4xl font-extrabold tracking-tight mb-2">3.2x</h3>
                                <p className="text-white/70 text-sm">Projected return based on current market trends and inventory performance historicals.</p>
                            </div>
                            <div className="space-y-3">
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/60">Demographic Match</span>
                                    <span className="font-bold">92%</span>
                                </div>
                                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                                    <div className="w-[92%] h-full bg-secondary"></div>
                                </div>
                                <div className="flex justify-between text-sm">
                                    <span className="text-white/60">Inventory Quality</span>
                                    <span className="font-bold">A+</span>
                                </div>
                            </div>
                        </div>
                        <div className="bg-secondary-container p-6 rounded-xl flex items-center justify-between">
                            <div>
                                <p className="text-on-secondary-container font-bold text-lg leading-tight">Ready to launch?</p>
                                <p className="text-on-secondary-container/70 text-xs">Approval required from Finance Lead.</p>
                            </div>
                            <button className="bg-secondary text-white px-6 py-3 rounded-lg font-bold text-sm hover:bg-on-secondary-container transition-all">
                                Send for Approval
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CampaignBuilder;
