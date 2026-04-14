import React from 'react';
import {
    EventNote,
    Map as MapIcon,
    Visibility,
    DownloadForOffline,
    ChevronRight,
    FilterList,
    Fullscreen,
    PictureAsPdf,
    TableView,
    Description,
    Code,
    CalendarMonth,
    EditCalendar,
    BarChart
} from '@mui/icons-material';

const ExportConfig: React.FC = () => {
    return (
        <div className="p-8 bg-surface-container-low min-h-full">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="flex justify-between items-end mb-8">
                    <div>
                        <nav className="flex items-center gap-2 text-xs text-on-surface-variant mb-2">
                            <span>Reports</span>
                            <ChevronRight className="!text-xs" />
                            <span className="font-bold text-primary">Export Configuration</span>
                        </nav>
                        <h1 className="text-3xl font-extrabold text-on-surface tracking-tight font-headline">Report Export Configuration</h1>
                        <p className="text-on-surface-variant mt-1">Customize your performance narrative before generation.</p>
                    </div>
                </div>

                {/* Layout Grid */}
                <div className="grid grid-cols-12 gap-6">
                    {/* Left Column: Settings */}
                    <div className="col-span-12 lg:col-span-7 space-y-6">
                        <section className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 shadow-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <EventNote className="text-primary" />
                                <h2 className="text-lg font-bold text-on-surface font-headline">Timeframe & Metrics</h2>
                            </div>

                            <div className="mb-8">
                                <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3">Date Range</label>
                                <div className="grid grid-cols-2 gap-4">
                                    <button className="flex items-center justify-between px-4 py-3 bg-surface-container-low rounded-lg border border-transparent hover:border-primary/20 transition-all text-left group">
                                        <div>
                                            <p className="text-[10px] text-on-surface-variant">Active Selection</p>
                                            <p className="font-bold text-sm">Q4 2025</p>
                                        </div>
                                        <CalendarMonth className="text-on-surface-variant group-hover:text-primary transition-colors" />
                                    </button>
                                    <div className="flex items-center justify-between px-4 py-3 bg-surface-container-low rounded-lg border border-transparent opacity-50 cursor-not-allowed">
                                        <div>
                                            <p className="text-[10px] text-on-surface-variant">Custom Range</p>
                                            <p className="font-bold text-sm">Select dates...</p>
                                        </div>
                                        <EditCalendar className="text-on-surface-variant" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-3">Core Metrics</label>
                                <div className="grid grid-cols-3 gap-3">
                                    <MetricCheckbox label="Impressions" checked />
                                    <MetricCheckbox label="Reach" checked />
                                    <MetricCheckbox label="Frequency" />
                                    <MetricCheckbox label="ROI" checked />
                                    <MetricCheckbox label="CPM" checked />
                                    <MetricCheckbox label="Engagement" />
                                </div>
                            </div>
                        </section>

                        <section className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 shadow-sm">
                            <div className="flex items-center justify-between mb-6">
                                <div className="flex items-center gap-2">
                                    <MapIcon className="text-primary" />
                                    <h2 className="text-lg font-bold text-on-surface font-headline">Asset Filtering</h2>
                                </div>
                                <span className="text-xs text-on-surface-variant">12 Assets Selected</span>
                            </div>

                            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-4 border border-outline-variant/10 group cursor-pointer">
                                <img
                                    src="https://images.unsplash.com/photo-1449156001437-3a16d1dfbe2c?auto=format&fit=crop&q=80&w=1200"
                                    alt="City Map"
                                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-primary/10"></div>
                                <div className="absolute bottom-4 left-4 right-4 flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary whitespace-nowrap shadow-sm">Times Square Digital</span>
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary whitespace-nowrap shadow-sm">Sunset Blvd Billboard</span>
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary whitespace-nowrap shadow-sm">London Eye Screen</span>
                                    <span className="bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold text-primary whitespace-nowrap shadow-sm">+9 More</span>
                                </div>
                            </div>

                            <button className="w-full py-2.5 flex items-center justify-center gap-2 text-primary font-bold text-sm border-2 border-primary/10 rounded-lg hover:bg-primary/5 transition-colors">
                                <FilterList className="!text-sm" />
                                Refine Selection
                            </button>
                        </section>
                    </div>

                    {/* Right Column: Preview & Format */}
                    <div className="col-span-12 lg:col-span-5 space-y-6">
                        <section className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 shadow-sm">
                            <div className="flex items-center gap-2 mb-6">
                                <Visibility className="text-primary" />
                                <h2 className="text-lg font-bold text-on-surface font-headline">Layout Preview</h2>
                            </div>
                            <div className="aspect-[3/4] w-full bg-surface-container-low rounded-lg p-6 flex flex-col gap-4 shadow-inner relative overflow-hidden group">
                                <div className="h-10 w-2/3 bg-surface-container-highest rounded-md mb-2"></div>
                                <div className="grid grid-cols-3 gap-2 mb-2">
                                    <div className="h-16 bg-surface-container-highest rounded-md"></div>
                                    <div className="h-16 bg-surface-container-highest rounded-md"></div>
                                    <div className="h-16 bg-surface-container-highest rounded-md"></div>
                                </div>
                                <div className="h-32 bg-surface-container-highest rounded-md flex items-center justify-center">
                                    <BarChart className="text-surface-variant !text-4xl" />
                                </div>
                                <div className="h-24 bg-surface-container-highest rounded-md"></div>
                                <div className="flex-1"></div>
                                <div className="h-6 w-1/4 bg-surface-container-highest rounded-md ml-auto"></div>

                                <div className="absolute inset-0 flex items-center justify-center bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="bg-white px-4 py-2 rounded-full font-bold text-xs text-primary shadow-lg flex items-center gap-2 hover:scale-105 transition-transform">
                                        <Fullscreen className="!text-sm" />
                                        Full Screen Preview
                                    </button>
                                </div>
                            </div>
                            <p className="text-center text-[11px] text-on-surface-variant mt-4 font-medium italic">Standard Strategic Template v2.4 (Default)</p>
                        </section>

                        <section className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/15 shadow-sm">
                            <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-4">Export Format</label>
                            <div className="grid grid-cols-4 gap-2 mb-8">
                                <FormatButton icon={<PictureAsPdf />} label="PDF" active />
                                <FormatButton icon={<TableView />} label="XLSX" />
                                <FormatButton icon={<Description />} label="CSV" />
                                <FormatButton icon={<Code />} label="JSON" />
                            </div>
                            <button className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-white rounded-lg font-black text-sm shadow-xl hover:shadow-primary/20 hover:scale-[1.01] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                                <DownloadForOffline />
                                Generate & Download
                            </button>
                            <p className="text-center text-[10px] text-on-surface-variant mt-4">Estimated generation time: <span className="font-bold">~12 seconds</span></p>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

const MetricCheckbox: React.FC<{ label: string; checked?: boolean }> = ({ label, checked }) => (
    <label className="flex items-center gap-3 p-3 rounded-lg border border-outline-variant/20 hover:bg-secondary-container/10 cursor-pointer transition-colors">
        <input type="checkbox" defaultChecked={checked} className="rounded text-primary focus:ring-primary h-4 w-4" />
        <span className="text-sm font-medium">{label}</span>
    </label>
);

const FormatButton: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
    <button className={`flex flex-col items-center justify-center gap-1 p-3 rounded-lg border-2 transition-all ${active ? 'border-primary bg-primary/5 text-primary' : 'border-transparent bg-surface-container-low text-on-surface-variant hover:border-outline-variant/30'}`}>
        {icon}
        <span className="text-[10px] font-black tracking-tighter">{label}</span>
    </button>
);

export default ExportConfig;
