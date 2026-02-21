import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [sent, setSent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSent(true);
        setForm({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSent(false), 3000);
    };

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <p className="text-aura-gold text-sm tracking-[0.25em] uppercase mb-3">Hubungi Kami</p>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-aura-white mb-4">
                        Kami Siap <span className="text-gradient-gold">Membantu</span>
                    </h1>
                    <p className="text-aura-gray max-w-lg mx-auto">
                        Punya pertanyaan atau butuh rekomendasi? Tim kami dengan senang hati melayani Anda.
                    </p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        {[
                            { icon: MapPin, title: 'Alamat', lines: ['Jl. Parfum Indah No. 88', 'Jakarta Selatan, 12345'] },
                            { icon: Phone, title: 'Telepon', lines: ['+62 812 3456 7890', '+62 21 5555 1234'] },
                            { icon: Mail, title: 'Email', lines: ['hello@auraparfume.id', 'support@auraparfume.id'] },
                            { icon: Clock, title: 'Jam Operasional', lines: ['Senin - Jumat: 09:00 - 18:00', 'Sabtu: 10:00 - 15:00'] },
                        ].map((item) => (
                            <div key={item.title} className="glass rounded-2xl p-5 flex gap-4">
                                <div className="w-11 h-11 rounded-xl bg-aura-gold-muted flex-shrink-0 flex items-center justify-center">
                                    <item.icon size={20} className="text-aura-gold" />
                                </div>
                                <div>
                                    <h3 className="text-aura-white font-medium text-sm mb-1">{item.title}</h3>
                                    {item.lines.map((line, i) => (
                                        <p key={i} className="text-aura-gray text-sm">{line}</p>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <form onSubmit={handleSubmit} className="glass rounded-2xl p-8">
                            <h2 className="font-serif text-2xl text-aura-white mb-6">Kirim Pesan</h2>
                            <div className="grid sm:grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="text-aura-gray text-sm mb-1.5 block">Nama</label>
                                    <input
                                        type="text"
                                        value={form.name}
                                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                                        required
                                        className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white placeholder:text-aura-gray focus:outline-none focus:border-aura-gold/30 transition-colors"
                                        placeholder="Nama lengkap"
                                    />
                                </div>
                                <div>
                                    <label className="text-aura-gray text-sm mb-1.5 block">Email</label>
                                    <input
                                        type="email"
                                        value={form.email}
                                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                                        required
                                        className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white placeholder:text-aura-gray focus:outline-none focus:border-aura-gold/30 transition-colors"
                                        placeholder="email@anda.com"
                                    />
                                </div>
                            </div>
                            <div className="mb-4">
                                <label className="text-aura-gray text-sm mb-1.5 block">Subjek</label>
                                <input
                                    type="text"
                                    value={form.subject}
                                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                                    required
                                    className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white placeholder:text-aura-gray focus:outline-none focus:border-aura-gold/30 transition-colors"
                                    placeholder="Apa yang bisa kami bantu?"
                                />
                            </div>
                            <div className="mb-6">
                                <label className="text-aura-gray text-sm mb-1.5 block">Pesan</label>
                                <textarea
                                    value={form.message}
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                    required
                                    rows={5}
                                    className="w-full bg-aura-black-lighter border border-aura-gold/10 rounded-xl py-3 px-4 text-sm text-aura-white placeholder:text-aura-gray focus:outline-none focus:border-aura-gold/30 transition-colors resize-none"
                                    placeholder="Tulis pesan Anda di sini..."
                                />
                            </div>
                            <button
                                type="submit"
                                className="flex items-center justify-center gap-2 bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold py-3 px-8 rounded-xl text-sm tracking-wider uppercase hover:shadow-[0_0_25px_rgba(212,168,83,0.3)] transition-all duration-300"
                            >
                                <Send size={16} />
                                {sent ? 'Terkirim!' : 'Kirim Pesan'}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
