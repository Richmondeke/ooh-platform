import React from 'react';
import {
    MyLocation,
    Bolt,
    Image,
    Lightbulb,
    DirectionsBus,
    CalendarMonth,
    GridView,
    List,
    LocationOn,
    Add,
    ChevronLeft,
    ChevronRight,
    ShoppingCart
} from '@mui/icons-material';

const RouteInventoryList: React.FC = () => {
    return (
        <div className="flex h-full bg-surface">
            {/* Discovery Filters Sidebar */}
            <aside className="w-80 h-full border-r border-outline-variant/10 bg-white flex flex-col shrink-0">
                <div className="p-6 border-b border-outline-variant/5">
                    <h2 className="font-headline text-xl font-bold text-primary">Discovery Filters</h2>
                    <p className="text-xs text-on-surface-variant mt-1">Refine your asset search</p>
                </div>

                <div className="flex-1 overflow-y-auto p-6 space-y-8 no-scrollbar">
                    {/* Location Search */}
                    <section>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">Location Radius</label>
                        <div className="space-y-3">
                            <div className="relative">
                                <input
                                    className="w-full bg-surface-container-low border-none rounded-lg py-2 pl-3 pr-10 text-sm font-medium focus:ring-1 focus:ring-primary/20"
                                    type="text"
                                    defaultValue="Los Angeles, CA"
                                />
                                <MyLocation className="absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant !text-sm" />
                            </div>
                            <input className="w-full h-1 bg-surface-container rounded-lg appearance-none cursor-pointer accent-primary" type="range" />
                            <div className="flex justify-between text-[10px] font-medium text-on-surface-variant">
                                <span>5 miles</span>
                                <span>50 miles</span>
                            </div>
                        </div>
                    </section>

                    {/* Asset Type */}
                    <section>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">Asset Type</label>
                        <div className="grid grid-cols-2 gap-2">
                            <FilterButton icon={<Bolt />} label="Digital" active />
                            <FilterButton icon={<Image />} label="Static" />
                            <FilterButton icon={<Lightbulb />} label="Lamp Pole" />
                            <FilterButton icon={<DirectionsBus />} label="Transit" />
                        </div>
                    </section>

                    {/* Price Range */}
                    <section>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">Price Range (Monthly)</label>
                        <div className="flex gap-2 items-center">
                            <div className="flex-1 bg-surface-container-low rounded-lg p-2">
                                <span className="text-[9px] text-on-surface-variant block">MIN</span>
                                <span className="text-sm font-bold">$2,500</span>
                            </div>
                            <div className="w-4 h-px bg-outline-variant/30"></div>
                            <div className="flex-1 bg-surface-container-low rounded-lg p-2">
                                <span className="text-[9px] text-on-surface-variant block">MAX</span>
                                <span className="text-sm font-bold">$15,000+</span>
                            </div>
                        </div>
                    </section>

                    {/* Availability */}
                    <section>
                        <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-3 block">Campaign Period</label>
                        <div className="bg-surface-container-low rounded-xl p-4">
                            <div className="flex items-center justify-between mb-4">
                                <CalendarMonth className="text-primary !text-sm" />
                                <span className="text-xs font-bold text-primary">Oct 12 - Nov 12</span>
                            </div>
                            <div className="grid grid-cols-7 gap-1 text-center">
                                {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((d, i) => (
                                    <div key={i} className="text-[8px] text-on-surface-variant">{d}</div>
                                ))}
                                {[...Array(31)].slice(0, 7).map((_, i) => (
                                    <div key={i} className={`h-6 w-full flex items-center justify-center text-[10px] ${i === 3 ? 'bg-primary text-white rounded-l-md' : i === 6 ? 'bg-primary text-white rounded-r-md' : i > 3 && i < 6 ? 'bg-primary/20' : ''}`}>{i + 1}</div>
                                ))}
                            </div>
                        </div>
                    </section>
                </div>

                <div className="p-6 bg-surface-container-low/30">
                    <button className="w-full bg-primary text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary-container transition-all text-sm">
                        Apply Filters
                        <span className="text-xs font-normal opacity-70">(124 assets)</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <section className="flex-1 flex flex-col bg-surface-container-lowest overflow-hidden">
                {/* Toolbar */}
                <div className="bg-white border-b border-outline-variant/10 px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-6">
                        <h2 className="font-headline font-bold text-lg text-primary">Available Inventory</h2>
                        <div className="flex items-center bg-surface-container-low rounded-lg p-1">
                            <button className="p-2 text-on-surface-variant hover:text-primary transition-colors">
                                <GridView className="!text-lg" />
                            </button>
                            <button className="p-2 bg-white shadow-sm rounded-md text-primary">
                                <List className="!text-lg" />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs text-on-surface-variant font-medium">Sort by:</span>
                        <select className="bg-transparent border-none text-xs font-bold text-primary focus:ring-0 cursor-pointer">
                            <option>Highest Impressions</option>
                            <option>Lowest Price</option>
                            <option>Newest Added</option>
                        </select>
                    </div>
                </div>

                {/* Assets List */}
                <div className="flex-1 overflow-y-auto p-8 space-y-4 no-scrollbar">
                    <div className="grid grid-cols-[120px_1fr_120px_140px_140px_60px] gap-6 px-4 text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">
                        <div>Preview</div>
                        <div>Asset Details</div>
                        <div>Type</div>
                        <div>Impressions</div>
                        <div>Monthly Rate</div>
                        <div className="text-right">Action</div>
                    </div>

                    <AssetRow
                        image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200"
                        name="Sunset Plaza Digital Mega"
                        location="8400 Sunset Blvd, West Hollywood"
                        type="Digital"
                        impressions="840,000"
                        rate="$12,450"
                        isDigital
                    />
                    <AssetRow
                        image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=200"
                        name="Santa Monica Fwy Wallscape"
                        location="I-10 E/O Vermont Ave"
                        type="Static"
                        impressions="1,120,000"
                        rate="$8,200"
                    />
                    <AssetRow
                        image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=200"
                        name="Wilshire Blvd Transit Network"
                        location="Various Locations, Mid-City"
                        type="Transit"
                        impressions="450,000"
                        rate="$3,500"
                    />
                    <AssetRow
                        image="https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&q=80&w=200"
                        name="Rodeo Drive Kiosk Bundle"
                        location="Beverly Hills, CA"
                        type="Digital"
                        impressions="280,000"
                        rate="$15,000"
                        isDigital
                    />
                </div>

                {/* Bottom Bar */}
                <div className="bg-primary text-white py-4 px-8 flex items-center justify-between z-20">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-secondary-fixed animate-pulse"></div>
                            <span className="text-xs font-semibold">124 assets matching your search</span>
                        </div>
                        <div className="h-4 w-px bg-white/20"></div>
                        <div className="text-[10px] font-medium opacity-80 uppercase tracking-wider">Total Est. Weekly Impressions: <span className="text-secondary-fixed font-bold">14.8M</span></div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-tight">
                            <button className="p-1 hover:bg-white/10 rounded transition-colors"><ChevronLeft className="!text-sm" /></button>
                            <span>Page 1 of 8</span>
                            <button className="p-1 hover:bg-white/10 rounded transition-colors"><ChevronRight className="!text-sm" /></button>
                        </div>
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-2">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" className="w-6 h-6 rounded-full border-2 border-primary object-cover" alt="Member" />
                                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=facearea&facepad=2&w=100&h=100&q=80" className="w-6 h-6 rounded-full border-2 border-primary object-cover" alt="Member" />
                                <div className="w-6 h-6 rounded-full bg-primary-container border-2 border-primary flex items-center justify-center text-[8px] font-bold text-on-primary-container">+4</div>
                            </div>
                            <button className="text-[10px] bg-white text-primary px-4 py-1.5 rounded-full transition-colors font-bold uppercase tracking-tight shadow-lg flex items-center gap-2">
                                <ShoppingCart className="!text-xs" />
                                View Cart (3)
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

const FilterButton: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
    <button className={`flex items-center gap-2 p-2 rounded-lg border text-xs font-semibold transition-all ${active ? 'border-primary bg-primary/5 text-primary' : 'border-outline-variant/20 hover:bg-surface-container-low text-on-surface-variant'}`}>
        <span className="opacity-70">{icon}</span>
        {label}
    </button>
);

const AssetRow: React.FC<{ image: string; name: string; location: string; type: string; impressions: string; rate: string; isDigital?: boolean }> = ({ image, name, location, type, impressions, rate, isDigital }) => (
    <div className="grid grid-cols-[120px_1fr_120px_140px_140px_60px] gap-6 items-center bg-white p-4 rounded-xl shadow-sm border border-outline-variant/10 hover:shadow-md transition-shadow group cursor-pointer">
        <div className="h-20 w-full rounded-lg overflow-hidden bg-surface-container-low">
            <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div>
            <h3 className="font-bold text-primary text-sm">{name}</h3>
            <p className="text-xs text-on-surface-variant flex items-center gap-1 mt-1">
                <LocationOn className="!text-xs" />
                {location}
            </p>
        </div>
        <div>
            <span className={`text-[10px] font-bold px-2 py-1 rounded-full uppercase tracking-tighter ${isDigital ? 'bg-primary/10 text-primary' : 'bg-surface-container-low text-on-surface-variant'}`}>
                {type}
            </span>
        </div>
        <div className="flex flex-col">
            <span className="text-sm font-bold text-primary">{impressions}</span>
            <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">per week</span>
        </div>
        <div className="flex flex-col">
            <span className="text-sm font-black text-primary font-headline tracking-tighter">{rate}</span>
            <span className="text-[10px] text-on-surface-variant uppercase font-bold tracking-tighter">USD / Month</span>
        </div>
        <div className="flex justify-end">
            <button className="bg-secondary text-white w-10 h-10 rounded-full shadow-sm hover:bg-on-secondary-container transition-colors flex items-center justify-center hover:scale-105 active:scale-95">
                <Add />
            </button>
        </div>
    </div>
);

export default RouteInventoryList;
