import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-aura-gold-muted flex items-center justify-center mb-6">
                        <Mail size={28} className="text-aura-gold" />
                    </div>
                    <h1 className="font-serif text-3xl font-bold text-aura-white mb-2">Lupa Kata Sandi</h1>
                    <p className="text-aura-gray text-sm">Masukkan email Anda dan kami akan mengirimkan link untuk mereset kata sandi.</p>
                </div>
                {sent ? (
                    <div className="glass rounded-2xl p-8 text-center">
                        <p className="text-aura-success mb-4">Email berhasil dikirim! Silakan cek kotak masuk Anda.</p>
                        <Link to="/login" className="text-aura-gold hover:underline text-sm">Kembali ke halaman masuk</Link>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                        <div>
                            <label className="text-aura-gray text-sm mb-1.5 block">Email</label>
                            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white focus:outline-none focus:border-aura-gold/30" placeholder="email@anda.com" />
                        </div>
                        <button type="submit" className="w-full bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold py-3.5 rounded-xl text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(212,168,83,0.3)] transition-all">
                            Kirim Link Reset
                        </button>
                        <Link to="/login" className="flex items-center justify-center gap-2 text-aura-gray text-sm hover:text-aura-gold transition-colors">
                            <ArrowLeft size={14} /> Kembali ke halaman masuk
                        </Link>
                    </form>
                )}
            </div>
        </div>
    );
}
