import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { User, Package, Heart, Settings, LogOut } from 'lucide-react';
import { useAuthStore } from '@/lib/store';

export default function ProfilePage() {
    const { user, isAuthenticated, updateProfile, logout } = useAuthStore();
    const navigate = useNavigate();
    const [editing, setEditing] = useState(false);
    const [form, setForm] = useState({ name: user?.name || '', phone: user?.phone || '', address: user?.address || '' });

    if (!isAuthenticated) { navigate('/login'); return null; }

    const handleSave = () => { updateProfile(form); setEditing(false); };

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-aura-white mb-8">
                    Profil <span className="text-gradient-gold">Saya</span>
                </h1>

                <div className="grid md:grid-cols-4 gap-6">
                    {/* Sidebar */}
                    <div className="glass rounded-2xl p-4 h-fit">
                        <div className="text-center mb-4">
                            <div className="w-20 h-20 mx-auto rounded-full bg-gradient-to-br from-aura-gold to-aura-gold-dark flex items-center justify-center text-aura-black font-serif font-bold text-2xl mb-3">
                                {user?.name?.charAt(0) || 'U'}
                            </div>
                            <p className="text-aura-white font-medium">{user?.name}</p>
                            <p className="text-aura-gray text-sm">{user?.email}</p>
                        </div>
                        <nav className="space-y-1">
                            {[
                                { icon: User, label: 'Profil', path: '/profil' },
                                { icon: Package, label: 'Pesanan', path: '/pesanan' },
                                { icon: Heart, label: 'Wishlist', path: '/wishlist' },
                                { icon: Settings, label: 'Pengaturan', path: '/pengaturan' },
                            ].map((item) => (
                                <Link key={item.path} to={item.path} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-aura-gray hover:text-aura-gold hover:bg-aura-gold/5 transition-all">
                                    <item.icon size={18} /> {item.label}
                                </Link>
                            ))}
                            <button onClick={() => { logout(); navigate('/'); }} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-aura-danger hover:bg-aura-danger/5 transition-all w-full">
                                <LogOut size={18} /> Keluar
                            </button>
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-3 glass rounded-2xl p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="font-serif text-xl text-aura-white">Informasi Pribadi</h2>
                            <button onClick={() => editing ? handleSave() : setEditing(true)} className="text-aura-gold text-sm hover:underline">
                                {editing ? 'Simpan' : 'Edit'}
                            </button>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {[
                                { label: 'Nama', key: 'name' as const, value: form.name },
                                { label: 'Email', key: 'email' as const, value: user?.email || '', disabled: true },
                                { label: 'Telepon', key: 'phone' as const, value: form.phone },
                                { label: 'Alamat', key: 'address' as const, value: form.address },
                            ].map((field) => (
                                <div key={field.label}>
                                    <label className="text-aura-gray text-sm mb-1.5 block">{field.label}</label>
                                    <input
                                        type="text"
                                        value={field.value}
                                        disabled={field.disabled || !editing}
                                        onChange={(e) => {
                                            if (field.key !== 'email') setForm({ ...form, [field.key]: e.target.value });
                                        }}
                                        className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white disabled:opacity-50 focus:outline-none focus:border-aura-gold/30"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
