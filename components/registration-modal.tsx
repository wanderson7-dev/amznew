import { useState } from 'react';
import Button from "@/components/button";
import { X } from 'lucide-react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

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

                <div className="mx-auto flex size-24 items-center justify-center rounded-full bg-green-100">
                    <DotLottieReact
                        src="/lotties/check.lottie"
                        loop={false}
                        autoplay={true}
                    />
                </div>

                <div className="text-center space-y-2">
                    <span className="text-xl font-semibold tracking-tight">
                        Congratulations!
                    </span>
                    <p className="text-gray-500">
                        You have secured your spot. Please fill in your details to continue.
                    </p>
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
