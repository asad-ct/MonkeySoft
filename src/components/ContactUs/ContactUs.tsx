'use client';

import React, { useState } from 'react';
import { GLSLHills } from '@/components/ui/glsl-hills';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ContactUs() {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to send email');
            }

            console.log('Email sent successfully:', data);
            setSubmitStatus('success');
            setFormData({ email: '', message: '' });

            // Reset status after 3 seconds
            setTimeout(() => setSubmitStatus('idle'), 3000);
        } catch (error) {
            console.error('Submit error:', error);
            setSubmitStatus('error');
            setTimeout(() => setSubmitStatus('idle'), 3000);
        } finally {
            setIsSubmitting(false);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8 },
        },
    };

    const directlyReachOutTo = "imasadali7@gmail.com  |  (+92) 304-0992770";

    return (
        <section id="contact" className="relative w-full h-screen bg-black overflow-hidden flex items-center justify-center">
            {/* Background Animation */}
            <div className="absolute inset-0 z-0">
                <GLSLHills />
            </div>

            {/* Content Overlay */}
            <motion.div
                className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4 md:px-8"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                {/* Header */}
                <motion.div className="text-center mb-12" variants={itemVariants}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg md:text-xl text-gray-300">
                        Have a question or ready to start your project? We&apos;d love to hear from you.
                    </p>
                </motion.div>

                {/* Form Container */}
                <motion.div
                    className="w-full max-w-md"
                    variants={itemVariants}
                >
                    <form
                        onSubmit={handleSubmit}
                        className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 space-y-6"
                    >
                        {/* Email Field */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-white/90">
                                <Mail className="w-4 h-4 text-[#F63715]" />
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F63715] focus:ring-2 focus:ring-[#F63715]/30 transition-all duration-300"
                            />
                        </motion.div>

                        {/* Message Field */}
                        <motion.div variants={itemVariants} className="space-y-2">
                            <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-white/90">
                                <MessageSquare className="w-4 h-4 text-[#F63715]" />
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Tell us about your project..."
                                rows={5}
                                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#F63715] focus:ring-2 focus:ring-[#F63715]/30 transition-all duration-300 resize-none"
                            />
                        </motion.div>

                        {/* Submit Button */}
                        <motion.button
                            type="submit"
                            disabled={isSubmitting}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className={`w-full py-3 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${submitStatus === 'success'
                                ? 'bg-green-500/20 border border-green-500 text-green-400'
                                : submitStatus === 'error'
                                    ? 'bg-red-500/20 border border-red-500 text-red-400'
                                    : 'bg-gradient-to-r from-[#F63715] to-[#FF9663] text-white hover:from-[#F63715]/90 hover:to-[#FF9663]/90 border border-white/10'
                                } ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                        >
                            {isSubmitting ? (
                                <>
                                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    Sending...
                                </>
                            ) : submitStatus === 'success' ? (
                                <>
                                    Message Sent!
                                </>
                            ) : submitStatus === 'error' ? (
                                <>
                                    <span>✕</span>
                                    Send Failed
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </>
                            )}
                        </motion.button>

                        {/* Status Message */}
                        {submitStatus === 'success' && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                className="text-center text-sm text-green-400"
                            >
                                Thank you! We&apos;ll get back to you soon.
                            </motion.p>
                        )}
                    </form>
                </motion.div>

                {/* Contact Info */}
                <motion.div className="mt-12 text-center text-gray-400 text-sm" variants={itemVariants}>
                    <p>Or reach out directly at:</p>
                    <p className="text-white font-semibold mt-2">{directlyReachOutTo}</p>
                </motion.div>
            </motion.div>
        </section>
    );
}
