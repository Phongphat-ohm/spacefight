import PasswordChange from "./PasswordChange";

export default function PilotSetting() {
    return (
        <>

            {/* --- 3. การ์ดแบบฟอร์มข้อมูล --- */}
            <div className="w-full max-w-sm bg-white/5 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-8 shadow-2xl">
                <h2 className="text-xl font-bold text-white mb-1 tracking-tight">ตั้งค่าข้อมูลนักบิน</h2>
                <p className="text-xs text-slate-400 mb-6 font-light">แก้ไขข้อมูลประจำตัวเพื่อระบุตัวตนในจักรวาล</p>

                {/* เส้นประหัวลูกศร (สัญลักษณ์นำสายตา) */}
                <div className="flex items-center gap-2 mb-8">
                    <div className="size-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa]"></div>
                    <div className="flex-grow border-t border-dashed border-blue-400/30"></div>
                    <div className="w-0 h-0 border-y-[4px] border-y-transparent border-l-[8px] border-l-blue-400"></div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-blue-300 uppercase tracking-widest ml-1">ชื่อ-นามสกุล</label>
                        <input
                            type="text"
                            placeholder="กัปตัน..."
                            className="w-full bg-black/30 border border-white/10 rounded-2xl px-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors"
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-blue-300 uppercase tracking-widest ml-1">
                            ชื่อผู้ใช้
                        </label>
                        <div className="relative group">
                            {/* Start Content: @ Symbol */}
                            <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                                <span className="text-blue-400 font-mono font-bold text-sm group-focus-within:text-blue-300 transition-colors">
                                    @
                                </span>
                            </div>

                            <input
                                type="text"
                                placeholder="exp1001"
                                className="w-full bg-black/30 border border-white/10 rounded-2xl pl-10 pr-5 py-4 text-white text-sm focus:outline-none focus:border-blue-500/50 transition-colors placeholder:text-slate-600"
                            />
                        </div>
                    </div>

                    <PasswordChange />
                </div>

                <button className="w-full mt-10 py-4 bg-linear-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-2xl font-bold tracking-widest shadow-xl shadow-blue-900/40 transition-all active:scale-95 text-xs">
                    บันทึกข้อมูลการเปลี่ยนแปลง
                </button>
            </div>
        </>
    )
}