import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from 'lucide-react';

const footerLinks = {
    'Navigasi': [
        { label: 'Beranda', path: '/' },
        { label: 'Produk', path: '/produk' },
        { label: 'Tentang Kami', path: '/tentang' },
        { label: 'Kontak', path: '/kontak' },
    ],
    'Layanan': [
        { label: 'Keranjang', path: '/keranjang' },
        { label: 'Wishlist', path: '/wishlist' },
        { label: 'Pesanan Saya', path: '/pesanan' },
        { label: 'Bantuan', path: '/bantuan' },
    ],
    'Legal': [
        { label: 'Syarat & Ketentuan', path: '/syarat-ketentuan' },
        { label: 'Kebijakan Privasi', path: '/kebijakan-privasi' },
        { label: 'Disclaimer', path: '/disclaimer' },
    ],
};

export default function Footer() {
    return (
        <footer className="bg-aura-black-light border-t border-aura-gold/10">
            {/* Newsletter */}
            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center mb-12">
                    <h3 className="font-serif text-2xl md:text-3xl text-gradient-gold mb-3">
                        Dapatkan Penawaran Eksklusif
                    </h3>
                    <p className="text-aura-gray text-sm max-w-md mx-auto">
                        Bergabunglah dengan komunitas Aura dan nikmati akses awal ke koleksi terbaru serta promo spesial.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-6">
                        <input
                            type="email"
                            placeholder="Masukkan email Anda"
                            className="flex-1 bg-aura-black-lighter border border-aura-gold/20 rounded-full px-5 py-3 text-sm text-aura-white placeholder:text-aura-gray focus:outline-none focus:border-aura-gold/50 transition-colors"
                        />
                        <button className="bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold px-6 py-3 rounded-full text-sm hover:shadow-[0_0_20px_rgba(212,168,83,0.3)] transition-all duration-300">
                            Berlangganan
                        </button>
                    </div>
                </div>

                {/* Links */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-12 border-b border-aura-gold/10">
                    {/* Brand */}
                    <div className="col-span-2 md:col-span-1">
                        <Link to="/" className="inline-flex items-center gap-2 mb-4">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-aura-gold to-aura-gold-dark flex items-center justify-center text-aura-black font-serif font-bold text-sm">
                                A
                            </div>
                            <span className="font-serif font-bold tracking-wider text-gradient-gold">AURA</span>
                        </Link>
                        <p className="text-aura-gray text-sm leading-relaxed mb-4">
                            Setiap tetes Aura Parfume menyimpan cerita. Temukan aroma yang berbicara tentang siapa Anda.
                        </p>
                        <div className="flex gap-3">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="w-9 h-9 rounded-full border border-aura-gold/20 flex items-center justify-center text-aura-gray hover:text-aura-gold hover:border-aura-gold/50 transition-all duration-300"
                                >
                                    <Icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link Columns */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title}>
                            <h4 className="text-aura-gold text-sm font-semibold tracking-wider uppercase mb-4">
                                {title}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.path}>
                                        <Link
                                            to={link.path}
                                            className="text-aura-gray text-sm hover:text-aura-gold transition-colors duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Contact & Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8">
                    <div className="flex flex-wrap items-center justify-center gap-6 text-aura-gray text-xs">
                        <span className="flex items-center gap-1.5">
                            <MapPin size={14} className="text-aura-gold" /> Jakarta, Indonesia
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Phone size={14} className="text-aura-gold" /> +62 812 3456 7890
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Mail size={14} className="text-aura-gold" /> hello@auraparfume.id
                        </span>
                    </div>
                    <p className="text-aura-gray/60 text-xs">
                        &copy; {new Date().getFullYear()} Aura Parfume. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
