"use client";

import { motion } from "framer-motion";

export default function Home() {
    return (
        <main className="hero">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                style={{ width: '100%', maxWidth: '1200px', marginBottom: '4rem' }}
            >
                <img
                    src="/billboard.png"
                    alt="Premium Billboard"
                    style={{
                        width: '100%',
                        borderRadius: '24px',
                        boxShadow: '0 20px 50px rgba(0,0,0,0.5)',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}
                />
            </motion.div>

            <motion.h1
                className="title"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
            >
                OOH!
            </motion.h1>

            <motion.p
                className="subtitle"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                Revolutionizing the physical world with digital intelligence.
                High-impact, performance-driven Out-of-Home media for the next generation.
            </motion.p>

            <motion.button
                className="cta"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
            >
                Explore Network
            </motion.button>

            <div className="glass-card">
                <h2 style={{ marginBottom: '1rem' }}>Local Presence, Global Reach</h2>
                <p style={{ color: '#ccc' }}>
                    Connect with audiences where they live, work, and play.
                    Our intelligent network optimizes your message in real-time.
                </p>
            </div>
        </main>
    );
}
