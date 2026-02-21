import { Link, useRouteError } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function ErrorPage() {
    const error = useRouteError() as { status?: number; statusText?: string; message?: string };
    const status = error?.status || 404;
    const messages: Record<number, { title: string; desc: string }> = {
        404: { title: 'Halaman Tidak Ditemukan', desc: 'Maaf, halaman yang Anda cari tidak ada atau telah dipindahkan.' },
        500: { title: 'Kesalahan Server', desc: 'Terjadi kesalahan pada server kami. Silakan coba lagi nanti.' },
        503: { title: 'Layanan Tidak Tersedia', desc: 'Server sedang dalam pemeliharaan. Silakan kembali beberapa saat lagi.' },
    };
    const msg = messages[status] || messages[404];

    return (
        <div className="min-h-screen bg-aura-black flex items-center justify-center px-4">
            <div className="text-center max-w-md">
                <div className="relative mb-8">
                    <span className="text-[10rem] md:text-[12rem] font-serif font-bold leading-none text-gradient-gold opacity-20">{status}</span>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-32 h-32 rounded-full border-2 border-aura-gold/20 flex items-center justify-center">
                            <span className="font-serif text-5xl font-bold text-gradient-gold">{status}</span>
                        </div>
                    </div>
                </div>
                <h1 className="font-serif text-2xl md:text-3xl font-bold text-aura-white mb-3">{msg.title}</h1>
                <p className="text-aura-gray mb-8">{msg.desc}</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link to="/" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold px-6 py-3 rounded-full text-sm">
                        <Home size={16} /> Ke Beranda
                    </Link>
                    <button onClick={() => window.history.back()} className="inline-flex items-center justify-center gap-2 border border-aura-gold/30 text-aura-gold px-6 py-3 rounded-full text-sm hover:bg-aura-gold/10 transition-all">
                        <ArrowLeft size={16} /> Kembali
                    </button>
                </div>
            </div>
        </div>
    );
}
