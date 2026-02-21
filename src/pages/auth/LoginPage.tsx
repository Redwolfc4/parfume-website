import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';
import { useAuthStore } from '@/lib/store';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState('');
    const login = useAuthStore((s) => s.login);
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) { setError('Semua bidang harus diisi'); return; }
        login(email, password);
        navigate('/profil');
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4 relative">
            <div className="absolute inset-0">
                <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-aura-gold/5 rounded-full blur-3xl" />
            </div>
            <div className="w-full max-w-md relative">
                <div className="text-center mb-8">
                    <Link to="/" className="inline-block mb-6">
                        <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-aura-gold to-aura-gold-dark flex items-center justify-center text-aura-black font-serif font-bold text-2xl">
                            A
                        </div>
                    </Link>
                    <h1 className="font-serif text-3xl font-bold text-aura-white mb-2">Selamat Datang</h1>
                    <p className="text-aura-gray">Masuk untuk melanjutkan perjalanan aroma Anda</p>
                </div>

                <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                    {error && <p className="text-aura-danger text-sm text-center bg-aura-danger/10 py-2 rounded-lg">{error}</p>}
                    <div>
                        <label className="text-aura-gray text-sm mb-1.5 block">Email</label>
                        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white focus:outline-none focus:border-aura-gold/30 transition-colors" placeholder="email@anda.com" />
                    </div>
                    <div>
                        <label className="text-aura-gray text-sm mb-1.5 block">Kata Sandi</label>
                        <div className="relative">
                            <input type={showPass ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 pr-11 text-sm text-aura-white focus:outline-none focus:border-aura-gold/30 transition-colors" placeholder="••••••••" />
                            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-aura-gray hover:text-aura-gold">
                                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 text-aura-gray cursor-pointer">
                            <input type="checkbox" className="accent-[#d4a853]" /> Ingat saya
                        </label>
                        <Link to="/lupa-password" className="text-aura-gold hover:underline">Lupa kata sandi?</Link>
                    </div>
                    <button type="submit" className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold py-3.5 rounded-xl text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(212,168,83,0.3)] transition-all">
                        Masuk <ArrowRight size={16} />
                    </button>
                    <p className="text-center text-aura-gray text-sm">
                        Belum punya akun? <Link to="/register" className="text-aura-gold hover:underline">Daftar Sekarang</Link>
                    </p>
                </form>
            </div>
        </div>
    );
}
