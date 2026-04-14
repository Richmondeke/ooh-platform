import React from 'react';

const RouteCheckout: React.FC = () => {
    return (
        <div className="bg-surface text-on-surface min-h-screen font-body pb-20">
            <main className="max-w-7xl mx-auto px-4 md:px-8 py-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    {/* Left Column: Checkout Forms */}
                    <div className="lg:col-span-8 space-y-6">
                        <div className="mb-8">
                            <h1 className="text-3xl font-extrabold tracking-tight text-primary mb-2">Secure Checkout</h1>
                            <div className="flex items-center gap-4">
                                <div className="flex items-center gap-2 text-secondary font-semibold">
                                    <span className="w-6 h-6 rounded-full bg-secondary text-white flex items-center justify-center text-xs">1</span>
                                    <span>Review</span>
                                </div>
                                <div className="h-[2px] w-8 bg-secondary"></div>
                                <div className="flex items-center gap-2 text-primary font-bold">
                                    <span className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center text-xs">2</span>
                                    <span>Payment</span>
                                </div>
                                <div className="h-[1px] w-8 bg-outline-variant"></div>
                                <div className="flex items-center gap-2 text-on-surface-variant font-medium">
                                    <span className="w-6 h-6 rounded-full bg-surface-container-high flex items-center justify-center text-xs">3</span>
                                    <span>Confirm</span>
                                </div>
                            </div>
                        </div>

                        {/* Billing Information Section */}
                        <section className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-primary">contact_mail</span>
                                <h2 className="text-xl font-bold tracking-tight">Billing Information</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Full Name</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="Johnathan Doe" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Email Address</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="j.doe@company.com" type="email" />
                                </div>
                                <div className="md:col-span-2 space-y-2">
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Billing Address</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="123 Precision Way, Suite 500" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">City</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="San Francisco" type="text" />
                                </div>
                                <div className="grid grid-cols-2 gap-4 text-on-surface">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">State</label>
                                        <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="CA" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Zip</label>
                                        <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="94103" type="text" />
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Payment Method Section */}
                        <section className="bg-surface-container-lowest rounded-2xl p-6 md:p-8 shadow-sm">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                                <h2 className="text-xl font-bold tracking-tight">Payment Method</h2>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                                <div className="cursor-pointer border-2 border-primary bg-primary/5 rounded-2xl p-4 flex flex-col gap-3 transition-all ring-primary ring-opacity-10 scale-[1.02]">
                                    <div className="flex justify-between items-start">
                                        <span className="material-symbols-outlined text-primary">credit_card</span>
                                        <div className="w-4 h-4 rounded-full border-4 border-primary bg-white"></div>
                                    </div>
                                    <span className="font-bold text-sm">Credit Card</span>
                                </div>
                                <div className="cursor-pointer border-2 border-transparent bg-surface-container-low hover:bg-surface-container-high rounded-2xl p-4 flex flex-col gap-3 transition-all">
                                    <div className="flex justify-between items-start">
                                        <span className="material-symbols-outlined text-on-surface-variant">account_balance</span>
                                        <div className="w-4 h-4 rounded-full border-2 border-outline-variant bg-white"></div>
                                    </div>
                                    <span className="font-bold text-sm">Wire Transfer</span>
                                </div>
                                <div className="cursor-pointer border-2 border-transparent bg-surface-container-low hover:bg-surface-container-high rounded-2xl p-4 flex flex-col gap-3 transition-all">
                                    <div className="flex justify-between items-start">
                                        <span className="material-symbols-outlined text-on-surface-variant">savings</span>
                                        <div className="w-4 h-4 rounded-full border-2 border-outline-variant bg-white"></div>
                                    </div>
                                    <span className="font-bold text-sm">Account Credit</span>
                                </div>
                            </div>

                            {/* Card Details Form */}
                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Cardholder Name</label>
                                    <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="Johnathan Doe" type="text" />
                                </div>
                                <div className="relative">
                                    <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 block">Card Number</label>
                                    <div className="relative">
                                        <input className="w-full bg-surface-container-low border-none rounded-xl pl-12 pr-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="**** **** **** 4242" type="text" />
                                        <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">lock</span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">Expiry Date</label>
                                        <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="MM/YY" type="text" />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider">CVC</label>
                                        <input className="w-full bg-surface-container-low border-none rounded-xl px-4 py-3 focus:ring-2 focus:ring-primary/20 transition-all text-on-surface" placeholder="123" type="text" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column: Order Summary */}
                    <aside className="lg:col-span-4 sticky top-10">
                        <div className="bg-primary text-white rounded-3xl overflow-hidden shadow-2xl flex flex-col">
                            <div className="p-8 pb-4">
                                <h3 className="text-xl font-bold tracking-tight mb-6">Order Summary</h3>
                                <div className="space-y-4">
                                    <div className="bg-white/10 rounded-2xl p-5 backdrop-blur-sm border border-white/5">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="material-symbols-outlined text-secondary-container">route</span>
                                            <span className="font-bold">Pacific Highway</span>
                                        </div>
                                        <div className="flex justify-between text-xs text-on-primary-container">
                                            <span>Inventory Assets</span>
                                            <span className="font-bold text-white">12 Assets</span>
                                        </div>
                                    </div>

                                    <div className="h-40 w-full rounded-2xl relative overflow-hidden bg-slate-800">
                                        <img className="w-full h-full object-cover grayscale brightness-50" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=400" alt="Route Map" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-5">
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-secondary-container">Dynamic Inventory View</span>
                                        </div>
                                    </div>

                                    <div className="space-y-3 pt-4 border-t border-white/10 text-on-primary-container">
                                        <div className="flex justify-between text-sm">
                                            <span>Subtotal</span>
                                            <span className="font-medium text-white">$12,450.00</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Platform Fee (2%)</span>
                                            <span className="font-medium text-white">$249.00</span>
                                        </div>
                                        <div className="flex justify-between text-sm">
                                            <span>Tax</span>
                                            <span className="font-medium text-white">$0.00</span>
                                        </div>
                                        <div className="pt-4 flex justify-between items-baseline border-t border-white/10">
                                            <span className="font-bold">Total Cost</span>
                                            <span className="text-3xl font-black text-white">$12,699.00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="p-8 bg-white/5 border-t border-white/10">
                                <button className="w-full bg-secondary text-white py-4 rounded-2xl font-black text-lg flex items-center justify-center gap-2 shadow-xl hover:brightness-110 active:scale-95 transition-all group">
                                    Complete Purchase
                                    <span className="material-symbols-outlined translate-y-[1px] group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>
                                <p className="text-[10px] text-center mt-4 text-on-primary-container/60 uppercase tracking-widest font-bold">Secure Checkout by Precision Media</p>
                            </div>
                        </div>
                    </aside>
                </div>
            </main>
        </div>
    );
};

export default RouteCheckout;
