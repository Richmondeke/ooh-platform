import React from 'react';

const CampaignApproval: React.FC = () => {
    return (
        <div className="text-on-surface">
            <main className="p-8 min-h-screen bg-surface-container-low">
                {/* Header Section */}
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <h1 className="text-4xl font-extrabold text-on-surface font-headline tracking-tight mb-2">Campaign Approval</h1>
                        <p className="text-on-surface-variant font-medium">Reviewing: <span className="text-primary">Q4 Urban Expansion – Digital Out-of-Home</span></p>
                    </div>
                    <div className="flex gap-3">
                        <button className="px-6 py-2.5 rounded-xl text-error font-bold border-2 border-transparent hover:bg-error-container/20 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined">close</span>
                            Reject
                        </button>
                        <button className="px-8 py-2.5 rounded-xl bg-linear-to-br from-primary to-primary-container text-on-primary font-bold shadow-lg hover:shadow-primary/20 transition-all flex items-center gap-2">
                            <span className="material-symbols-outlined">check_circle</span>
                            Approve Campaign
                        </button>
                    </div>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-12 gap-6">
                    {/* Summary Stats Card */}
                    <div className="col-span-12 lg:col-span-8 grid grid-cols-3 gap-6">
                        <div className="bg-surface-container-lowest p-6 rounded-xl border-outline-variant/15 flex flex-col justify-between">
                            <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4">Total Billboards</span>
                            <div>
                                <span className="text-5xl font-extrabold text-primary font-headline">142</span>
                                <p className="text-secondary text-sm font-bold mt-2">+12 Prime Spots</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-xl border-outline-variant/15 flex flex-col justify-between">
                            <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4">Total Budget</span>
                            <div>
                                <span className="text-5xl font-extrabold text-primary font-headline">$84k</span>
                                <p className="text-on-surface-variant text-sm mt-2">USD / Total Term</p>
                            </div>
                        </div>
                        <div className="bg-surface-container-lowest p-6 rounded-xl border-outline-variant/15 flex flex-col justify-between">
                            <span className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-4">Duration</span>
                            <div>
                                <span className="text-5xl font-extrabold text-primary font-headline">45</span>
                                <p className="text-on-surface-variant text-sm mt-2">Days Active</p>
                            </div>
                        </div>
                    </div>

                    {/* Map Integration */}
                    <div className="col-span-12 lg:col-span-4 bg-surface-container-lowest rounded-xl overflow-hidden relative min-h-[300px]">
                        <img
                            alt="Map View"
                            className="w-full h-full object-cover grayscale opacity-80"
                            src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=600"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest/80 to-transparent"></div>
                        <div className="absolute bottom-4 left-4 right-4 glass-panel p-4 rounded-full flex justify-between items-center">
                            <div className="flex items-center gap-3">
                                <span className="material-symbols-outlined text-primary">map</span>
                                <span className="font-bold text-sm">New York City Cluster</span>
                            </div>
                            <span className="material-symbols-outlined text-on-surface-variant cursor-pointer">open_in_full</span>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default CampaignApproval;
