import { User, IdCard, Lock, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function Signup() {
    return (
        <form action={"/welcome"} className="w-full space-y-8">
            <div className="space-y-7">
                {/* Input: ชื่อ */}
                <div className="relative w-full">
                    <label className="absolute -top-3 left-4 bg-[#2e1065] px-3 text-[11px] font-bold text-violet-400 z-10 flex gap-2 items-center uppercase tracking-[0.1em] rounded-2xl p-1">
                        <IdCard size={14} />
                        ชื่อจริง
                    </label>
                    <input
                        type="text"
                        placeholder="ระบุชื่อของคุณ..."
                        className="w-full rounded-xl bg-white/5 p-4 border border-white/20 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 transition-all duration-300"
                    />
                </div>

                {/* Input: ชื่อผู้ใช้ */}
                <div className="relative w-full">
                    <label className="absolute -top-3 left-4 bg-[#281375] px-3 text-[11px] font-bold text-violet-400 z-10 flex gap-2 items-center uppercase tracking-[0.1em] rounded-2xl p-1">
                        <User size={14} />
                        ชื่อผู้ใช้
                    </label>
                    <input
                        type="text"
                        placeholder="ระบุชื่อผู้ใช้ของคุณ..."
                        className="w-full rounded-xl bg-white/5 p-4 border border-white/20 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 transition-all duration-300"
                    />
                </div>

                {/* Input: รหัสผ่าน */}
                <div className="relative w-full">
                    <label className="absolute -top-3 left-4 bg-[#211786] px-3 text-[11px] font-bold text-violet-400 z-10 flex gap-2 items-center uppercase tracking-[0.1em] rounded-2xl p-1">
                        <Lock size={14} />
                        รหัสผ่าน
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full rounded-xl bg-white/5 p-4 border border-white/20 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 transition-all duration-300"
                    />
                </div>

                {/* Input: ยืนยันรหัสผ่าน */}
                <div className="relative w-full">
                    <label className="absolute -top-3 left-4 bg-[#1b1b95] px-3 text-[11px] font-bold text-violet-400 z-10 flex gap-2 items-center uppercase tracking-[0.1em] rounded-2xl p-1">
                        <Lock size={14} />
                        ยืนยันรหัสผ่าน
                    </label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full rounded-xl bg-white/5 p-4 border border-white/20 text-white placeholder:text-white/20 focus:outline-none focus:border-violet-400 focus:ring-4 focus:ring-violet-400/10 transition-all duration-300"
                    />
                </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 space-y-6">
                <button className="w-full py-4 bg-linear-to-r from-violet-500 to-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-500/20 hover:brightness-110 active:scale-[0.98] transition-all duration-200">
                    สมัครสมาชิก
                </button>

                <Link href={"/"} className="group w-full flex items-center justify-center gap-2 text-white/40 hover:text-white transition-all duration-300 text-sm">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                    มีบัญชีอยู่แล้ว?
                    <span className="text-violet-400 font-bold border-b border-transparent group-hover:border-violet-400 transition-all">
                        เข้าสู่ระบบ
                    </span>
                </Link>
            </div>
        </form>
    )
}