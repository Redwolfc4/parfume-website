import { Settings, Moon, Globe, Bell } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-aura-white mb-8">
                    <span className="text-gradient-gold">Pengaturan</span>
                </h1>
                <div className="space-y-4">
                    {[
                        { icon: Bell, title: 'Notifikasi', desc: 'Kelola preferensi notifikasi Anda' },
                        { icon: Moon, title: 'Tampilan', desc: 'Sesuaikan tema dan tampilan website' },
                        { icon: Globe, title: 'Bahasa', desc: 'Pilih bahasa yang Anda inginkan' },
                        { icon: Settings, title: 'Akun', desc: 'Kelola informasi akun dan keamanan' },
                    ].map((item) => (
                        <div key={item.title} className="glass rounded-2xl p-5 flex items-center gap-4 cursor-pointer hover:border-aura-gold/30 transition-all">
                            <div className="w-11 h-11 rounded-xl bg-aura-gold-muted flex items-center justify-center flex-shrink-0">
                                <item.icon size={20} className="text-aura-gold" />
                            </div>
                            <div className="flex-1">
                                <h3 className="text-aura-white text-sm font-medium">{item.title}</h3>
                                <p className="text-aura-gray text-sm">{item.desc}</p>
                            </div>
                            <div className="w-9 h-5 rounded-full bg-aura-black-lighter border border-aura-gold/20 relative cursor-pointer">
                                <div className="absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-aura-gold/50 transition-all" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
