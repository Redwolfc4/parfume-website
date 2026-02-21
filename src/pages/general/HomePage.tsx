import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Shield, Droplets, Award } from 'lucide-react';
import { useFeaturedProducts } from '@/hooks/useProducts';
import ProductCard from '@/components/product/ProductCard';

export default function HomePage() {
    const { data: featured, isLoading } = useFeaturedProducts();

    return (
        <div className="overflow-hidden">
            {/* ═══════════════ HERO SECTION ═══════════════ */}
            <section className="relative min-h-screen flex items-center justify-center">
                {/* Background */}
                <div className="absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-aura-black via-aura-black-light to-aura-black" />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-aura-gold/5 blur-3xl" />
                    <div className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-aura-gold/3 blur-3xl" />
                    {/* Subtle grid pattern */}
                    <div
                        className="absolute inset-0 opacity-[0.03]"
                        style={{
                            backgroundImage: 'linear-gradient(rgba(212,168,83,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.3) 1px, transparent 1px)',
                            backgroundSize: '60px 60px',
                        }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-fade-in-up">
                        <p className="inline-flex items-center gap-2 text-aura-gold text-sm tracking-[0.3em] uppercase mb-6 border border-aura-gold/20 rounded-full px-5 py-2">
                            <Sparkles size={14} />
                            KOLEKSI EKSKLUSIF 2025
                        </p>
                    </div>

                    <h1
                        className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6 animate-fade-in-up"
                        style={{ animationDelay: '0.15s' }}
                    >
                        <span className="text-aura-white">Temukan</span>
                        <br />
                        <span className="text-gradient-gold">Aura Sejati Anda</span>
                    </h1>

                    <p
                        className="text-aura-gray text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
                        style={{ animationDelay: '0.3s' }}
                    >
                        Setiap orang memiliki karakter unik. Kami menciptakan parfum yang tidak sekadar harum,
                        tetapi <span className="text-aura-gold">berbicara tentang siapa Anda</span>.
                        Temukan aroma yang menjadi perpanjangan jiwa Anda.
                    </p>

                    <div
                        className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
                        style={{ animationDelay: '0.45s' }}
                    >
                        <Link
                            to="/produk"
                            className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold px-8 py-4 rounded-full text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(212,168,83,0.4)] transition-all duration-500"
                        >
                            Jelajahi Koleksi
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/tentang"
                            className="inline-flex items-center justify-center gap-2 border border-aura-gold/30 text-aura-gold px-8 py-4 rounded-full text-sm tracking-wider uppercase hover:bg-aura-gold/10 transition-all duration-300"
                        >
                            Kisah Kami
                        </Link>
                    </div>

                    {/* Stats */}
                    <div
                        className="grid grid-cols-3 gap-4 max-w-lg mx-auto mt-16 animate-fade-in-up"
                        style={{ animationDelay: '0.6s' }}
                    >
                        {[
                            { value: '50+', label: 'Varian Aroma' },
                            { value: '10K+', label: 'Pelanggan Setia' },
                            { value: '4.9', label: 'Rating Pelanggan' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-center">
                                <p className="text-2xl md:text-3xl font-serif font-bold text-gradient-gold">{stat.value}</p>
                                <p className="text-aura-gray text-xs mt-1">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
                    <div className="w-6 h-10 rounded-full border-2 border-aura-gold/30 flex items-start justify-center p-1.5">
                        <div className="w-1.5 h-3 rounded-full bg-aura-gold/60 animate-bounce" />
                    </div>
                </div>
            </section>

            {/* ═══════════════ WHY US ═══════════════ */}
            <section className="py-24 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <p className="text-aura-gold text-sm tracking-[0.25em] uppercase mb-3">Mengapa Memilih Kami</p>
                        <h2 className="font-serif text-3xl md:text-5xl font-bold text-aura-white">
                            Lebih Dari Sekadar <span className="text-gradient-gold">Wewangian</span>
                        </h2>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: Droplets,
                                title: 'Bahan Premium',
                                desc: 'Menggunakan essential oil pilihan dari seluruh dunia untuk menciptakan aroma yang autentik dan tahan lama.',
                            },
                            {
                                icon: Sparkles,
                                title: 'Unik & Berkarakter',
                                desc: 'Setiap parfum dirancang untuk mencerminkan kepribadian pemakainya. Bukan sekadar harum, tapi bercerita.',
                            },
                            {
                                icon: Shield,
                                title: 'Aman & Teruji',
                                desc: 'Semua produk telah melewati uji dermatologi dan bersertifikat BPOM untuk keamanan kulit Anda.',
                            },
                            {
                                icon: Award,
                                title: 'Penghargaan',
                                desc: 'Diakui sebagai salah satu brand parfum lokal terbaik dengan standar internasional.',
                            },
                        ].map((item) => (
                            <div
                                key={item.title}
                                className="group relative bg-aura-black-light border border-aura-gold/10 rounded-2xl p-6 hover:border-aura-gold/30 hover-glow transition-all duration-500"
                            >
                                <div className="w-12 h-12 rounded-xl bg-aura-gold-muted flex items-center justify-center mb-4 group-hover:bg-aura-gold/20 transition-colors">
                                    <item.icon size={24} className="text-aura-gold" />
                                </div>
                                <h3 className="font-serif text-lg text-aura-white mb-2">{item.title}</h3>
                                <p className="text-aura-gray text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ═══════════════ FEATURED PRODUCTS ═══════════════ */}
            <section className="py-24 px-4 bg-aura-black-light/50">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12">
                        <div>
                            <p className="text-aura-gold text-sm tracking-[0.25em] uppercase mb-3">Koleksi Pilihan</p>
                            <h2 className="font-serif text-3xl md:text-5xl font-bold text-aura-white">
                                Aroma <span className="text-gradient-gold">Terpopuler</span>
                            </h2>
                        </div>
                        <Link
                            to="/produk"
                            className="group flex items-center gap-2 text-aura-gold text-sm tracking-wider uppercase mt-4 sm:mt-0 hover:gap-3 transition-all"
                        >
                            Lihat Semua
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>

                    {isLoading ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="bg-aura-black-light border border-aura-gold/10 rounded-2xl overflow-hidden">
                                    <div className="aspect-square bg-aura-black-lighter animate-shimmer" />
                                    <div className="p-4 space-y-3">
                                        <div className="h-3 bg-aura-black-lighter rounded w-1/3 animate-shimmer" />
                                        <div className="h-5 bg-aura-black-lighter rounded w-2/3 animate-shimmer" />
                                        <div className="h-3 bg-aura-black-lighter rounded w-full animate-shimmer" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : featured && featured.length > 0 ? (
                        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {featured.map((product) => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-16">
                            <p className="text-aura-gray">Belum ada produk unggulan. Nantikan koleksi terbaru kami!</p>
                        </div>
                    )}
                </div>
            </section>

            {/* ═══════════════ CTA SECTION ═══════════════ */}
            <section className="py-24 px-4 relative">
                <div className="absolute inset-0">
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aura-gold/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aura-gold/20 to-transparent" />
                </div>
                <div className="max-w-3xl mx-auto text-center relative">
                    <h2 className="font-serif text-3xl md:text-5xl font-bold text-aura-white mb-6">
                        Siap Menemukan <span className="text-gradient-gold">Karakter Anda</span>?
                    </h2>
                    <p className="text-aura-gray text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        Jangan biarkan orang lain mendefinisikan siapa Anda.
                        Biarkan aroma Anda yang berbicara. Mulai perjalanan aroma Anda sekarang.
                    </p>
                    <Link
                        to="/produk"
                        className="group inline-flex items-center gap-2 bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold px-10 py-4 rounded-full text-sm tracking-wider uppercase hover:shadow-[0_0_30px_rgba(212,168,83,0.4)] transition-all duration-500"
                    >
                        Belanja Sekarang
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                </div>
            </section>
        </div>
    );
}
