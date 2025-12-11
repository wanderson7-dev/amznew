import { useState } from 'react';
import Image from "next/image";
import Button from "@/components/button";
import { X, Package } from 'lucide-react';
import icon from "@/app/icon.webp";


interface RegistrationModalProps {
    isOpen: boolean;
    onClose: () => void;
    redirectUrl: string;
}

export default function RegistrationModal({ isOpen, onClose, redirectUrl }: RegistrationModalProps) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        // Construct URL with params
        if (!redirectUrl) {
            console.error("Redirect URL is missing");
            setLoading(false);
            return;
        }
        const separator = redirectUrl.includes('?') ? '&' : '?';
        const finalUrl = `${redirectUrl}${separator}name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`;

        // Redirect
        window.location.href = finalUrl;
    };

    return (
        <div className="flex justify-center items-center fixed inset-0 z-50 backdrop-blur-sm p-5 bg-black/40">
            <div className="flex flex-col w-full max-w-lg gap-5 text-center rounded-2xl shadow-lg modal px-8 py-10 bg-gray-50 relative">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
                >
                    <X className="size-6" />
                </button>

                <div className="flex w-full items-start gap-4 p-4 border rounded-xl border-gray-200 bg-white shadow-sm text-left">
                    <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-[#D8B688] relative overflow-hidden">
                        <Image
                            src={icon}
                            alt="Fee Icon"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-0.5 justify-center h-20">
                        <span className="font-bold text-xl text-gray-900 leading-tight">Fee AMZ Reviews</span>
                        <span className="text-xs text-gray-500">Author: Amazon Inc. ©</span>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-4 text-left">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-green-500 outline-none transition-all"
                            placeholder="John Doe"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-green-500 focus:ring-green-500 outline-none transition-all"
                            placeholder="john@example.com"
                        />
                    </div>

                    <Button
                        type="submit"
                        disabled={loading}
                        className="w-full mt-2 !bg-green-600 hover:!bg-green-700 text-white font-bold py-4"
                    >
                        {loading ? 'Processing...' : 'Continue'}
                    </Button>
                </form>
            </div>
        </div>
    );
}
