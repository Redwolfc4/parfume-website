import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const faqs = [
    { q: 'Bagaimana cara memesan parfum di Aura Parfume?', a: 'Anda cukup memilih produk yang diinginkan, tambahkan ke keranjang, dan lanjutkan ke halaman checkout. Ikuti langkah-langkah pengisian data pengiriman dan metode pembayaran.' },
    { q: 'Berapa lama waktu pengiriman?', a: 'Pengiriman biasanya memakan waktu 2-5 hari kerja untuk area Jawa dan 5-10 hari kerja untuk luar Jawa, tergantung lokasi Anda.' },
    { q: 'Apakah produk Aura Parfume original?', a: 'Ya! Semua produk kami 100% original dan sudah terdaftar BPOM. Kami menjamin keaslian setiap produk yang kami jual.' },
    { q: 'Bagaimana kebijakan pengembalian?', a: 'Kami menerima pengembalian dalam 7 hari setelah barang diterima jika produk dalam kondisi belum dibuka dan masih tersegel.' },
    { q: 'Apakah parfum Aura aman untuk kulit sensitif?', a: 'Produk kami telah melewati uji dermatologi. Namun, jika Anda memiliki kondisi kulit tertentu, kami sarankan untuk melakukan patch test terlebih dahulu.' },
    { q: 'Bagaimana cara menghubungi customer service?', a: 'Anda bisa menghubungi kami melalui WhatsApp di +62 895 3595 30117, email ke hello@auraparfume.id, atau melalui halaman Kontak di website ini.' },
];

export default function HelpPage() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <p className="text-aura-gold text-sm tracking-[0.25em] uppercase mb-3">Pusat Bantuan</p>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-aura-white mb-4">
                        Ada yang Bisa <span className="text-gradient-gold">Dibantu?</span>
                    </h1>
                    <p className="text-aura-gray">Temukan jawaban untuk pertanyaan yang sering diajukan.</p>
                </div>

                <div className="space-y-3 mb-12">
                    {faqs.map((faq, i) => (
                        <div key={i} className="glass rounded-2xl overflow-hidden">
                            <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between p-5 text-left">
                                <span className="text-aura-white text-sm font-medium pr-4">{faq.q}</span>
                                <ChevronDown size={18} className={`text-aura-gold flex-shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${open === i ? 'max-h-40 pb-5' : 'max-h-0'}`}>
                                <p className="text-aura-gray text-sm px-5 leading-relaxed">{faq.a}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="glass rounded-2xl p-8 text-center">
                    <h2 className="font-serif text-xl text-aura-white mb-2">Masih Butuh Bantuan?</h2>
                    <p className="text-aura-gray text-sm mb-4">Tim kami siap membantu Anda kapan saja.</p>
                    <Link to="/kontak" className="inline-flex bg-gradient-to-r from-aura-gold to-aura-gold-dark text-aura-black font-semibold px-6 py-3 rounded-xl text-sm">
                        Hubungi Kami
                    </Link>
                </div>
            </div>
        </div>
    );
}
