import { useState, useRef, useCallback, useEffect } from 'react';
import { MessageCircle, X } from 'lucide-react';

const PHONE_NUMBER = '62895359530117';
const DEFAULT_MESSAGE = 'Halo Aura Parfume! Saya tertarik dengan koleksi parfum Anda. Bisa dibantu?';

export default function FloatingWhatsApp() {
    const [isOpen, setIsOpen] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);
    const dragOffset = useRef({ x: 0, y: 0 });
    const btnRef = useRef<HTMLDivElement>(null);
    const hasMoved = useRef(false);

    useEffect(() => {
        setPosition({
            x: window.innerWidth - 80,
            y: window.innerHeight - 100,
        });
    }, []);

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        setDragging(true);
        hasMoved.current = false;
        dragOffset.current = {
            x: e.clientX - position.x,
            y: e.clientY - position.y,
        };
        (e.target as HTMLElement).setPointerCapture(e.pointerId);
    }, [position]);

    const handlePointerMove = useCallback((e: React.PointerEvent) => {
        if (!dragging) return;
        hasMoved.current = true;
        const newX = Math.max(0, Math.min(window.innerWidth - 60, e.clientX - dragOffset.current.x));
        const newY = Math.max(0, Math.min(window.innerHeight - 60, e.clientY - dragOffset.current.y));
        setPosition({ x: newX, y: newY });
    }, [dragging]);

    const handlePointerUp = useCallback(() => {
        setDragging(false);
        if (!hasMoved.current) {
            setIsOpen((v) => !v);
        }
    }, []);

    const openWhatsApp = () => {
        const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;
        window.open(url, '_blank');
        setIsOpen(false);
    };

    return (
        <div
            ref={btnRef}
            className="fixed z-[9999] select-none touch-none"
            style={{ left: position.x, top: position.y }}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
        >
            {/* Chat Bubble */}
            <div
                className={`absolute bottom-16 right-0 w-72 transition-all duration-300 origin-bottom-right ${isOpen
                    ? 'opacity-100 scale-100 pointer-events-auto'
                    : 'opacity-0 scale-90 pointer-events-none'
                    }`}
            >
                <div className="glass rounded-2xl overflow-hidden shadow-2xl shadow-black/50">
                    <div className="bg-gradient-to-r from-green-600 to-green-500 p-4">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-white font-semibold text-sm">Aura Parfume</p>
                                <p className="text-green-100 text-xs">Biasanya membalas dalam 1 jam</p>
                            </div>
                            <button
                                onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
                                className="text-white/80 hover:text-white"
                            >
                                <X size={18} />
                            </button>
                        </div>
                    </div>
                    <div className="p-4 bg-aura-black-light">
                        <div className="bg-aura-black-lighter rounded-xl p-3 mb-3">
                            <p className="text-aura-white text-sm">
                                Hai! 👋 Selamat datang di Aura Parfume. Ada yang bisa kami bantu?
                            </p>
                            <p className="text-aura-gray text-xs mt-1">Baru saja</p>
                        </div>
                        <button
                            onClick={(e) => { e.stopPropagation(); openWhatsApp(); }}
                            className="w-full bg-green-600 hover:bg-green-500 text-white font-medium py-3 rounded-xl text-sm transition-colors flex items-center justify-center gap-2"
                        >
                            <MessageCircle size={16} />
                            Mulai Chat
                        </button>
                    </div>
                </div>
            </div>

            {/* FAB Button */}
            <div
                className={`w-14 h-14 rounded-full bg-green-600 flex items-center justify-center shadow-lg shadow-green-600/30 cursor-grab active:cursor-grabbing transition-transform duration-200 ${!dragging ? 'hover:scale-110' : ''
                    }`}
            >
                <MessageCircle size={24} className="text-white" />
                {!isOpen && (
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-aura-gold rounded-full animate-ping" />
                )}
            </div>
        </div>
    );
}
