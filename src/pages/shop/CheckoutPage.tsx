import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, CheckCircle } from 'lucide-react';
import { useCartStore } from '@/lib/store';

export default function CheckoutPage() {
    const { items, totalPrice, clearCart } = useCartStore();
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        name: '', phone: '', address: '', city: '', postalCode: '', notes: '',
    });

    const formatPrice = (price: number) =>
        new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

    if (items.length === 0 && step < 3) {
        navigate('/keranjang');
        return null;
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (step === 1) setStep(2);
        else if (step === 2) {
            clearCart();
            setStep(3);
        }
    };

    if (step === 3) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full bg-aura-success/20 flex items-center justify-center mb-6">
                        <CheckCircle size={40} className="text-aura-success" />
                    </div>
                    <h1 className="font-serif text-3xl text-aura-white mb-3">Pesanan Berhasil!</h1>
                    <p className="text-aura-gray mb-8 max-w-md mx-auto">
                        Terima kasih telah berbelanja di Aura Parfume. Pesanan Anda sedang diproses dan akan segera dikirim.
                    </p>
                    <button onClick={() => navigate('/')} className="bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold px-8 py-3 rounded-full text-sm">
                        Kembali ke Beranda
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-aura-white mb-8 text-center">
                    <span className="text-gradient-gold">Checkout</span>
                </h1>

                {/* Steps */}
                <div className="flex items-center justify-center gap-4 mb-12">
                    {[
                        { num: 1, label: 'Pengiriman', icon: Truck },
                        { num: 2, label: 'Pembayaran', icon: CreditCard },
                    ].map((s, i) => (
                        <div key={s.num} className="flex items-center gap-4">
                            <div className={`flex items-center gap-2 ${step >= s.num ? 'text-aura-gold' : 'text-aura-gray'}`}>
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-all ${step >= s.num ? 'border-aura-gold bg-aura-gold/10' : 'border-aura-gray/30'}`}>
                                    <s.icon size={18} />
                                </div>
                                <span className="text-sm font-medium hidden sm:inline">{s.label}</span>
                            </div>
                            {i === 0 && <div className={`w-12 h-0.5 ${step > 1 ? 'bg-aura-gold' : 'bg-aura-gray/30'}`} />}
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="grid lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            {step === 1 && (
                                <div className="glass rounded-2xl p-6 space-y-4">
                                    <h2 className="font-serif text-xl text-aura-white mb-4">Alamat Pengiriman</h2>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-aura-gray text-sm mb-1.5 block">Nama Lengkap</label>
                                            <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white focus:outline-none focus:border-aura-gold/30" />
                                        </div>
                                        <div>
                                            <label className="text-aura-gray text-sm mb-1.5 block">No. Telepon</label>
                                            <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white focus:outline-none focus:border-aura-gold/30" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-aura-gray text-sm mb-1.5 block">Alamat Lengkap</label>
                                        <textarea required rows={3} value={form.address} onChange={(e) => setForm({ ...form, address: e.target.value })} className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white focus:outline-none focus:border-aura-gold/30 resize-none" />
                                    </div>
                                    <div className="grid sm:grid-cols-2 gap-4">
                                        <div>
                                            <label className="text-aura-gray text-sm mb-1.5 block">Kota</label>
                                            <input type="text" required value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white focus:outline-none focus:border-aura-gold/30" />
                                        </div>
                                        <div>
                                            <label className="text-aura-gray text-sm mb-1.5 block">Kode Pos</label>
                                            <input type="text" required value={form.postalCode} onChange={(e) => setForm({ ...form, postalCode: e.target.value })} className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white focus:outline-none focus:border-aura-gold/30" />
                                        </div>
                                    </div>
                                    <div>
                                        <label className="text-aura-gray text-sm mb-1.5 block">Catatan (opsional)</label>
                                        <input type="text" value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white focus:outline-none focus:border-aura-gold/30" placeholder="Petunjuk khusus untuk kurir" />
                                    </div>
                                </div>
                            )}

                            {step === 2 && (
                                <div className="glass rounded-2xl p-6">
                                    <h2 className="font-serif text-xl text-aura-white mb-4">Metode Pembayaran</h2>
                                    <div className="space-y-3">
                                        {['Transfer Bank BCA', 'Transfer Bank Mandiri', 'GoPay / OVO / Dana', 'COD (Bayar di Tempat)'].map((method) => (
                                            <label key={method} className="flex items-center gap-3 p-4 bg-aura-black-lighter border border-aura-gold/10 rounded-xl cursor-pointer hover:border-aura-gold/30 transition-colors">
                                                <input type="radio" name="payment" required className="accent-[#d4a853]" />
                                                <span className="text-aura-white text-sm">{method}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Summary */}
                        <div className="glass rounded-2xl p-6 h-fit sticky top-24">
                            <h3 className="font-serif text-lg text-aura-white mb-4">Pesanan ({items.length} item)</h3>
                            <div className="space-y-3 mb-4">
                                {items.map((item) => (
                                    <div key={item.product.id} className="flex gap-3">
                                        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0">
                                            <img src={item.product.image} alt="" className="w-full h-full object-cover" />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-aura-white text-sm truncate">{item.product.name}</p>
                                            <p className="text-aura-gray text-xs">{item.quantity}x {formatPrice(item.product.price)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="h-px bg-aura-gold/10 my-4" />
                            <div className="flex justify-between mb-4">
                                <span className="text-aura-white font-medium">Total</span>
                                <span className="text-aura-gold font-bold">{formatPrice(totalPrice())}</span>
                            </div>
                            <button type="submit" className="w-full bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold py-3.5 rounded-xl text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(212,168,83,0.3)] transition-all">
                                {step === 1 ? 'Lanjut ke Pembayaran' : 'Bayar Sekarang'}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
