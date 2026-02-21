export default function PrivacyPage() {
    return (
        <div className="min-h-screen py-12 px-4">
            <div className="max-w-3xl mx-auto">
                <h1 className="font-serif text-4xl font-bold text-aura-white mb-8">Kebijakan <span className="text-gradient-gold">Privasi</span></h1>
                <div className="prose prose-sm text-aura-gray space-y-6 leading-relaxed">
                    <section><h2 className="font-serif text-xl text-aura-white mb-3">Informasi yang Kami Kumpulkan</h2><p>Kami mengumpulkan informasi yang Anda berikan secara langsung, seperti nama, email, alamat, dan nomor telepon saat membuat akun atau melakukan pemesanan.</p></section>
                    <section><h2 className="font-serif text-xl text-aura-white mb-3">Penggunaan Informasi</h2><p>Informasi Anda digunakan untuk memproses pesanan, mengirimkan notifikasi terkait pesanan, dan meningkatkan pengalaman berbelanja Anda di Aura Parfume.</p></section>
                    <section><h2 className="font-serif text-xl text-aura-white mb-3">Keamanan Data</h2><p>Kami menerapkan langkah-langkah keamanan yang wajar untuk melindungi data pribadi Anda dari akses tidak sah, perubahan, atau penghapusan.</p></section>
                    <section><h2 className="font-serif text-xl text-aura-white mb-3">Cookie</h2><p>Website kami menggunakan cookie untuk meningkatkan pengalaman pengguna. Anda dapat menonaktifkan cookie melalui pengaturan browser Anda.</p></section>
                </div>
            </div>
        </div>
    );
}
