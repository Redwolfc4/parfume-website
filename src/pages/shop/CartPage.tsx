import { Link } from 'react-router-dom';
import { Trash2, Minus, Plus, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/lib/store';

export default function CartPage() {
    const { items, removeItem, updateQuantity, clearCart, totalPrice } = useCartStore();

    const formatPrice = (price: number) =>
        new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

    if (items.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-aura-gold-muted flex items-center justify-center mb-6">
                        <ShoppingBag size={40} className="text-aura-gold" />
                    </div>
                    <h1 className="font-serif text-3xl text-aura-white mb-3">Keranjang Kosong</h1>
                    <p className="text-aura-gray mb-8">Belum ada produk di keranjang Anda. Mulai belanja sekarang!</p>
                    <Link
                        to="/produk"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold px-8 py-3 rounded-full text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(212,168,83,0.3)] transition-all"
                    >
                        Jelajahi Produk <ArrowRight size={16} />
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="font-serif text-3xl md:text-4xl font-bold text-aura-white">
                        Keranjang <span className="text-gradient-gold">Belanja</span>
                    </h1>
                    <button onClick={clearCart} className="text-aura-gray text-sm hover:text-aura-danger transition-colors">
                        Hapus Semua
                    </button>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Items */}
                    <div className="lg:col-span-2 space-y-4">
                        {items.map((item) => (
                            <div key={item.product.id} className="glass rounded-2xl p-4 flex gap-4">
                                <Link to={`/produk/${item.product.id}`} className="w-24 h-24 rounded-xl overflow-hidden flex-shrink-0">
                                    <img src={item.product.image} alt={item.product.name} className="w-full h-full object-cover" />
                                </Link>
                                <div className="flex-1 min-w-0">
                                    <Link to={`/produk/${item.product.id}`}>
                                        <h3 className="font-serif text-aura-white hover:text-aura-gold transition-colors truncate">{item.product.name}</h3>
                                    </Link>
                                    <p className="text-aura-gray text-sm">{item.product.category}</p>
                                    <div className="flex items-center justify-between mt-3">
                                        <div className="flex items-center border border-aura-gold/20 rounded-lg overflow-hidden">
                                            <button onClick={() => updateQuantity(item.product.id, item.quantity - 1)} className="p-1.5 text-aura-gray hover:text-aura-gold transition-colors">
                                                <Minus size={14} />
                                            </button>
                                            <span className="px-3 text-aura-white text-sm">{item.quantity}</span>
                                            <button onClick={() => updateQuantity(item.product.id, item.quantity + 1)} className="p-1.5 text-aura-gray hover:text-aura-gold transition-colors">
                                                <Plus size={14} />
                                            </button>
                                        </div>
                                        <p className="text-aura-gold font-semibold">{formatPrice(item.product.price * item.quantity)}</p>
                                    </div>
                                </div>
                                <button onClick={() => removeItem(item.product.id)} className="text-aura-gray hover:text-aura-danger transition-colors self-start">
                                    <Trash2 size={18} />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Summary */}
                    <div className="glass rounded-2xl p-6 h-fit sticky top-24">
                        <h2 className="font-serif text-xl text-aura-white mb-6">Ringkasan Pesanan</h2>
                        <div className="space-y-3 mb-6">
                            <div className="flex justify-between text-sm">
                                <span className="text-aura-gray">Subtotal</span>
                                <span className="text-aura-white">{formatPrice(totalPrice())}</span>
                            </div>
                            <div className="flex justify-between text-sm">
                                <span className="text-aura-gray">Ongkos Kirim</span>
                                <span className="text-aura-success text-sm">Gratis</span>
                            </div>
                            <div className="h-px bg-aura-gold/10" />
                            <div className="flex justify-between">
                                <span className="text-aura-white font-medium">Total</span>
                                <span className="text-aura-gold font-bold text-lg">{formatPrice(totalPrice())}</span>
                            </div>
                        </div>
                        <Link
                            to="/checkout"
                            className="block text-center bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold py-3.5 rounded-xl text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(212,168,83,0.3)] transition-all"
                        >
                            Lanjut ke Pembayaran
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
