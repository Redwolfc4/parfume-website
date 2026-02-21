import { Award, Users, Sparkles, Target } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Hero */}
                <div className="text-center mb-20">
                    <p className="text-aura-gold text-sm tracking-[0.25em] uppercase mb-3">Tentang Kami</p>
                    <h1 className="font-serif text-4xl md:text-6xl font-bold text-aura-white mb-6">
                        Kisah di Balik <span className="text-gradient-gold">Aura</span>
                    </h1>
                    <p className="text-aura-gray text-lg max-w-2xl mx-auto leading-relaxed">
                        Berawal dari kecintaan terhadap seni parfumeri, Aura Parfume lahir dengan satu misi:
                        menciptakan wewangian yang tidak sekadar harum, tetapi mampu mengekspresikan karakter setiap individu.
                    </p>
                </div>

                {/* Story */}
                <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
                    <div className="relative">
                        <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-br from-aura-gold/10 to-aura-black-light border border-aura-gold/10 flex items-center justify-center">
                            <div className="text-center px-8">
                                <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-aura-gold to-aura-gold-dark flex items-center justify-center mb-6">
                                    <span className="font-serif text-4xl font-bold text-aura-black">A</span>
                                </div>
                                <p className="font-serif text-2xl text-gradient-gold">Est. 2020</p>
                                <p className="text-aura-gray text-sm mt-2">Jakarta, Indonesia</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-serif text-3xl font-bold text-aura-white mb-6">
                            Setiap Tetes Menyimpan <span className="text-gradient-gold">Cerita</span>
                        </h2>
                        <div className="space-y-4 text-aura-gray leading-relaxed">
                            <p>
                                Aura Parfume didirikan pada tahun 2020 oleh sekelompok perajin parfum yang percaya bahwa
                                wewangian adalah bentuk ekspresi diri yang paling intim. Kami tidak sekadar mencampur
                                aroma—kami menciptakan pengalaman.
                            </p>
                            <p>
                                Dengan memadukan bahan-bahan premium dari berbagai penjuru dunia dan teknik parfumeri
                                tradisional Prancis, setiap botol Aura adalah hasil dari ratusan jam eksperimen
                                dan dedikasi tanpa kompromi terhadap kualitas.
                            </p>
                            <p>
                                Hari ini, Aura Parfume telah menjadi pilihan ribuan penikmat parfum di Indonesia
                                yang mencari lebih dari sekadar wewangian—mereka mencari identitas.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Values */}
                <div className="mb-24">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-3xl md:text-4xl font-bold text-aura-white">
                            Nilai yang Kami <span className="text-gradient-gold">Pegang</span>
                        </h2>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: Target, title: 'Autentisitas', desc: 'Setiap aroma dipersembahkan tanpa kompromi. Kami menggunakan bahan terbaik untuk hasil yang otentik.' },
                            { icon: Sparkles, title: 'Inovasi', desc: 'Kami terus bereksperimen dengan kombinasi aroma baru yang belum pernah ada sebelumnya.' },
                            { icon: Users, title: 'Komunitas', desc: 'Pelanggan kami bukan sekadar pembeli—mereka adalah bagian dari keluarga besar Aura.' },
                            { icon: Award, title: 'Kualitas', desc: 'Standar internasional dengan sentuhan lokal. Setiap produk melewati kontrol kualitas ketat.' },
                        ].map((item) => (
                            <div key={item.title} className="bg-aura-black-light border border-aura-gold/10 rounded-2xl p-6 text-center hover:border-aura-gold/30 transition-all duration-300">
                                <div className="w-14 h-14 mx-auto rounded-xl bg-aura-gold-muted flex items-center justify-center mb-4">
                                    <item.icon size={28} className="text-aura-gold" />
                                </div>
                                <h3 className="font-serif text-lg text-aura-white mb-2">{item.title}</h3>
                                <p className="text-aura-gray text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
