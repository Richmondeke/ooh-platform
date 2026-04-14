import React from 'react';

const DeploymentStatus: React.FC = () => {
    return (
        <div className="bg-surface font-body text-on-surface">
            {/* SideNavBar is handled globally in App.tsx or a Layout component */}
            <main className="p-10 min-h-screen bg-surface-container-low">
                <div className="max-w-6xl mx-auto">
                    {/* Header Section */}
                    <div className="mb-10">
                        <h1 className="text-4xl font-extrabold font-headline text-primary tracking-tight mb-2">Deployment Status</h1>
                        <p className="text-on-surface-variant font-body">
                            Campaign ID: <span className="font-bold text-on-surface">HZ-2024-ALPHA-98</span> • Monitoring real-time activation across nodes.
                        </p>
                    </div>

                    {/* Bento Grid Layout */}
                    <div className="grid grid-cols-12 gap-6">
                        {/* Progress Tracker (Main Bento) */}
                        <div className="col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl p-8">
                            <h3 className="text-xl font-bold font-headline mb-8 flex items-center gap-2">
                                <span className="material-symbols-outlined text-primary">published_with_changes</span>
                                Deployment Timeline
                            </h3>

                            {/* Vertical Timeline */}
                            <div className="relative space-y-12">
                                {/* Connecting Line */}
                                <div className="absolute left-[19px] top-4 bottom-4 w-1 bg-outline-variant opacity-20"></div>
                                <div className="absolute left-[19px] top-4 h-[50%] w-1 bg-secondary"></div>

                                {/* Step 1: Success */}
                                <div className="relative flex gap-6 items-start group">
                                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white">
                                        <span className="material-symbols-outlined text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="text-lg font-bold font-headline">Asset Verification</h4>
                                            <span className="px-3 py-1 bg-secondary-container text-on-secondary-container rounded-full text-xs font-bold uppercase tracking-wider">Completed</span>
                                        </div>
                                        <p className="text-on-surface-variant text-sm mb-3">All creative files (mp4, jpg) have been scanned for compliance and resolution standards.</p>
                                        <div className="flex gap-2">
                                            <div className="bg-surface-container-low px-3 py-1 rounded text-[10px] font-bold text-primary border border-outline-variant/10">34/34 APPROVED</div>
                                            <div className="bg-surface-container-low px-3 py-1 rounded text-[10px] font-bold text-primary border border-outline-variant/10">FORMATS: 4K UHD</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 2: In Progress */}
                                <div className="relative flex gap-6 items-start">
                                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white">
                                        <span className="material-symbols-outlined text-xl animate-spin" style={{ animationDuration: '3s' }}>sync</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="text-lg font-bold font-headline">Contract Signing</h4>
                                            <span className="px-3 py-1 bg-primary-fixed text-on-primary-fixed-variant rounded-full text-xs font-bold uppercase tracking-wider">In Progress</span>
                                        </div>
                                        <p className="text-on-surface-variant text-sm mb-4">Finalizing digital signatures with primary network providers and local vendors.</p>
                                        <div className="w-full h-2 bg-surface-container-low rounded-full overflow-hidden mb-2">
                                            <div className="h-full bg-primary rounded-full" style={{ width: '65%' }}></div>
                                        </div>
                                        <div className="flex justify-between text-[10px] font-bold text-on-surface-variant">
                                            <span>PROVIDER APPROVALS</span>
                                            <span>65% COMPLETE</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Step 3: Pending */}
                                <div className="relative flex gap-6 items-start opacity-60">
                                    <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full bg-surface-variant text-on-surface-variant">
                                        <span className="material-symbols-outlined text-xl">pending</span>
                                    </div>
                                    <div className="flex-1">
                                        <div className="flex justify-between items-start mb-1">
                                            <h4 className="text-lg font-bold font-headline">Billboard Activation</h4>
                                            <span className="px-3 py-1 bg-surface-container-high text-on-surface-variant rounded-full text-xs font-bold uppercase tracking-wider">Pending</span>
                                        </div>
                                        <p className="text-on-surface-variant text-sm">Scheduled transmission to 452 digital OOH nodes across the metropolitan area.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Live Map Preview (Side Bento) */}
                        <div className="col-span-12 lg:col-span-4 space-y-6">
                            <div className="bg-surface-container-lowest rounded-xl overflow-hidden relative h-[320px]">
                                <img
                                    className="w-full h-full object-cover grayscale opacity-40"
                                    alt="City Map"
                                    src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=800"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                                {/* Floating Glass Controls */}
                                <div className="absolute top-4 right-4 flex flex-col gap-2">
                                    <div className="w-10 h-10 glass-panel rounded-full flex items-center justify-center text-primary shadow-lg cursor-pointer">
                                        <span className="material-symbols-outlined">zoom_in</span>
                                    </div>
                                    <div className="w-10 h-10 glass-panel rounded-full flex items-center justify-center text-primary shadow-lg cursor-pointer">
                                        <span className="material-symbols-outlined">layers</span>
                                    </div>
                                </div>
                                {/* Info Overlay */}
                                <div className="absolute bottom-4 left-4 right-4 glass-panel rounded-xl p-4 shadow-xl">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold font-headline uppercase text-on-surface-variant">Network Coverage</span>
                                        <span className="flex items-center gap-1 text-secondary text-xs font-bold">
                                            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span> LIVE
                                        </span>
                                    </div>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-2xl font-black font-headline text-primary">452</span>
                                        <span className="text-xs text-on-surface-variant font-medium">Nodes Ready</span>
                                    </div>
                                </div>
                            </div>

                            {/* Side Stats Card */}
                            <div className="bg-surface-container-lowest rounded-xl p-6">
                                <h4 className="font-bold font-headline mb-4 text-sm uppercase tracking-widest text-on-surface-variant">Deployment Metadata</h4>
                                <div className="space-y-4">
                                    <div className="flex justify-between py-2">
                                        <span className="text-sm font-medium text-on-surface-variant">Expected Launch</span>
                                        <span className="text-sm font-bold text-on-surface">Dec 12, 14:00 EST</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-t border-surface-variant/20">
                                        <span className="text-sm font-medium text-on-surface-variant">Campaign Manager</span>
                                        <span className="text-sm font-bold text-on-surface">Alex Rivera</span>
                                    </div>
                                    <div className="flex justify-between py-2 border-t border-surface-variant/20">
                                        <span className="text-sm font-medium text-on-surface-variant">Redundancy</span>
                                        <span className="text-sm font-bold text-secondary">Quad-Layered</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Activity Log (Wide Bento) */}
                        <div className="col-span-12 bg-surface-container-lowest rounded-xl p-8">
                            <div className="flex justify-between items-center mb-6">
                                <h3 className="text-xl font-bold font-headline">Recent System Logs</h3>
                                <button className="text-primary font-bold text-sm hover:underline">View All Protocols</button>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                                {/* Log Item 1 */}
                                <div className="flex items-center gap-4 py-3 border-b border-surface-variant/20">
                                    <div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center">
                                        <span className="material-symbols-outlined text-secondary">security</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Encryption Protocol Verified</p>
                                        <p className="text-[11px] text-on-surface-variant uppercase font-medium">10:45 AM • SECURE CHANNEL A-12</p>
                                    </div>
                                </div>
                                {/* Log Item 2 */}
                                <div className="flex items-center gap-4 py-3 border-b border-surface-variant/20">
                                    <div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center">
                                        <span className="material-symbols-outlined text-primary">upload_file</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Node Handshake Succeeded</p>
                                        <p className="text-[11px] text-on-surface-variant uppercase font-medium">10:32 AM • GLOBAL CDN PACKET</p>
                                    </div>
                                </div>
                                {/* Log Item 3 */}
                                <div className="flex items-center gap-4 py-3 border-b border-surface-variant/20">
                                    <div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center">
                                        <span className="material-symbols-outlined text-on-surface-variant">history</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Creative Cache Rebuilt</p>
                                        <p className="text-[11px] text-on-surface-variant uppercase font-medium">09:15 AM • EDGE SERVER STAGING</p>
                                    </div>
                                </div>
                                {/* Log Item 4 */}
                                <div className="flex items-center gap-4 py-3 border-b border-surface-variant/20">
                                    <div className="w-10 h-10 rounded bg-surface-container-low flex items-center justify-center">
                                        <span className="material-symbols-outlined text-secondary">done_all</span>
                                    </div>
                                    <div>
                                        <p className="text-sm font-bold">Billing Authorization Secured</p>
                                        <p className="text-[11px] text-on-surface-variant uppercase font-medium">08:50 AM • TREASURY API</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default DeploymentStatus;
