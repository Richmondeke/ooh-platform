import React from 'react';
import {
    Settings,
    Notifications,
    Security,
    CreditCard,
    Business,
    Edit,
    Verified
} from '@mui/icons-material';

const Profile: React.FC = () => {
    return (
        <div className="p-8 bg-surface-container-low min-h-full">
            <div className="max-w-4xl mx-auto">
                {/* Profile Header */}
                <div className="bg-white rounded-[2.5rem] p-10 shadow-premium border border-outline-variant/10 mb-8 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                    <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                        <div className="relative group">
                            <div className="w-32 h-32 rounded-3xl bg-primary-container flex items-center justify-center text-primary text-4xl font-black shadow-inner overflow-hidden border-4 border-white">
                                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Profile" className="w-full h-full object-cover" />
                            </div>
                            <button className="absolute -bottom-2 -right-2 bg-white p-2 rounded-xl shadow-lg text-primary hover:scale-110 transition-transform border border-outline-variant/10">
                                <Edit className="!text-sm" />
                            </button>
                        </div>

                        <div className="text-center md:text-left flex-1">
                            <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                                <h1 className="text-3xl font-black text-primary font-headline tracking-tighter">David Richmond</h1>
                                <Verified className="text-secondary !text-xl" />
                            </div>
                            <p className="text-on-surface-variant font-medium">Head of Campaign Strategy • Global Advertising Partners</p>
                            <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-4">
                                <div className="flex items-center gap-1.5 text-xs font-bold text-on-surface-variant bg-surface-container px-3 py-1.5 rounded-full">
                                    <Business className="!text-xs" /> Corporate Account
                                </div>
                                <div className="flex items-center gap-1.5 text-xs font-bold text-secondary bg-secondary/10 px-3 py-1.5 rounded-full">
                                    Precision Tier
                                </div>
                            </div>
                        </div>

                        <div className="flex gap-3">
                            <button className="bg-primary text-white px-6 py-3 rounded-2xl font-black text-sm shadow-xl hover:bg-primary-container transition-all">
                                Edit Profile
                            </button>
                        </div>
                    </div>
                </div>

                {/* Settings Grid */}
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-8 space-y-6">
                        <section className="bg-white rounded-3xl p-8 border border-outline-variant/10 shadow-sm">
                            <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                                <Settings className="!text-xl" /> Account Settings
                            </h3>
                            <div className="space-y-4">
                                <SettingRow label="Email Address" value="david@globalads.com" />
                                <SettingRow label="Language" value="English (United States)" />
                                <SettingRow label="Timezone" value="Pacific Standard Time (PST)" />
                            </div>
                        </section>

                        <section className="bg-white rounded-3xl p-8 border border-outline-variant/10 shadow-sm">
                            <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                                <Security className="!text-xl" /> Security & Privacy
                            </h3>
                            <div className="space-y-4">
                                <SettingToggle label="Two-Factor Authentication" active />
                                <SettingToggle label="Biometric Sign-in" active />
                                <SettingRow label="Last Password Change" value="45 days ago" clickable />
                            </div>
                        </section>
                    </div>

                    <div className="col-span-12 md:col-span-4 space-y-6">
                        <section className="bg-white rounded-3xl p-8 border border-outline-variant/10 shadow-sm">
                            <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                                <CreditCard className="!text-xl" /> Billing
                            </h3>
                            <div className="p-4 bg-primary/5 rounded-2xl border border-primary/10 mb-4">
                                <p className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">Current Plan</p>
                                <p className="text-lg font-black text-primary font-headline italic">Precision Enterprise</p>
                            </div>
                            <button className="w-full py-3 text-xs font-bold text-on-surface-variant hover:bg-surface-container-low rounded-xl transition-all border border-outline-variant/10">
                                Manage Subscriptions
                            </button>
                        </section>

                        <section className="bg-white rounded-3xl p-8 border border-outline-variant/10 shadow-sm">
                            <h3 className="text-lg font-bold text-primary mb-6 flex items-center gap-2">
                                <Notifications className="!text-xl" /> Notifications
                            </h3>
                            <div className="space-y-4">
                                <SettingToggle label="Campaign Alerts" active />
                                <SettingToggle label="Budget Warnings" active />
                                <SettingToggle label="Weekly Reports" />
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

const SettingRow: React.FC<{ label: string; value: string; clickable?: boolean }> = ({ label, value, clickable }) => (
    <div className={`flex items-center justify-between p-4 rounded-2xl bg-surface-container-low/30 border border-transparent transition-all ${clickable ? 'hover:border-primary/20 cursor-pointer' : ''}`}>
        <span className="text-xs font-medium text-on-surface-variant">{label}</span>
        <span className="text-xs font-black text-on-surface">{value}</span>
    </div>
);

const SettingToggle: React.FC<{ label: string; active?: boolean }> = ({ label, active }) => (
    <div className="flex items-center justify-between p-4 rounded-2xl bg-surface-container-low/30">
        <span className="text-xs font-medium text-on-surface-variant">{label}</span>
        <div className={`w-10 h-6 rounded-full relative transition-colors ${active ? 'bg-secondary' : 'bg-surface-container-highest'}`}>
            <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${active ? 'right-1' : 'left-1'}`}></div>
        </div>
    </div>
);

export default Profile;
