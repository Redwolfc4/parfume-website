import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Trash2 } from 'lucide-react';
import { useWishlistStore, useCartStore } from '@/lib/store';
import { useProducts } from '@/hooks/useProducts';

export default function WishlistPage() {
    const { items, removeFromWishlist } = useWishlistStore();
    const { data: products } = useProducts();
    const addItem = useCartStore((s) => s.addItem);

    const wishlistProducts = products?.filter((p) => items.some((w) => w.productId === p.id)) || [];

    const formatPrice = (price: number) =>
        new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

    if (wishlistProducts.length === 0) {
        return (
            <div className="min-h-screen flex items-center justify-center px-4">
                <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full bg-aura-gold-muted flex items-center justify-center mb-6">
                        <Heart size={40} className="text-aura-gold" />
                    </div>
                    <h1 className="font-serif text-3xl text-aura-white mb-3">Wishlist Kosong</h1>
                    <p className="text-aura-gray mb-8">Anda belum menyimpan produk favorit. Mulai jelajahi koleksi kami!</p>
                    <Link to="/produk" className="inline-flex items-center gap-2 bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold px-8 py-3 rounded-full text-sm">
                        Jelajahi Produk
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-aura-white mb-8">
                    <span className="text-gradient-gold">Wishlist</span> Saya
                </h1>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {wishlistProducts.map((product) => (
                        <div key={product.id} className="glass rounded-2xl overflow-hidden group">
                            <Link to={`/produk/${product.id}`} className="block aspect-square overflow-hidden">
                                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                            </Link>
                            <div className="p-4">
                                <Link to={`/produk/${product.id}`}>
                                    <h3 className="font-serif text-aura-white group-hover:text-aura-gold transition-colors">{product.name}</h3>
                                </Link>
                                <p className="text-aura-gold font-semibold mt-1">{formatPrice(product.price)}</p>
                                <div className="flex gap-2 mt-3">
                                    <button onClick={() => addItem(product)} className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-medium py-2 rounded-lg text-sm">
                                        <ShoppingBag size={14} /> Beli
                                    </button>
                                    <button onClick={() => removeFromWishlist(product.id)} className="w-10 flex items-center justify-center border border-aura-gold/20 rounded-lg text-aura-gray hover:text-aura-danger transition-colors">
                                        <Trash2 size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
