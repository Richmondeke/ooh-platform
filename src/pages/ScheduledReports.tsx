import React from 'react';
import {
    Schedule,
    CheckCircle,
    Error as ErrorIcon,
    Edit,
    Delete,
    Add,
    FilterList,
    Sort,
    Analytics,
    Campaign,
    Description,
    ShareLocation,
    ChevronLeft,
    ChevronRight,
    Lightbulb,
    SafetyCheck
} from '@mui/icons-material';

const ScheduledReports: React.FC = () => {
    return (
        <div className="p-8 bg-surface-container-low min-h-full">
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <h1 className="font-headline text-3xl font-extrabold tracking-tight text-primary mb-2">Scheduled Reports</h1>
                        <p className="text-on-surface-variant max-w-lg">Manage automated delivery of your media performance insights. Configure frequencies, recipients, and delivery channels.</p>
                    </div>
                    <button className="bg-primary text-on-primary px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity shadow-lg">
                        <Add />
                        Create New Schedule
                    </button>
                </div>

                {/* Stats Bento */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <StatMiniCard label="Active Schedules" value="12" subValue="+2 this mo" subColor="text-secondary" />
                    <StatMiniCard label="Reports Sent (24h)" value="84" icon={<CheckCircle className="text-secondary !text-lg" />} />
                    <StatMiniCard label="Delivery Success" value="99.2%" progress={99} />
                    <StatMiniCard label="Next Wave" value="06:00 AM" subValue="Tomorrow" />
                </div>

                {/* Main Schedule List */}
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden border border-outline-variant/10">
                    <div className="p-6 border-b border-surface-container-low flex justify-between items-center bg-white">
                        <h2 className="font-headline font-bold text-on-surface">Automation Queue</h2>
                        <div className="flex gap-2">
                            <button className="bg-surface-container-low text-on-surface-variant px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-surface-variant transition-colors">
                                <FilterList className="!text-sm" />
                                Filter
                            </button>
                            <button className="bg-surface-container-low text-on-surface-variant px-3 py-1.5 rounded-lg text-xs font-bold flex items-center gap-1 hover:bg-surface-variant transition-colors">
                                <Sort className="!text-sm" />
                                Sort
                            </button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-surface-container-low/50">
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Report Name</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Frequency</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Recipients</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Last Sent</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant">Status</th>
                                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-on-surface-variant text-right">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-surface-container-low">
                                <ScheduleRow
                                    name="Weekly Performance Summary"
                                    details="Master Dashboard • PDF"
                                    freq="Weekly on Mondays"
                                    recipients={['CT', 'BM', '+2']}
                                    email="client-team@brand.com"
                                    lastDate="Oct 23, 2023"
                                    lastTime="08:00 AM"
                                    status="Delivered"
                                    icon={<Analytics />}
                                />
                                <ScheduleRow
                                    name="Meta Ad Spend Optimization"
                                    details="Financials • Excel"
                                    freq="Daily at 10 PM"
                                    email="media-leads@internal.com"
                                    lastDate="Oct 26, 2023"
                                    lastTime="10:02 PM"
                                    status="Delivered"
                                    icon={<Campaign />}
                                />
                                <ScheduleRow
                                    name="Monthly Executive Deck"
                                    details="Leadership • PPTX"
                                    freq="1st of the month"
                                    email="exec-board@horizon.com"
                                    lastDate="Oct 01, 2023"
                                    lastTime="09:15 AM"
                                    status="Failed"
                                    icon={<Description />}
                                />
                                <ScheduleRow
                                    name="Geo-Fencing ROI Review"
                                    details="Regional • Dashboard Link"
                                    freq="Bi-weekly Fridays"
                                    email="region-north@brand.com"
                                    lastTime="Never Sent"
                                    status="Pending"
                                    icon={<ShareLocation />}
                                />
                            </tbody>
                        </table>
                    </div>
                    <div className="p-6 bg-surface-container-low/50 border-t border-surface-container-low flex justify-between items-center">
                        <span className="text-xs text-on-surface-variant">Showing 4 of 12 active schedules</span>
                        <div className="flex gap-2">
                            <button className="w-8 h-8 rounded bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-white transition-colors">
                                <ChevronLeft className="!text-sm" />
                            </button>
                            <button className="w-8 h-8 rounded bg-primary text-on-primary flex items-center justify-center text-xs font-bold shadow-sm">1</button>
                            <button className="w-8 h-8 rounded bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-center text-xs font-bold text-on-surface-variant hover:bg-white transition-colors">2</button>
                            <button className="w-8 h-8 rounded bg-surface-container-lowest border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-white transition-colors">
                                <ChevronRight className="!text-sm" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Context / Tips */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <TipCard
                        icon={<Lightbulb />}
                        title="Strategist Tip"
                        text="Schedule reports to arrive at least 30 minutes before your client syncs. This ensures delivery is confirmed and the latest data is cached for the presentation."
                        color="text-secondary"
                        bgColor="bg-secondary/10"
                    />
                    <TipCard
                        icon={<SafetyCheck />}
                        title="Delivery Logs"
                        text="Looking for historical proof of delivery? Visit the Export History page to see detailed SMTP handshake logs for every recipient."
                        color="text-primary"
                        bgColor="bg-primary/10"
                    />
                </div>
            </div>
        </div>
    );
};

const StatMiniCard: React.FC<{ label: string; value: string; subValue?: string; subColor?: string; icon?: React.ReactNode; progress?: number }> = ({ label, value, subValue, subColor, icon, progress }) => (
    <div className="bg-surface-container-lowest p-6 rounded-xl border-none shadow-sm flex flex-col justify-between h-32">
        <span className="text-on-surface-variant text-xs font-bold uppercase tracking-wider">{label}</span>
        <div className="flex items-end justify-between mt-4">
            <span className="font-headline text-3xl font-bold text-primary">{value}</span>
            {icon && icon}
            {subValue && <span className={`${subColor || 'text-on-surface-variant'} text-xs font-bold`}>{subValue}</span>}
            {progress !== undefined && (
                <div className="w-16 bg-surface-container h-1 rounded-full overflow-hidden">
                    <div className="bg-secondary h-full transition-all" style={{ width: `${progress}%` }}></div>
                </div>
            )}
        </div>
    </div>
);

const ScheduleRow: React.FC<{ name: string; details: string; freq: string; recipients?: string[]; email: string; lastDate?: string; lastTime: string; status: 'Delivered' | 'Failed' | 'Pending'; icon: React.ReactNode }> = ({ name, details, freq, recipients, email, lastDate, lastTime, status, icon }) => (
    <tr className="hover:bg-surface-container-low/30 transition-colors group">
        <td className="px-6 py-4">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                    {icon}
                </div>
                <div>
                    <div className="font-bold text-on-surface text-sm">{name}</div>
                    <div className="text-xs text-on-surface-variant">{details}</div>
                </div>
            </div>
        </td>
        <td className="px-6 py-4 text-sm text-on-surface">{freq}</td>
        <td className="px-6 py-4">
            {recipients ? (
                <div className="flex -space-x-2">
                    {recipients.map((r, i) => (
                        <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold ring-2 ring-surface-container-lowest ${['bg-secondary-container text-on-secondary-container', 'bg-tertiary-fixed text-on-tertiary-fixed', 'bg-surface-variant text-on-surface-variant'][i % 3]}`}>
                            {r}
                        </div>
                    ))}
                </div>
            ) : (
                <span className="text-xs text-on-surface-variant">{email}</span>
            )}
            {recipients && <div className="text-[10px] mt-1 text-on-surface-variant">{email}</div>}
        </td>
        <td className="px-6 py-4">
            {lastDate && <div className="text-sm font-medium">{lastDate}</div>}
            <div className={`text-[10px] ${lastDate ? 'text-on-surface-variant' : 'text-on-surface-variant italic'}`}>{lastTime}</div>
        </td>
        <td className="px-6 py-4">
            <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1 text-xs font-bold ${status === 'Delivered' ? 'text-secondary' : status === 'Failed' ? 'text-error' : 'text-on-surface-variant'}`}>
                    {status === 'Delivered' ? <CheckCircle className="!text-sm" /> : status === 'Failed' ? <ErrorIcon className="!text-sm" /> : <Schedule className="!text-sm" />}
                    {status}
                </div>
                <div className="relative inline-flex items-center cursor-pointer ml-2">
                    <input type="checkbox" defaultChecked={status !== 'Failed'} className="sr-only peer" />
                    <div className="w-8 h-4 bg-outline-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-secondary"></div>
                </div>
            </div>
        </td>
        <td className="px-6 py-4 text-right">
            <div className="flex justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button className="text-on-surface-variant hover:text-primary transition-colors p-1">
                    <Edit className="!text-sm" />
                </button>
                <button className="text-on-surface-variant hover:text-error transition-colors p-1">
                    <Delete className="!text-sm" />
                </button>
            </div>
        </td>
    </tr>
);

const TipCard: React.FC<{ icon: React.ReactNode; title: string; text: string; color: string; bgColor: string }> = ({ icon, title, text, color, bgColor }) => (
    <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-white/40 shadow-sm">
        <div className="flex items-start gap-4">
            <div className={`p-3 ${bgColor} rounded-xl ${color}`}>
                {icon}
            </div>
            <div>
                <h4 className="font-bold text-on-surface text-sm mb-1">{title}</h4>
                <p className="text-xs text-on-surface-variant leading-relaxed">{text}</p>
            </div>
        </div>
    </div>
);

export default ScheduledReports;
