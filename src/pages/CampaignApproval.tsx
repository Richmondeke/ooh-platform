import React from 'react';
import {
    FactCheck,
    Gavel,
    Message,
    ThumbUp,
    ThumbDown,
    ChevronRight,
    Visibility,
    History,
    Description,
    Image,
    VideoLibrary,
    Scale
} from '@mui/icons-material';

const CampaignApproval: React.FC = () => {
    return (
        <div className="p-8 bg-surface-container-low min-h-full">
            <div className="max-w-6xl mx-auto">
                {/* Approval Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
                    <div>
                        <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-widest mb-2">
                            <Scale className="!text-sm" /> Compliance Registry
                        </div>
                        <h1 className="text-3xl font-black text-on-surface font-headline tracking-tighter">Campaign Approval Chamber</h1>
                        <p className="text-on-surface-variant max-w-lg">Technical and creative review of pending OOH activations. Ensure all assets meet local market regulations.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 bg-white text-on-surface-variant text-xs font-bold rounded-xl border border-outline-variant/10 shadow-sm flex items-center gap-2">
                            <History className="!text-sm" /> Review History
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-8">
                    {/* Active Queue */}
                    <div className="col-span-12 lg:col-span-8 space-y-6">
                        <ApprovalTicket
                            id="C-2025-084-NYC"
                            client="Global Beverage Co."
                            campaign="Summer Refresh 2025"
                            date="Submission: Oct 26, 02:45 PM"
                            status="Pending Technical Review"
                            tagColor="bg-primary/5 text-primary"
                        />
                        <ApprovalTicket
                            id="C-2025-091-LA"
                            client="TechNext Electronics"
                            campaign="Vision Pro OOH Launch"
                            date="Submission: Oct 25, 11:12 AM"
                            status="Creative Approved"
                            tagColor="bg-secondary/10 text-secondary"
                            isFlagged
                        />
                        <ApprovalTicket
                            id="C-2025-072-LDN"
                            client="Vantage Luxury"
                            campaign="Winter Collection Pre-Roll"
                            date="Submission: Oct 24, 09:30 AM"
                            status="Awaiting Policy Legal"
                            tagColor="bg-tertiary-container/5 text-on-tertiary-container"
                        />
                    </div>

                    {/* Right Detail Pane (Context Area) */}
                    <div className="col-span-12 lg:col-span-4">
                        <div className="bg-white rounded-3xl p-8 border border-outline-variant/10 shadow-premium sticky top-24">
                            <div className="flex items-center justify-between mb-8">
                                <h3 className="text-lg font-bold text-primary font-headline">Selected Asset Analysis</h3>
                                <Visibility className="text-on-surface-variant !text-sm cursor-pointer" />
                            </div>

                            <div className="aspect-video bg-surface-container-low rounded-2xl mb-6 relative overflow-hidden group">
                                <img src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&q=80&w=400" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="Asset" />
                                <div className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="bg-white px-4 py-2 rounded-full font-bold text-[10px] text-primary shadow-lg uppercase tracking-widest">Full Quality Preview</button>
                                </div>
                            </div>

                            <div className="space-y-4 mb-10">
                                <DetailRow icon={<Image />} label="Asset Type" value="UHD Motion Graphic" />
                                <DetailRow icon={<VideoLibrary />} label="Duration" value="10.00s Looping" />
                                <DetailRow icon={<Description />} label="Technical Fit" value="100% (Bitrate: 25Mbps)" />
                                <DetailRow icon={<Gavel />} label="Policy Match" value="Alcohol/Restricted Age" />
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <button className="flex items-center justify-center gap-2 py-4 rounded-xl border-2 border-error/10 text-error font-black text-xs uppercase tracking-widest hover:bg-error/5 transition-all">
                                    <ThumbDown className="!text-sm" /> Reject
                                </button>
                                <button className="flex items-center justify-center gap-2 py-4 rounded-xl bg-primary text-white font-black text-xs uppercase tracking-widest hover:bg-primary-container shadow-xl transition-all">
                                    <ThumbUp className="!text-sm" /> Approve
                                </button>
                            </div>
                            <button className="w-full mt-4 py-3 text-xs font-bold text-on-surface-variant flex items-center justify-center gap-2 border border-transparent hover:border-outline-variant/20 rounded-xl transition-all">
                                <Message className="!text-sm opacity-50" /> Add Review Comments
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ApprovalTicket: React.FC<{ id: string; client: string; campaign: string; date: string; status: string; tagColor: string; isFlagged?: boolean }> = ({ id, client, campaign, date, status, tagColor, isFlagged }) => (
    <div className="bg-white p-6 rounded-3xl border border-outline-variant/10 shadow-sm hover:shadow-premium transition-all group cursor-pointer flex items-center gap-6">
        <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 ${isFlagged ? 'bg-error/5 text-error shadow-[inset_0_0_12px_rgba(186,26,26,0.1)]' : 'bg-surface-container-low text-on-surface-variant'}`}>
            <FactCheck className={isFlagged ? '!text-2xl animate-pulse' : '!text-2xl'} />
        </div>
        <div className="flex-1">
            <div className="flex items-center gap-3 mb-1">
                <span className="text-[10px] font-black text-on-surface-variant opacity-60 font-headline tracking-tighter uppercase">{id}</span>
                <span className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full ${tagColor}`}>{status}</span>
            </div>
            <h3 className="font-bold text-on-surface text-lg group-hover:text-primary transition-colors">{campaign}</h3>
            <p className="text-xs text-on-surface-variant leading-tight opacity-70">Client: <span className="font-bold text-on-surface">{client}</span> • {date}</p>
        </div>
        <div className="flex items-center gap-4">
            <button className="p-2 text-on-surface-variant hover:text-primary rounded-full hover:bg-primary/5 transition-all">
                <Visibility className="!text-sm" />
            </button>
            <ChevronRight className="text-on-surface-variant opacity-20" />
        </div>
    </div>
);

const DetailRow: React.FC<{ icon: React.ReactNode; label: string; value: string }> = ({ icon, label, value }) => (
    <div className="flex items-center justify-between text-[11px]">
        <div className="flex items-center gap-2 text-on-surface-variant font-medium">
            <span className="opacity-60">{icon}</span>
            <span>{label}</span>
        </div>
        <span className="font-bold text-on-surface">{value}</span>
    </div>
);

export default CampaignApproval;
