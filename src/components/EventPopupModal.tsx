import { useState } from 'react';
import { X } from 'lucide-react';

const EventPopupModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6"
            style={{ background: 'rgba(0,0,0,0.6)' }}
            onClick={() => setIsOpen(false)}
        >
            <div
                className="relative max-w-md w-full animate-in fade-in zoom-in-95 duration-200"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Close */}
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute -top-3 -right-3 z-10 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-600 hover:text-gray-900 hover:scale-105 transition-transform"
                >
                    <X className="w-4 h-4" strokeWidth={2.5} />
                </button>

                {/* Poster */}
                <a
                    href="https://unstop.com/p/codeclash-infotechiezz-1646268"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block rounded-2xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow"
                >
                    <img
                        src="/unstop event.jpg.jpeg"
                        alt="Code Clash - Battle of Bits & Logic"
                        className="w-full h-auto block"
                    />
                </a>
            </div>
        </div>
    );
};

export default EventPopupModal;
