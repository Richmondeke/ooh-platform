import React from 'react';
import {
    SettingsInputComponent,
    AspectRatio,
    Monitor,
    Timer,
    Tune,
    CloudUpload,
    CheckCircle,
    HelpOutlined,
    KeyboardArrowDown,
    Info
} from '@mui/icons-material';

const AssetConfiguration: React.FC = () => {
    return (
        <div className="p-8 bg-surface-container-low min-h-full">
            <div className="max-w-6xl mx-auto">
                {/* Config Header */}
                <div className="flex justify-between items-end mb-10">
                    <div>
                        <h1 className="text-3xl font-black text-primary font-headline tracking-tighter mb-2">Technical Asset Configuration</h1>
                        <p className="text-on-surface-variant max-w-lg">Define creative constraints and delivery logic for your digital inventory bundle.</p>
                    </div>
                    <div className="flex gap-2">
                        <button className="px-4 py-2 text-xs font-bold text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors flex items-center gap-2">
                            <HelpOutlined className="!text-sm" /> Specs Guide
                        </button>
                        <button className="px-4 py-2 bg-primary text-white text-xs font-bold rounded-lg shadow-lg flex items-center gap-2">
                            <CloudUpload className="!text-sm" /> Batch Asset CSV
                        </button>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-8">
                    {/* Main Config Form */}
                    <div className="col-span-12 lg:col-span-8 space-y-6">
                        <ConfigSection title="Global Creative Constraints" icon={<AspectRatio />}>
                            <div className="grid grid-cols-2 gap-6">
                                <ConfigInput label="Canvas Resolution" value="1920x1080 (HD)" subLabel="Recommended for Digital Large Format" />
                                <ConfigInput label="Aspect Ratio" value="16:9 Landscape" subLabel="Default for Times Square Cluster" />
                                <ConfigInput label="File Format Support" value="MP4, JPG, PNG" subLabel="Static & Motion Support" />
                                <ConfigSelect label="Color Profile" value="Rec. 709 (Industry Standard)" options={['Rec. 709', 'sRGB', 'P3-D65']} />
                            </div>
                        </ConfigSection>

                        <ConfigSection title="Dynamic Delivery Logic" icon={<Timer />}>
                            <div className="grid grid-cols-2 gap-6">
                                <ConfigInput label="Dayparting Strategy" value="Peak Morning / Peak Evening" subLabel="6AM-10AM & 4PM-8PM focus" />
                                <ConfigInput label="Rotation Frequency" value="Every 8 Seconds" subLabel="Average dwell time match" />
                                <div className="col-span-2">
                                    <div className="flex items-center justify-between p-4 bg-primary/5 rounded-2xl border border-primary/10">
                                        <div className="flex items-center gap-3">
                                            <Tune className="text-primary" />
                                            <div>
                                                <p className="text-sm font-bold text-primary">Contextual Triggering</p>
                                                <p className="text-[10px] text-on-surface-variant">Assets will automatically swap based on real-time weather/traffic data.</p>
                                            </div>
                                        </div>
                                        <div className="w-12 h-6 bg-primary rounded-full relative">
                                            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </ConfigSection>
                    </div>

                    {/* Right Summary / Status Panel */}
                    <div className="col-span-12 lg:col-span-4 space-y-6">
                        <div className="bg-white rounded-3xl p-8 border border-outline-variant/10 shadow-sm sticky top-24">
                            <h3 className="text-xl font-bold text-on-surface mb-6 font-headline tracking-tight">Sync Status</h3>
                            <div className="space-y-6">
                                <SyncItem label="Times Square Mega" status="Syncing Specs..." icon={<Monitor />} progress={40} />
                                <SyncItem label="Wilshire Transit Hub" status="Verified" icon={<CheckCircle className="text-secondary" />} completed />
                                <SyncItem label="Sunset Blvd Digital" status="Pending Logic" icon={<SettingsInputComponent />} />
                            </div>
                            <div className="mt-10 pt-8 border-t border-outline-variant/10">
                                <div className="flex items-start gap-3 p-4 bg-surface-container-low rounded-2xl">
                                    <Info className="text-primary !text-sm" />
                                    <p className="text-[10px] leading-relaxed text-on-surface-variant font-medium">Any changes made here will propagate to the creative approval committee via the Campaign Approval module.</p>
                                </div>
                                <button className="w-full mt-6 py-4 bg-primary text-white rounded-xl font-black text-sm shadow-xl active:scale-95 transition-all">
                                    Commit Configuration
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ConfigSection: React.FC<{ title: string; icon: React.ReactNode; children: React.ReactNode }> = ({ title, icon, children }) => (
    <section className="bg-white rounded-[2rem] p-8 border border-outline-variant/10 shadow-sm">
        <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-primary/5 rounded-xl text-primary">{icon}</div>
            <h2 className="text-xl font-bold text-on-surface font-headline tracking-tight">{title}</h2>
        </div>
        {children}
    </section>
);

const ConfigInput: React.FC<{ label: string; value: string; subLabel?: string }> = ({ label, value, subLabel }) => (
    <div className="group">
        <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">{label}</label>
        <div className="bg-surface-container-low border-2 border-transparent group-hover:border-primary/10 p-4 rounded-xl transition-all cursor-text">
            <p className="text-sm font-black text-on-surface">{value}</p>
            {subLabel && <p className="text-[10px] text-on-surface-variant mt-1 opacity-70">{subLabel}</p>}
        </div>
    </div>
);

const ConfigSelect: React.FC<{ label: string; value: string; options: string[] }> = ({ label, value }) => (
    <div className="group">
        <label className="block text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 ml-1">{label}</label>
        <div className="bg-surface-container-low border-2 border-transparent group-hover:border-primary/10 p-4 rounded-xl transition-all cursor-pointer flex justify-between items-center">
            <p className="text-sm font-black text-on-surface">{value}</p>
            <KeyboardArrowDown className="text-on-surface-variant !text-sm" />
        </div>
    </div>
);

const SyncItem: React.FC<{ label: string; status: string; icon: React.ReactNode; progress?: number; completed?: boolean }> = ({ label, status, icon, progress, completed }) => (
    <div className="flex items-center gap-4">
        <div className={`p-3 rounded-2xl ${completed ? 'bg-secondary/10 text-secondary' : 'bg-surface-container-low text-on-surface-variant shadow-inner'}`}>
            {icon}
        </div>
        <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
                <p className="text-xs font-bold text-on-surface">{label}</p>
                <span className={`text-[9px] font-black uppercase tracking-tighter ${completed ? 'text-secondary' : 'text-on-surface-variant opacity-60'}`}>{status}</span>
            </div>
            {progress !== undefined && !completed && (
                <div className="h-1 w-full bg-surface-container rounded-full overflow-hidden">
                    <div className="h-full bg-primary transition-all duration-1000" style={{ width: `${progress}%` }}></div>
                </div>
            )}
        </div>
    </div>
);

export default AssetConfiguration;
