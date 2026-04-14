import React from 'react';
import {
    AutoFixHigh,
    Map as MapIcon,
    TrackChanges as TargetIcon,
    Campaign as CampaignIcon,
    EmojiObjects,
    ChevronRight,
    AddCircleOutlined,
    Layers,
    TouchApp,
    Psychology
} from '@mui/icons-material';

const CampaignBuilder: React.FC = () => {
    return (
        <div className="p-8 bg-surface-container-low min-h-full">
            <div className="max-w-7xl mx-auto">
                {/* Header Block */}
                <div className="mb-10 text-center max-w-2xl mx-auto">
                    <div className="inline-flex items-center gap-2 bg-primary/5 px-4 py-1.5 rounded-full text-primary text-[10px] font-black uppercase tracking-widest mb-4">
                        <Psychology className="!text-sm" /> AI-Assisted Strategy
                    </div>
                    <h1 className="text-4xl font-black text-primary font-headline tracking-tighter mb-4">Craft Your Precision Campaign</h1>
                    <p className="text-on-surface-variant">Our generative planning engine maps your brand's DNA against real-world transit patterns to find the perfect media mix.</p>
                </div>

                {/* Step-by-Step Selection */}
                <div className="grid grid-cols-12 gap-8">
                    {/* Step 1: Market Intelligence */}
                    <div className="col-span-12 lg:col-span-4 group h-full">
                        <BuilderCard
                            step="01"
                            icon={<TargetIcon />}
                            title="Target Demographics"
                            description="Define who you need to reach. We'll cross-reference with mobility data."
                            bgColor="bg-primary/5"
                            accentColor="text-primary"
                        >
                            <div className="space-y-4 py-4">
                                <OptionToggle label="Urban Professionals" selected />
                                <OptionToggle label="Gen Z Tech Seekers" />
                                <OptionToggle label="High-NW Investors" selected />
                            </div>
                        </BuilderCard>
                    </div>

                    {/* Step 2: Media Selection */}
                    <div className="col-span-12 lg:col-span-4 group h-full">
                        <BuilderCard
                            step="02"
                            icon={<Layers />}
                            title="Media Mix Selection"
                            description="Choose the asset categories for your multi-touch campaign."
                            bgColor="bg-secondary/5"
                            accentColor="text-secondary"
                        >
                            <div className="grid grid-cols-2 gap-3 py-4">
                                <MediaSmallCard icon={<AutoFixHigh />} label="Digital OOH" active />
                                <MediaSmallCard icon={<MapIcon />} label="Static Wall" />
                                <MediaSmallCard icon={<EmojiObjects />} label="Street Hubs" active />
                                <MediaSmallCard icon={<CampaignIcon />} label="Mega-Spec" />
                            </div>
                        </BuilderCard>
                    </div>

                    {/* Step 3: Intensity & Reach */}
                    <div className="col-span-12 lg:col-span-4 group h-full">
                        <BuilderCard
                            step="03"
                            icon={<TouchApp />}
                            title="Campaign Intensity"
                            description="Adjust the saturation level for your selected markets."
                            bgColor="bg-tertiary-container/5"
                            accentColor="text-tertiary-container"
                        >
                            <div className="py-6">
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-xs font-bold text-on-surface">Dominance Level</span>
                                    <span className="text-xs font-black text-primary">Regional Power (72%)</span>
                                </div>
                                <div className="h-2 w-full bg-surface-container rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-primary to-secondary w-[72%]"></div>
                                </div>
                                <div className="flex justify-between mt-3 text-[10px] text-on-surface-variant font-medium opacity-60">
                                    <span>Awareness</span>
                                    <span>Saturation</span>
                                    <span>Dominance</span>
                                </div>
                            </div>
                        </BuilderCard>
                    </div>
                </div>

                {/* Action Bar */}
                <div className="mt-12 flex items-center justify-between p-8 bg-white rounded-3xl shadow-premium border border-outline-variant/10">
                    <div className="flex items-center gap-6">
                        <div>
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Est. Reach Share</p>
                            <p className="text-2xl font-black text-secondary font-headline tracking-tighter italic">2.4M Souls / Wk</p>
                        </div>
                        <div className="h-10 w-px bg-outline-variant/20"></div>
                        <div>
                            <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Efficiency Rating</p>
                            <p className="text-2xl font-black text-primary font-headline tracking-tighter">Gold Standard A+</p>
                        </div>
                    </div>
                    <button className="bg-primary text-white px-10 py-4 rounded-2xl font-black text-sm shadow-xl flex items-center gap-3 hover:scale-105 active:scale-95 transition-all">
                        Generate Route Matrix
                        <ChevronRight />
                    </button>
                </div>
            </div>
        </div>
    );
};

const BuilderCard: React.FC<{ step: string; icon: React.ReactNode; title: string; description: string; bgColor: string; accentColor: string; children?: React.ReactNode }> = ({ step, icon, title, description, bgColor, accentColor, children }) => (
    <div className="bg-white rounded-[2rem] p-8 h-full border border-outline-variant/10 shadow-sm hover:shadow-premium transition-all flex flex-col">
        <div className="flex justify-between items-start mb-6">
            <div className={`p-4 ${bgColor} rounded-2xl ${accentColor}`}>
                {icon}
            </div>
            <span className="text-4xl font-black opacity-10 font-headline tracking-tighter">{step}</span>
        </div>
        <h3 className="text-xl font-bold text-on-surface mb-2 font-headline tracking-tight">{title}</h3>
        <p className="text-xs text-on-surface-variant leading-relaxed mb-6">{description}</p>
        <div className="flex-1">
            {children}
        </div>
    </div>
);

const OptionToggle: React.FC<{ label: string; selected?: boolean }> = ({ label, selected }) => (
    <div className={`flex items-center justify-between px-4 py-3 rounded-xl border-2 transition-all cursor-pointer ${selected ? 'border-primary bg-primary/5 text-primary font-bold' : 'border-outline-variant/10 text-on-surface-variant hover:border-primary/20'}`}>
        <span className="text-xs">{label}</span>
        {selected ? <AddCircleOutlined className="!text-sm rotate-45" /> : <AddCircleOutlined className="!text-sm" />}
    </div>
);

const MediaSmallCard: React.FC<{ icon: React.ReactNode; label: string; active?: boolean }> = ({ icon, label, active }) => (
    <div className={`flex flex-col items-center gap-2 p-4 rounded-2xl border-2 transition-all cursor-pointer ${active ? 'border-secondary bg-secondary/5 text-secondary font-bold' : 'border-outline-variant/10 text-on-surface-variant hover:border-secondary/20'}`}>
        <div className="opacity-70">{icon}</div>
        <span className="text-[10px] uppercase font-black tracking-widest">{label}</span>
    </div>
);

export default CampaignBuilder;
