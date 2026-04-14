import React from 'react';

const AssetConfiguration: React.FC = () => {
    return (
        <div className="bg-surface font-body text-on-surface min-h-screen">
            <main className="max-w-[1440px] mx-auto p-8 grid grid-cols-12 gap-8">
                {/* Hero Section: Asset Visuals (Asymmetric Bento) */}
                <section className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                    <div className="flex flex-col gap-2">
                        <nav className="flex items-center gap-2 text-on-surface-variant text-xs font-medium uppercase tracking-wider mb-2">
                            <span>Inventory</span>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span>Digital Out-of-Home</span>
                            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
                            <span className="text-primary">Sunset Plaza Digital Mega</span>
                        </nav>
                        <h1 className="font-headline text-4xl font-extrabold text-primary tracking-tight">Sunset Plaza Digital Mega</h1>
                        <div className="flex items-center gap-4 text-on-surface-variant">
                            <div className="flex items-center gap-1">
                                <span className="material-symbols-outlined text-sm">location_on</span>
                                <span className="text-sm font-medium">West Hollywood, CA — Intersection of Sunset & La Cienega</span>
                            </div>
                            <div className="bg-secondary-container text-on-secondary-container px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">High Impact</div>
                        </div>
                    </div>
                    {/* Bento Grid Gallery */}
                    <div className="grid grid-cols-4 grid-rows-2 gap-4 h-[500px]">
                        <div className="col-span-3 row-span-2 rounded-xl overflow-hidden relative group">
                            <img
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt="Digital Billboard"
                                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            <div className="absolute bottom-6 left-6 flex gap-2">
                                <span className="glass-panel px-4 py-2 rounded-full text-xs font-bold text-primary flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    LIVE FEED
                                </span>
                            </div>
                        </div>
                        <div className="col-span-1 row-span-1 rounded-xl overflow-hidden">
                            <img
                                className="w-full h-full object-cover"
                                alt="Street View"
                                src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=400"
                            />
                        </div>
                        <div className="col-span-1 row-span-1 rounded-xl overflow-hidden relative bg-surface-container-low">
                            <img
                                className="w-full h-full object-cover opacity-80"
                                alt="Map View"
                                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=400"
                            />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button className="glass-panel w-12 h-12 rounded-full flex items-center justify-center text-primary shadow-lg">
                                    <span className="material-symbols-outlined">map</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Impressions & Analytics Cards */}
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bg-surface-container-lowest p-6 rounded-xl">
                            <span className="text-on-surface-variant text-xs font-medium uppercase tracking-wider mb-2 block">Weekly Impressions</span>
                            <div className="flex items-baseline gap-2">
                                <span className="font-headline text-3xl font-extrabold text-primary">1.2M</span>
                                <span className="text-secondary text-xs font-bold flex items-center tracking-tight">
                                    <span className="material-symbols-outlined text-xs">trending_up</span>
                                    +4.2%
                                </span>
                            </div>
                            <div className="mt-4 h-1.5 w-full bg-surface-container-high rounded-full overflow-hidden">
                                <div className="h-full bg-secondary w-3/4 rounded-full"></div>
                            </div>
                        </div>
                        {/* Additional cards here */}
                    </div>
                </section>
                {/* Configuration Sidebar */}
                <aside className="col-span-12 lg:col-span-4 flex flex-col gap-6">
                    <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm border border-outline-variant/10">
                        <h3 className="font-headline text-xl font-bold text-primary mb-6">Configure Campaign</h3>
                        <div className="space-y-6">
                            {/* Upload Section */}
                            <div className="space-y-3">
                                <label className="font-headline text-sm font-bold text-on-surface block">Upload Creative Content</label>
                                <div className="border-2 border-dashed border-outline-variant rounded-xl p-8 flex flex-col items-center justify-center gap-3 bg-surface-container-low/30 hover:bg-surface-container-low transition-colors cursor-pointer group">
                                    <div className="w-12 h-12 rounded-full bg-primary-fixed flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                        <span className="material-symbols-outlined">upload_file</span>
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-bold text-primary">Click to upload or drag & drop</p>
                                        <p className="text-[11px] text-on-surface-variant mt-1">MP4, MOV, or PNG (Max 50MB)</p>
                                    </div>
                                </div>
                            </div>
                            {/* CTA */}
                            <button className="w-full btn-gradient text-white font-headline font-bold py-4 rounded-xl shadow-lg hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                                Proceed to Checkout
                                <span className="material-symbols-outlined">arrow_forward</span>
                            </button>
                        </div>
                    </div>
                </aside>
            </main>
        </div>
    );
};

export default AssetConfiguration;
