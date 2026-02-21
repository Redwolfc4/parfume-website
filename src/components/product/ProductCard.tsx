import { Link } from 'react-router-dom';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import type { Product } from '@/types';
import { useCartStore, useWishlistStore } from '@/lib/store';

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    const addItem = useCartStore((s) => s.addItem);
    const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlistStore();
    const wishlisted = isInWishlist(product.id);

    const formatPrice = (price: number) =>
        new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

    return (
        <div className="group relative bg-aura-black-light border border-aura-gold/10 rounded-2xl overflow-hidden hover-glow transition-all duration-500">
            {/* Image */}
            <Link to={`/produk/${product.id}`} className="block relative aspect-square overflow-hidden">
                <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-aura-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {product.featured && (
                    <span className="absolute top-3 left-3 bg-aura-gold text-aura-black text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                        <Star size={12} /> Best Seller
                    </span>
                )}
            </Link>

            {/* Wishlist */}
            <button
                onClick={() => wishlisted ? removeFromWishlist(product.id) : addToWishlist(product.id)}
                className={`absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${wishlisted
                    ? 'bg-aura-gold text-aura-black'
                    : 'bg-aura-black/60 backdrop-blur-sm text-aura-white/80 hover:bg-aura-gold hover:text-aura-black'
                    }`}
            >
                <Heart size={16} fill={wishlisted ? 'currentColor' : 'none'} />
            </button>

            {/* Info */}
            <div className="p-4">
                <Link to={`/produk/${product.id}`}>
                    <p className="text-aura-gray text-xs tracking-wider uppercase mb-1">{product.category}</p>
                    <h3 className="font-serif text-lg text-aura-white group-hover:text-aura-gold transition-colors duration-300 line-clamp-1">
                        {product.name}
                    </h3>
                    <p className="text-aura-gray text-sm mt-1 line-clamp-2">{product.shortDescription}</p>
                </Link>

                <div className="flex items-center justify-between mt-4">
                    <span className="text-aura-gold font-semibold">{formatPrice(product.price)}</span>
                    <button
                        onClick={() => addItem(product)}
                        className="w-10 h-10 rounded-full border border-aura-gold/30 flex items-center justify-center text-aura-gold hover:bg-aura-gold hover:text-aura-black transition-all duration-300"
                        aria-label="Tambah ke keranjang"
                    >
                        <ShoppingBag size={16} />
                    </button>
                </div>
            </div>
        </div>
    );
}
