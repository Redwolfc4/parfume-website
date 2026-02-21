import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Menu,
    X,
    ShoppingBag,
    Heart,
    User,

} from 'lucide-react';
import { useCartStore } from '@/lib/store';
import { useUIStore } from '@/lib/store';

const navLinks = [
    { label: 'Beranda', path: '/' },
    { label: 'Produk', path: '/produk' },
    { label: 'Tentang', path: '/tentang' },
    { label: 'Kontak', path: '/kontak' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    const location = useLocation();
    const totalItems = useCartStore((s) => s.totalItems());
    const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useUIStore();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        closeMobileMenu();
    }, [location.pathname, closeMobileMenu]);

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                    ? 'bg-aura-black/95 backdrop-blur-lg shadow-lg shadow-black/20 py-3'
                    : 'bg-transparent py-5'
                    }`}
            >
                <div className="max-w-full
                 mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link to="/" className="flex items-center gap-2 group">
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-aura-gold to-aura-gold-dark flex items-center justify-center text-aura-black font-serif font-bold text-lg group-hover:shadow-[0_0_20px_rgba(212,168,83,0.4)] transition-shadow duration-300">
                                A
                            </div>
                            <span className="text-xl font-serif font-bold tracking-wider">
                                <span className="text-gradient-gold">AURA</span>
                                <span className="text-aura-white/80 text-sm ml-1 tracking-[0.2em]">PARFUME</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.path}
                                    to={link.path}
                                    className={`relative text-sm tracking-wider uppercase transition-colors duration-300 hover:text-aura-gold ${location.pathname === link.path
                                        ? 'text-aura-gold'
                                        : 'text-aura-white/70'
                                        }`}
                                >
                                    {link.label}
                                    {location.pathname === link.path && (
                                        <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-aura-gold to-transparent" />
                                    )}
                                </Link>
                            ))}
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-3">

                            <Link
                                to="/wishlist"
                                className="p-2 text-aura-white/70 hover:text-aura-gold transition-colors"
                                aria-label="Wishlist"
                            >
                                <Heart size={20} />
                            </Link>
                            <Link
                                to="/keranjang"
                                className="p-2 text-aura-white/70 hover:text-aura-gold transition-colors relative"
                                aria-label="Keranjang"
                            >
                                <ShoppingBag size={20} />
                                {totalItems > 0 && (
                                    <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-aura-gold text-aura-black text-xs font-bold rounded-full flex items-center justify-center">
                                        {totalItems}
                                    </span>
                                )}
                            </Link>
                            <Link
                                to="/login"
                                className="p-2 text-aura-white/70 hover:text-aura-gold transition-colors hidden sm:block"
                                aria-label="Akun"
                            >
                                <User size={20} />
                            </Link>
                            <button
                                onClick={toggleMobileMenu}
                                className="p-2 text-aura-white/70 hover:text-aura-gold transition-colors md:hidden"
                                aria-label="Menu"
                            >
                                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                            </button>
                        </div>
                    </div>


                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-aura-black/98 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col items-center justify-center ${isMobileMenuOpen
                    ? 'opacity-100 pointer-events-auto'
                    : 'opacity-0 pointer-events-none'
                    }`}
            >
                <div className="flex flex-col items-center gap-8">
                    {navLinks.map((link, i) => (
                        <Link
                            key={link.path}
                            to={link.path}
                            onClick={closeMobileMenu}
                            className={`text-2xl font-serif tracking-wider transition-all duration-300 ${location.pathname === link.path
                                ? 'text-aura-gold'
                                : 'text-aura-white/70 hover:text-aura-gold'
                                }`}
                            style={{ transitionDelay: `${i * 80}ms` }}
                        >
                            {link.label}
                        </Link>
                    ))}
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-aura-gold/30 to-transparent mt-4" />
                    <Link
                        to="/login"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 text-aura-white/70 hover:text-aura-gold transition-colors"
                    >
                        <User size={20} />
                        <span className="text-sm tracking-wider">MASUK</span>
                    </Link>
                </div>
            </div>
        </>
    );
}
