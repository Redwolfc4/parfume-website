import { Package } from 'lucide-react';

export default function OrdersPage() {
    // Mock orders
    const orders = [
        { id: 'AUR-001', date: '2025-01-15', status: 'delivered', total: 850000, items: 2 },
        { id: 'AUR-002', date: '2025-01-28', status: 'shipped', total: 450000, items: 1 },
        { id: 'AUR-003', date: '2025-02-05', status: 'processing', total: 1200000, items: 3 },
    ];

    const formatPrice = (price: number) =>
        new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

    const statusColors: Record<string, string> = {
        pending: 'text-yellow-400 bg-yellow-400/10',
        processing: 'text-blue-400 bg-blue-400/10',
        shipped: 'text-purple-400 bg-purple-400/10',
        delivered: 'text-aura-success bg-aura-success/10',
    };

    const statusLabels: Record<string, string> = {
        pending: 'Menunggu',
        processing: 'Diproses',
        shipped: 'Dikirim',
        delivered: 'Selesai',
    };

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-aura-white mb-8">
                    Pesanan <span className="text-gradient-gold">Saya</span>
                </h1>
                <div className="space-y-4">
                    {orders.map((order) => (
                        <div key={order.id} className="glass rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                            <div className="w-12 h-12 rounded-xl bg-aura-gold-muted flex items-center justify-center flex-shrink-0">
                                <Package size={22} className="text-aura-gold" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-1">
                                    <p className="text-aura-white font-medium">#{order.id}</p>
                                    <span className={`text-xs px-2 py-0.5 rounded-full ${statusColors[order.status]}`}>
                                        {statusLabels[order.status]}
                                    </span>
                                </div>
                                <p className="text-aura-gray text-sm">{order.items} item · {order.date}</p>
                            </div>
                            <p className="text-aura-gold font-semibold">{formatPrice(order.total)}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
