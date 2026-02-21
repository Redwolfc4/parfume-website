import { useState, useMemo } from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { useProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/product/ProductCard';

export default function ProductsPage() {
    const { data: products, isLoading } = useProducts();
    const [search, setSearch] = useState('');
    const [category, setCategory] = useState('all');
    const [sort, setSort] = useState('name');

    const categories = useMemo(() => {
        if (!products) return [];
        const cats = [...new Set(products.map((p) => p.category))];
        return cats;
    }, [products]);

    const filtered = useMemo(() => {
        if (!products) return [];
        let res = products;
        if (search) res = res.filter((p) => p.name.toLowerCase().includes(search.toLowerCase()));
        if (category !== 'all') res = res.filter((p) => p.category === category);
        if (sort === 'price-asc') res = [...res].sort((a, b) => a.price - b.price);
        else if (sort === 'price-desc') res = [...res].sort((a, b) => b.price - a.price);
        else res = [...res].sort((a, b) => a.name.localeCompare(b.name));
        return res;
    }, [products, search, category, sort]);

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <p className="text-aura-gold text-sm tracking-[0.25em] uppercase mb-3">Koleksi Kami</p>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-aura-white">
                        Temukan Parfum <span className="text-gradient-gold">Sempurna</span>
                    </h1>
                    <p className="text-aura-gray mt-4 max-w-lg mx-auto">
                        Jelajahi seluruh koleksi Aura Parfume. Setiap botol menyimpan karakter yang berbeda.
                    </p>
                </div>

                {/* Filters */}
                <div className="glass rounded-2xl p-4 mb-8 flex flex-col md:flex-row gap-4 items-center">
                    <div className="relative flex-1 w-full">
                        <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-aura-gray" />
                        <input
                            type="text"
                            placeholder="Cari parfum..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 pl-12 pr-4 text-sm text-aura-white placeholder:text-aura-gray focus:outline-none focus:border-aura-gold/30 transition-colors"
                        />
                    </div>
                    <div className="flex gap-3 w-full md:w-auto">
                        <div className="relative flex-1 md:flex-none">
                            <SlidersHorizontal size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-aura-gray pointer-events-none" />
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="w-full md:w-auto bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 pl-10 pr-8 text-sm text-aura-white appearance-none focus:outline-none focus:border-aura-gold/30 cursor-pointer"
                            >
                                <option value="all">Semua Kategori</option>
                                {categories.map((cat) => (
                                    <option key={cat} value={cat}>{cat}</option>
                                ))}
                            </select>
                        </div>
                        <select
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}
                            className="flex-1 md:flex-none bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white appearance-none focus:outline-none focus:border-aura-gold/30 cursor-pointer"
                        >
                            <option value="name">Nama A-Z</option>
                            <option value="price-asc">Harga Terendah</option>
                            <option value="price-desc">Harga Tertinggi</option>
                        </select>
                    </div>
                </div>

                {/* Products Grid */}
                {isLoading ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                            <div key={i} className="bg-aura-black-light border border-aura-gold/10 rounded-2xl overflow-hidden">
                                <div className="aspect-square bg-aura-black-lighter animate-shimmer" />
                                <div className="p-4 space-y-3">
                                    <div className="h-3 bg-aura-black-lighter rounded w-1/3 animate-shimmer" />
                                    <div className="h-5 bg-aura-black-lighter rounded w-2/3 animate-shimmer" />
                                </div>
                            </div>
                        ))}
                    </div>
                ) : filtered.length > 0 ? (
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {filtered.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <p className="text-aura-gray text-lg">Tidak ada produk ditemukan.</p>
                        <button onClick={() => { setSearch(''); setCategory('all'); }} className="text-aura-gold text-sm mt-2 hover:underline">
                            Reset filter
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
