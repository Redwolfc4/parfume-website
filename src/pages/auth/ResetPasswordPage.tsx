import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Eye, EyeOff } from 'lucide-react';

export default function ResetPasswordPage() {
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [showPass, setShowPass] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (password !== confirm) { setError('Kata sandi tidak cocok'); return; }
        if (password.length < 6) { setError('Kata sandi minimal 6 karakter'); return; }
        navigate('/login');
    };

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <div className="w-16 h-16 mx-auto rounded-full bg-aura-gold-muted flex items-center justify-center mb-6">
                        <Lock size={28} className="text-aura-gold" />
                    </div>
                    <h1 className="font-serif text-3xl font-bold text-aura-white mb-2">Reset Kata Sandi</h1>
                    <p className="text-aura-gray text-sm">Buat kata sandi baru untuk akun Anda.</p>
                </div>
                <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-5">
                    {error && <p className="text-aura-danger text-sm text-center bg-aura-danger/10 py-2 rounded-lg">{error}</p>}
                    <div>
                        <label className="text-aura-gray text-sm mb-1.5 block">Kata Sandi Baru</label>
                        <div className="relative">
                            <input type={showPass ? 'text' : 'password'} required value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 pr-11 text-sm text-aura-white focus:outline-none focus:border-aura-gold/30" placeholder="Min. 6 karakter" />
                            <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-aura-gray hover:text-aura-gold">
                                {showPass ? <EyeOff size={18} /> : <Eye size={18} />}
                            </button>
                        </div>
                    </div>
                    <div>
                        <label className="text-aura-gray text-sm mb-1.5 block">Konfirmasi Kata Sandi</label>
                        <input type="password" required value={confirm} onChange={(e) => setConfirm(e.target.value)} className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white focus:outline-none focus:border-aura-gold/30" placeholder="Ulangi kata sandi" />
                    </div>
                    <button type="submit" className="w-full bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold py-3.5 rounded-xl text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(212,168,83,0.3)] transition-all">
                        Reset Kata Sandi
                    </button>
                </form>
            </div>
        </div>
    );
}
