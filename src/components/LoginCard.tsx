"use client";
import { motion } from "framer-motion";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";

export default function LoginCard({ open, handleOpen }: { open: boolean, handleOpen: () => void }) {
    return (
        <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={open ? { y: 0, opacity: 1 } : { y: 200, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className=" h-full bg-white backdrop-blur-2xl border border-white/40 rounded-t-[3rem] p-8 mt-6 shadow-2xl flex flex-col w-96"
        >
            {/* Indicator Line */}
            <button onClick={handleOpen} className="w-12 h-1.5 bg-gray-200 rounded-full mx-auto mb-8 hover:bg-gray-400 cursor-pointer" />

            {/* Header */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold bg-linear-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                    ยินดีต้อนรับกลับ
                </h2>
                <p className="text-gray-500 mt-2">เข้าสู่ระบบเพื่อทำภารกิจของคุณ</p>
            </div>

            {/* Form */}
            <div className="space-y-5">
                <div className="relative">
                    <Mail className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="ชื่อผู้ใช้"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:bg-white transition-all"
                    />
                </div>

                <div className="relative">
                    <Lock className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
                    <input
                        type="password"
                        placeholder="รหัสผ่าน"
                        className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-violet-400 focus:bg-white transition-all"
                    />
                </div>

                <div className="text-right">
                    <button className="text-sm font-medium text-violet-600 hover:text-blue-600 transition-colors">
                        เปลี่ยนรหัสผ่าน?
                    </button>
                </div>

                <button className="w-full py-4 bg-linear-to-r from-violet-600 to-blue-600 text-white font-bold rounded-2xl shadow-lg shadow-blue-200 hover:opacity-90 active:scale-[0.98] transition-all">
                    เข้าสู่ระบบ
                </button>
            </div>

            {/* Divider */}
            {/* <div className="relative my-8">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t border-gray-100"></span>
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                    <span className="px-4 bg-white text-gray-400">Or continue with</span>
                </div>
            </div> */}

            {/* Social Buttons */}
            {/* <div className="grid grid-cols-2 gap-4">
                <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all">
                    <Chrome className="h-5 w-5 text-red-500" />
                    <span className="text-sm font-semibold">Google</span>
                </button>
                <button className="flex items-center justify-center gap-2 py-3 border border-gray-200 rounded-2xl hover:bg-gray-50 transition-all">
                    <Github className="h-5 w-5 text-gray-900" />
                    <span className="text-sm font-semibold">GitHub</span>
                </button>
            </div> */}

            {/* Footer */}
            <p className="mt-auto pt-6 text-center text-gray-500 text-sm">
                ยังไม่เคยใช้เราใช่ไหม?{" "}
                <Link href={"/signup"} className="font-bold text-violet-600">สมัครสมาชิก</Link>
            </p>
        </motion.div>
    );
}