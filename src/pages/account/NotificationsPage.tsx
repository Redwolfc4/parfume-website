import { Bell } from 'lucide-react';

export default function NotificationsPage() {
    const notifications = [
        { id: 1, title: 'Pesanan Dikirim', message: 'Pesanan #AUR-003 sedang dalam perjalanan!', time: '2 jam lalu', read: false },
        { id: 2, title: 'Promo Spesial', message: 'Diskon 20% untuk koleksi Midnight Series. Berlaku hingga akhir bulan!', time: '1 hari lalu', read: false },
        { id: 3, title: 'Selamat Datang', message: 'Terima kasih telah bergabung dengan keluarga Aura Parfume!', time: '3 hari lalu', read: true },
    ];

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-aura-white mb-8">
                    <span className="text-gradient-gold">Notifikasi</span>
                </h1>
                <div className="space-y-3">
                    {notifications.map((n) => (
                        <div key={n.id} className={`glass rounded-2xl p-5 flex gap-4 ${!n.read ? 'border-l-2 border-l-aura-gold' : ''}`}>
                            <div className={`w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center ${!n.read ? 'bg-aura-gold/10' : 'bg-aura-black-lighter'}`}>
                                <Bell size={18} className={!n.read ? 'text-aura-gold' : 'text-aura-gray'} />
                            </div>
                            <div>
                                <h3 className="text-aura-white text-sm font-medium">{n.title}</h3>
                                <p className="text-aura-gray text-sm mt-0.5">{n.message}</p>
                                <p className="text-aura-gray/50 text-xs mt-2">{n.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
