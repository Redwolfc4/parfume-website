import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Heart, Minus, Plus, Star, Truck, RotateCcw, Shield } from 'lucide-react';
import { useState } from 'react';
import { useProduct, useProducts } from '@/hooks/useProducts';
import { useCartStore, useWishlistStore } from '@/lib/store';
import ProductCard from '@/components/product/ProductCard';

export default function ProductDetailPage() {
    const { id } = useParams<{ id: string }>();
    const { data: product, isLoading } = useProduct(id || '');
    const { data: allProducts } = useProducts();
    const addItem = useCartStore((s) => s.addItem);
    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
    const [quantity, setQuantity] = useState(1);

    const formatPrice = (price: number) =>
        new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

    if (isLoading) {
        return (
            <div className="min-h-screen py-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="aspect-square bg-aura-black-light rounded-2xl animate-shimmer" />
                        <div className="space-y-4">
                            <div className="h-4 bg-aura-black-light rounded w-1/4 animate-shimmer" />
                            <div className="h-8 bg-aura-black-light rounded w-3/4 animate-shimmer" />
                            <div className="h-6 bg-aura-black-light rounded w-1/3 animate-shimmer" />
                            <div className="h-24 bg-aura-black-light rounded animate-shimmer" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-aura-gray text-lg mb-4">Produk tidak ditemukan</p>
                    <Link to="/produk" className="text-aura-gold hover:underline">Kembali ke koleksi</Link>
                </div>
            </div>
        );
    }

    const wishlisted = isInWishlist(product.id);
    const related = allProducts?.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 4) || [];

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Breadcrumb */}
                <Link to="/produk" className="inline-flex items-center gap-2 text-aura-gray hover:text-aura-gold text-sm mb-8 transition-colors">
                    <ArrowLeft size={16} /> Kembali ke Koleksi
                </Link>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Image */}
                    <div className="relative">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-aura-black-light border border-aura-gold/10">
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                        {product.gallery.length > 0 && (
                            <div className="flex gap-3 mt-4">
                                {product.gallery.slice(0, 4).map((img, i) => (
                                    <div key={i} className="w-20 h-20 rounded-xl overflow-hidden border border-aura-gold/10 cursor-pointer hover:border-aura-gold/40 transition-colors">
                                        <img src={img} alt="" className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Details */}
                    <div>
                        <p className="text-aura-gold text-sm tracking-[0.2em] uppercase mb-2">{product.category}</p>
                        <h1 className="font-serif text-3xl md:text-4xl font-bold text-aura-white mb-3">{product.name}</h1>

                        <div className="flex items-center gap-3 mb-6">
                            <div className="flex gap-0.5">
                                {[1, 2, 3, 4, 5].map((s) => (
                                    <Star key={s} size={16} className="text-aura-gold" fill="currentColor" />
                                ))}
                            </div>
                            <span className="text-aura-gray text-sm">(128 ulasan)</span>
                        </div>

                        <p className="text-3xl font-bold text-gradient-gold mb-6">{formatPrice(product.price)}</p>

                        <p className="text-aura-gray leading-relaxed mb-8">{product.description}</p>

                        {product.volume && (
                            <div className="mb-6">
                                <p className="text-aura-white text-sm font-medium mb-2">Volume</p>
                                <span className="inline-block px-4 py-2 border border-aura-gold/30 rounded-xl text-aura-gold text-sm">{product.volume}</span>
                            </div>
                        )}

                        {/* Quantity */}
                        <div className="mb-8">
                            <p className="text-aura-white text-sm font-medium mb-3">Jumlah</p>
                            <div className="inline-flex items-center border border-aura-gold/20 rounded-xl overflow-hidden">
                                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-3 text-aura-gray hover:text-aura-gold hover:bg-aura-gold/10 transition-colors">
                                    <Minus size={16} />
                                </button>
                                <span className="px-6 text-aura-white font-medium">{quantity}</span>
                                <button onClick={() => setQuantity(quantity + 1)} className="p-3 text-aura-gray hover:text-aura-gold hover:bg-aura-gold/10 transition-colors">
                                    <Plus size={16} />
                                </button>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="flex gap-3 mb-8">
                            <button
                                onClick={() => addItem(product, quantity)}
                                className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold py-4 rounded-xl text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(212,168,83,0.3)] transition-all duration-300"
                            >
                                <ShoppingBag size={18} /> Tambah ke Keranjang
                            </button>
                            <button
                                onClick={() => wishlisted ? removeFromWishlist(product.id) : addToWishlist(product.id)}
                                className={`w-14 rounded-xl border flex items-center justify-center transition-all duration-300 ${wishlisted ? 'bg-aura-gold border-aura-gold text-aura-black' : 'border-aura-gold/30 text-aura-gold hover:bg-aura-gold/10'
                                    }`}
                            >
                                <Heart size={20} fill={wishlisted ? 'currentColor' : 'none'} />
                            </button>
                        </div>

                        {/* Trust badges */}
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { icon: Truck, label: 'Gratis Ongkir' },
                                { icon: RotateCcw, label: 'Garansi 7 Hari' },
                                { icon: Shield, label: 'Original 100%' },
                            ].map((item) => (
                                <div key={item.label} className="flex flex-col items-center gap-1.5 text-center">
                                    <item.icon size={20} className="text-aura-gold" />
                                    <span className="text-aura-gray text-xs">{item.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Related */}
                {related.length > 0 && (
                    <div className="mt-24">
                        <h2 className="font-serif text-2xl md:text-3xl font-bold text-aura-white mb-8">
                            Produk <span className="text-gradient-gold">Serupa</span>
                        </h2>
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {related.map((p) => <ProductCard key={p.id} product={p} />)}
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
