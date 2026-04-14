import React from 'react';
import {
    Download,
    Visibility,
    Group,
    Repeat,
    Payments,
    TrendingUp,
    ChevronRight,
    CalendarToday,
    FilterList,
    Addchart
} from '@mui/icons-material';

const CampaignReports: React.FC = () => {
    return (
        <div className="p-8 bg-surface-container-low min-h-full">
            {/* Report Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
                <div>
                    <nav className="flex gap-2 text-on-surface-variant text-xs mb-2 items-center">
                        <span>Reports</span>
                        <ChevronRight className="!text-[10px]" />
                        <span className="text-primary font-semibold">Billboard Performance</span>
                    </nav>
                    <h2 className="text-3xl font-extrabold text-on-surface tracking-tight font-headline">OOH Campaign Intelligence</h2>
                    <p className="text-on-surface-variant text-sm mt-1">Live analytics from 12 active digital billboard locations.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="bg-surface-container-lowest border border-outline-variant/15 rounded-xl px-4 py-2 flex items-center gap-3 shadow-sm">
                        <CalendarToday className="text-primary !text-sm" />
                        <div className="text-xs">
                            <span className="block text-on-surface-variant font-medium">Oct 01 - Oct 28, 2023</span>
                        </div>
                        <span className="material-symbols-outlined text-on-surface-variant text-sm">arrow_drop_down</span>
                    </div>
                    <button className="bg-secondary-container text-on-secondary-container px-4 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:shadow-md transition-shadow">
                        <Download className="!text-sm" />
                        Export PDF
                    </button>
                </div>
            </div>

            {/* Bento Grid - Performance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {/* Total Impressions */}
                <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden group shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-primary/5 rounded-lg">
                            <Visibility className="text-primary" />
                        </div>
                        <span className="text-secondary font-bold text-xs flex items-center gap-1">
                            +14.2% <TrendingUp className="!text-sm" />
                        </span>
                    </div>
                    <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest">Total Impressions</p>
                    <h3 className="text-4xl font-extrabold text-on-surface mt-1 font-headline">4.2M</h3>
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/10">
                        <div className="h-full bg-primary w-3/4"></div>
                    </div>
                </div>

                {/* Reach */}
                <div className="bg-surface-container-lowest p-6 rounded-xl group shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-secondary/5 rounded-lg">
                            <Group className="text-secondary" />
                        </div>
                        <span className="text-secondary font-bold text-xs flex items-center gap-1">
                            +5.8% <TrendingUp className="!text-sm" />
                        </span>
                    </div>
                    <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest">Unique Reach</p>
                    <h3 className="text-4xl font-extrabold text-on-surface mt-1 font-headline">1.8M</h3>
                </div>

                {/* Frequency */}
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-tertiary-container/5 rounded-lg">
                            <Repeat className="text-tertiary-container" />
                        </div>
                        <span className="text-on-surface-variant font-bold text-xs">Stable</span>
                    </div>
                    <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest">Frequency</p>
                    <h3 className="text-4xl font-extrabold text-on-surface mt-1 font-headline">2.3x</h3>
                </div>

                {/* ROI */}
                <div className="bg-surface-container-lowest p-6 rounded-xl border border-secondary/20 shadow-sm">
                    <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-secondary-container/30 rounded-lg">
                            <Payments className="text-on-secondary-container" />
                        </div>
                        <span className="text-secondary font-bold text-xs flex items-center gap-1">
                            +22% <TrendingUp className="!text-sm" />
                        </span>
                    </div>
                    <p className="text-on-surface-variant text-xs font-semibold uppercase tracking-widest">Est. Campaign ROI</p>
                    <h3 className="text-4xl font-extrabold text-on-surface mt-1 font-headline">4.8x</h3>
                </div>
            </div>

            {/* Asymmetric Data Section */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Main Chart (8 cols) */}
                <div className="lg:col-span-8 bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                    <div className="flex justify-between items-center mb-8">
                        <div>
                            <h3 className="text-xl font-bold text-on-surface font-headline">Impression Trends</h3>
                            <p className="text-on-surface-variant text-xs">Comparison between target vs actual delivery</p>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-primary"></span>
                                <span className="text-xs font-medium text-on-surface-variant">Actual</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-outline-variant"></span>
                                <span className="text-xs font-medium text-on-surface-variant">Target</span>
                            </div>
                        </div>
                    </div>

                    <div className="h-64 w-full relative flex items-end">
                        <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                            {[1, 2, 3, 4].map(i => <div key={i} className="border-t border-outline-variant w-full"></div>)}
                        </div>
                        <svg className="w-full h-full" viewBox="0 0 800 200">
                            <path d="M0,150 Q100,80 200,120 T400,60 T600,100 T800,40" fill="none" stroke="#003461" strokeLinecap="round" strokeWidth="4" />
                            <path d="M0,160 Q100,100 200,140 T400,80 T600,120 T800,60" fill="none" stroke="#c2c6d1" strokeDasharray="8,4" strokeLinecap="round" strokeWidth="2" />
                        </svg>
                    </div>
                    <div className="flex justify-between mt-4 text-xs font-medium text-on-surface-variant uppercase tracking-tighter">
                        <span>Wk 40</span>
                        <span>Wk 41</span>
                        <span>Wk 42</span>
                        <span>Wk 43</span>
                        <span>Wk 44</span>
                    </div>
                </div>

                {/* Top Performing Assets (4 cols) */}
                <div className="lg:col-span-4 bg-surface-container-lowest p-8 rounded-xl shadow-sm">
                    <h3 className="text-xl font-bold text-on-surface mb-6 font-headline">Top Performing Assets</h3>
                    <div className="space-y-6">
                        <AssetItem
                            name="NYC-TimesSquare-D3"
                            metric="842k Impressions"
                            grade="A+"
                            color="bg-secondary"
                            width="w-full"
                            image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200"
                        />
                        <AssetItem
                            name="CHI-LakeShore-A1"
                            metric="615k Impressions"
                            grade="A"
                            color="bg-secondary"
                            width="w-[82%]"
                            image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=200"
                        />
                        <AssetItem
                            name="LA-SantaMonica-B2"
                            metric="592k Impressions"
                            grade="B+"
                            color="bg-primary-container"
                            width="w-[78%]"
                            image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=200"
                        />
                    </div>
                    <button className="w-full mt-8 py-3 text-xs font-bold text-primary border border-primary/10 rounded-xl hover:bg-primary/5 transition-colors">
                        View All Assets
                    </button>
                </div>
            </div>

            {/* Geographic Performance Table */}
            <div className="mt-6 bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                <div className="p-8 border-b border-outline-variant/10 flex justify-between items-center">
                    <div>
                        <h3 className="text-xl font-bold text-on-surface font-headline">Geographic Distribution</h3>
                        <p className="text-on-surface-variant text-xs mt-1">Regional performance split by market penetration</p>
                    </div>
                    <button className="text-primary text-xs font-bold flex items-center gap-1">
                        Filter by Region
                        <FilterList className="!text-sm" />
                    </button>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-surface-container-low">
                                <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest">Market / City</th>
                                <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-right">Impressions</th>
                                <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-right">Reach Share</th>
                                <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-right">Engagement</th>
                                <th className="px-8 py-4 text-xs font-bold text-on-surface-variant uppercase tracking-widest text-center">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-outline-variant/10">
                            <TableRow city="New York City, NY" impressions="1,240,500" share="34%" engagement="+12.4%" status="Over-Performing" statusColor="bg-secondary/10 text-secondary" dotColor="bg-secondary" />
                            <TableRow city="Los Angeles, CA" impressions="980,200" share="22%" engagement="+0.5%" status="Target Met" statusColor="bg-primary/5 text-primary" dotColor="bg-primary" />
                            <TableRow city="Chicago, IL" impressions="742,100" share="18%" engagement="+4.2%" status="Growth Lead" statusColor="bg-secondary/10 text-secondary" dotColor="bg-secondary" />
                        </tbody>
                    </table>
                </div>
            </div>

            {/* FAB */}
            <button className="fixed bottom-8 right-8 h-14 w-14 bg-gradient-to-br from-secondary to-on-secondary-container text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-105 transition-transform z-50">
                <Addchart className="!text-2xl" />
            </button>
        </div>
    );
};

const AssetItem: React.FC<{ name: string; metric: string; grade: string; color: string; width: string; image: string }> = ({ name, metric, grade, color, width, image }) => (
    <div className="flex items-center gap-4 group cursor-pointer">
        <div className="h-16 w-16 rounded-xl overflow-hidden flex-shrink-0 bg-surface-container-low transition-transform group-hover:scale-105">
            <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
            <h4 className="text-sm font-bold text-on-surface">{name}</h4>
            <p className="text-xs text-on-surface-variant mt-0.5">{metric}</p>
            <div className="flex items-center gap-2 mt-2">
                <div className="flex-1 h-1 bg-surface-container-low rounded-full overflow-hidden">
                    <div className={`${color} h-full ${width} rounded-full`}></div>
                </div>
                <span className={`text-[10px] font-bold ${color.replace('bg-', 'text-')}`}>{grade}</span>
            </div>
        </div>
    </div>
);

const TableRow: React.FC<{ city: string; impressions: string; share: string; engagement: string; status: string; statusColor: string; dotColor: string }> = ({ city, impressions, share, engagement, status, statusColor, dotColor }) => (
    <tr className="hover:bg-surface-container-low transition-colors group">
        <td className="px-8 py-6">
            <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${dotColor}`}></div>
                <div>
                    <span className="block text-sm font-bold text-on-surface">{city}</span>
                    <span className="text-[10px] text-on-surface-variant">Regional Hub</span>
                </div>
            </div>
        </td>
        <td className="px-8 py-6 text-right font-medium text-sm">{impressions}</td>
        <td className="px-8 py-6 text-right font-medium text-sm">{share}</td>
        <td className="px-8 py-6 text-right font-medium text-sm text-secondary">{engagement}</td>
        <td className="px-8 py-6">
            <div className="flex justify-center">
                <span className={`${statusColor} px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider`}>{status}</span>
            </div>
        </td>
    </tr>
);

export default CampaignReports;
