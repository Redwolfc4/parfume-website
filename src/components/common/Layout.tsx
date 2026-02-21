import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from '@/components/ui/FloatingWhatsApp';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-aura-black">
            <Navbar />
            <main className="flex-1 pt-20">
                <Outlet />
            </main>
            <Footer />
            <FloatingWhatsApp />
        </div>
    );
}
