import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, CheckCircle } from 'lucide-react';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await new Promise(r => setTimeout(r, 1200));
        setLoading(false);
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center justify-center text-center p-10 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(0,166,244,0.2)', backdropFilter: 'blur(16px)', minHeight: 420 }}
            >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-5">
                    <CheckCircle className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
            </motion.div>
        );
    }

    const inputBase = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 text-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 transition-all duration-200";

    return (
        <motion.div
            className="rounded-2xl p-7 sm:p-8"
            style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(20px)', boxShadow: '0 32px 64px rgba(0,0,0,0.4)' }}
        >
            {/* Header */}
            <div className="mb-6">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-3" style={{ background: 'rgba(0,166,244,0.12)', border: '1px solid rgba(0,166,244,0.25)' }}>
                    <span className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                    <span className="text-sky-400 text-xs font-semibold uppercase tracking-wider">Get Started Today</span>
                </div>
                <h3 className="text-xl font-bold text-white">Talk to Our Experts</h3>
                <p className="text-gray-400 text-sm mt-1">Free consultation, no commitment.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`${inputBase} pl-10`}
                    />
                </div>

                <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="email"
                        name="email"
                        placeholder="Work Email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`${inputBase} pl-10`}
                    />
                </div>

                <div className="relative">
                    <Phone className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number (optional)"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`${inputBase} pl-10`}
                    />
                </div>

                <div className="relative">
                    <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-500" />
                    <textarea
                        name="message"
                        placeholder="Tell us about your project..."
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className={`${inputBase} pl-10 resize-none`}
                    />
                </div>

                <motion.button
                    type="submit"
                    disabled={loading}
                    whileHover={{ scale: loading ? 1 : 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 rounded-xl font-bold text-white text-sm flex items-center justify-center gap-2 transition-all duration-300"
                    style={{ background: loading ? 'rgba(0,166,244,0.5)' : 'linear-gradient(135deg, #00A6F4, #0284c7)', boxShadow: loading ? 'none' : '0 4px 20px rgba(0,166,244,0.4)' }}
                >
                    {loading ? (
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                        <>
                            <Send className="w-4 h-4" />
                            Send Message
                        </>
                    )}
                </motion.button>

                <p className="text-center text-gray-500 text-xs">🔒 Your information is 100% secure</p>
            </form>
        </motion.div>
    );
};

export default ContactForm;
