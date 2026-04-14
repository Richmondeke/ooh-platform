import React from 'react';
import {
    CreditCard,
    Security,
    Info,
    LocationCity,
    DeleteOutlined,
    ArrowForward,
    AccountBalance,
    ReceiptLong
} from '@mui/icons-material';

const RouteCheckout: React.FC = () => {
    return (
        <div className="p-8 bg-surface-container-low min-h-full">
            <div className="max-w-6xl mx-auto">
                {/* Progress Header */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">1</div>
                        <span className="text-sm font-bold text-primary">Configuration</span>
                    </div>
                    <div className="w-12 h-0.5 bg-outline-variant/30"></div>
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-xs font-bold">2</div>
                        <span className="text-sm font-bold text-primary">Verification</span>
                    </div>
                    <div className="w-12 h-0.5 bg-outline-variant/30"></div>
                    <div className="flex items-center gap-2 text-on-surface-variant opacity-50">
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface-variant flex items-center justify-center text-xs font-bold font-headline">3</div>
                        <span className="text-sm font-medium">Activation</span>
                    </div>
                </div>

                <div className="grid grid-cols-12 gap-10">
                    {/* Order Summary & Asset Breakdown */}
                    <div className="col-span-12 lg:col-span-7 space-y-6">
                        <section className="bg-white rounded-3xl p-8 shadow-sm border border-outline-variant/10">
                            <div className="flex justify-between items-center mb-6">
                                <h2 className="text-2xl font-black text-primary font-headline tracking-tighter">Campaign Summary</h2>
                                <span className="bg-secondary/10 text-secondary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">3 Assets Selected</span>
                            </div>

                            <div className="space-y-4">
                                <CheckoutAssetItem
                                    name="Sunset Plaza Digital Mega"
                                    location="West Hollywood, CA"
                                    details="4-Week Cycle • 10s Spot"
                                    price="$12,450"
                                    image="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=200"
                                />
                                <CheckoutAssetItem
                                    name="Santa Monica Fwy Wallscape"
                                    location="Los Angeles, CA"
                                    details="Standard Static • 14x48"
                                    price="$8,200"
                                    image="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&q=80&w=200"
                                />
                                <CheckoutAssetItem
                                    name="Wilshire Blvd Transit"
                                    location="Mid-City, LA"
                                    details="Digital Kiosk Network"
                                    price="$3,500"
                                    image="https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&q=80&w=200"
                                />
                            </div>

                            <div className="mt-8 pt-8 border-t border-outline-variant/10 flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Promotion Code</p>
                                    <div className="flex gap-2 mt-2">
                                        <input className="bg-surface-container-low border-none rounded-lg px-4 py-2 text-sm focus:ring-1 focus:ring-primary/20 w-48" placeholder="Enter code..." />
                                        <button className="bg-primary-container text-on-primary-container px-4 py-2 rounded-lg text-xs font-bold">Apply</button>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">Campaign Subtotal</p>
                                    <p className="text-3xl font-black text-primary font-headline tracking-tighter mt-1">$24,150.00</p>
                                </div>
                            </div>
                        </section>

                        <section className="bg-primary/5 rounded-3xl p-8 border border-primary/10">
                            <div className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-primary shadow-sm">
                                    <Security />
                                </div>
                                <div>
                                    <h3 className="font-bold text-on-surface">Precision Guarantee</h3>
                                    <p className="text-sm text-on-surface-variant mt-1">Every campaign on Horizon is backed by our verification engine. If your assets don't achieve 90% guaranteed delivery, we credit the difference immediately.</p>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Payment & Finalization */}
                    <div className="col-span-12 lg:col-span-5 space-y-6">
                        <section className="bg-white rounded-3xl p-8 shadow-sm border border-outline-variant/10">
                            <h3 className="text-xl font-bold text-primary mb-6 font-headline tracking-tight">Payment Method</h3>

                            <div className="space-y-3 mb-8">
                                <PaymentOption icon={<CreditCard />} label="Corporate Credit Card" active last4="4242" />
                                <PaymentOption icon={<AccountBalance />} label="Direct Bank Transfer (ACH)" last4="8819" />
                                <PaymentOption icon={<ReceiptLong />} label="Net-30 Invoicing" description="Available for verified partners" disabled />
                            </div>

                            <div className="space-y-4 mb-8">
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-on-surface-variant font-medium">Production & Installation</span>
                                    <span className="font-bold text-on-surface">$1,200.00</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-on-surface-variant font-medium">Network Service Fee (5%)</span>
                                    <span className="font-bold text-on-surface">$1,207.50</span>
                                </div>
                                <div className="flex justify-between items-center text-sm">
                                    <span className="text-on-surface-variant font-medium">Eco-Offset Carbon Credit</span>
                                    <span className="font-bold text-secondary">Free</span>
                                </div>
                                <div className="h-px bg-outline-variant/10 my-4"></div>
                                <div className="flex justify-between items-end">
                                    <span className="text-sm font-black text-primary uppercase tracking-widest">Grand Total</span>
                                    <span className="text-4xl font-black text-primary font-headline tracking-tighter">$26,557.50</span>
                                </div>
                            </div>

                            <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-base shadow-2xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                                Finalize & Buy Inventory
                                <ArrowForward />
                            </button>

                            <p className="text-center text-[10px] text-on-surface-variant mt-6 leading-relaxed">
                                By clicking "Finalize", you agree to the Horizon OOH Terms of Service and Privacy Policy. Assets are reserved for 15 minutes.
                            </p>
                        </section>

                        <section className="bg-white rounded-3xl p-6 shadow-sm border border-outline-variant/10 flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                                <Info className="!text-sm" />
                            </div>
                            <div>
                                <p className="text-xs font-bold text-on-surface">Next Step: Creative Upload</p>
                                <p className="text-[10px] text-on-surface-variant">After payment, you'll be redirected to upload your media files for technical approval.</p>
                            </div>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    );
};

const CheckoutAssetItem: React.FC<{ name: string; location: string; details: string; price: string; image: string }> = ({ name, location, details, price, image }) => (
    <div className="flex items-center gap-4 p-4 rounded-2xl bg-surface-container-low/30 group">
        <div className="w-20 h-20 rounded-xl overflow-hidden shadow-sm">
            <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="flex-1">
            <div className="flex justify-between items-start">
                <div>
                    <h4 className="font-bold text-on-surface text-sm">{name}</h4>
                    <p className="text-[11px] text-on-surface-variant flex items-center gap-1">
                        <LocationCity className="!text-[10px]" /> {location}
                    </p>
                </div>
                <button className="text-on-surface-variant hover:text-error transition-colors">
                    <DeleteOutlined className="!text-sm" />
                </button>
            </div>
            <div className="flex justify-between items-end mt-2">
                <p className="text-[10px] font-medium text-on-surface-variant opacity-70 italic">{details}</p>
                <p className="text-sm font-black text-primary font-headline">{price}</p>
            </div>
        </div>
    </div>
);

const PaymentOption: React.FC<{ icon: React.ReactNode; label: string; last4?: string; description?: string; active?: boolean; disabled?: boolean }> = ({ icon, label, last4, description, active, disabled }) => (
    <div className={`p-4 rounded-2xl border-2 flex items-center gap-4 transition-all ${disabled ? 'opacity-40 cursor-not-allowed border-outline-variant/10' : active ? 'border-primary bg-primary/5 cursor-pointer' : 'border-outline-variant/10 hover:border-primary/30 cursor-pointer'}`}>
        <div className={`p-2 rounded-xl ${active ? 'bg-primary text-white' : 'bg-surface-container-low text-on-surface-variant'}`}>
            {icon}
        </div>
        <div className="flex-1">
            <div className="flex justify-between items-center">
                <p className="text-xs font-bold text-on-surface">{label}</p>
                {last4 && <p className="text-[10px] font-medium text-on-surface-variant">•••• {last4}</p>}
            </div>
            {description && <p className="text-[10px] text-on-surface-variant mt-0.5">{description}</p>}
        </div>
        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${active ? 'border-primary' : 'border-outline-variant/30'}`}>
            {active && <div className="w-2 h-2 rounded-full bg-primary"></div>}
        </div>
    </div>
);

export default RouteCheckout;
