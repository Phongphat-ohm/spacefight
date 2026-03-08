"use client"

import { motion } from "framer-motion";

export default function Loading() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-slate-950 font-mono overflow-hidden text-white"
        >

            {/* Background Grid */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"
            />

            {/* Scanner Core */}
            <motion.div
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                    duration: 0.6,
                    ease: "easeOut"
                }}
                className="relative size-72 flex items-center justify-center"
            >

                {/* Corners */}
                <div className="absolute top-0 left-0 size-10 border-t-2 border-l-2 border-blue-500 animate-pulse"></div>
                <div className="absolute top-0 right-0 size-10 border-t-2 border-r-2 border-blue-500 animate-pulse"></div>
                <div className="absolute bottom-0 left-0 size-10 border-b-2 border-l-2 border-blue-500 animate-pulse"></div>
                <div className="absolute bottom-0 right-0 size-10 border-b-2 border-r-2 border-blue-500 animate-pulse"></div>

                {/* Rings */}
                <motion.div
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute size-48 border-2 border-dashed border-blue-400/20 rounded-full animate-spin"
                />

                <motion.div
                    initial={{ rotate: 180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="absolute size-56 border border-blue-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse]"
                />

                {/* Core */}
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4, type: "spring", stiffness: 120 }}
                    className="relative size-4 bg-blue-500 rounded-full shadow-[0_0_15px_#3b82f6] animate-pulse"
                >
                    <div className="absolute inset-0 size-full bg-blue-400 rounded-full animate-ping opacity-50"></div>
                </motion.div>

                {/* Scan line */}
                <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-[scan_3s_ease-in-out_infinite]"></div>

            </motion.div>

            {/* Text */}
            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-16 w-64 space-y-4 text-center"
            >
                <div className="text-blue-400 font-bold animate-pulse uppercase tracking-widest text-sm">
                    กำลังทำรายการ
                </div>

                <div className="text-[10px] text-slate-400">
                    ระบบกำลังติดต่อฐานข้อมูล กรุณารอสักครู่
                </div>

                <div className="w-full h-1 bg-blue-900/20 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-1/3 animate-[loading_1.5s_ease-in-out_infinite]"></div>
                </div>
            </motion.div>

            <style jsx>{`
                @keyframes scan {
                    0%,100% { transform: translateY(-140px); opacity:0 }
                    50% { transform: translateY(140px); opacity:1 }
                }

                @keyframes loading {
                    0% { transform: translateX(-100%) }
                    100% { transform: translateX(300%) }
                }
            `}</style>

        </motion.div>
    );
}