export default function ProfileCard() {
    return (
        <>
            {/* --- 1. Top Card: Profile & Greeting --- */}
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-2xl p-6 pt-0 relative mb-6">
                <div className="flex flex-col items-center">
                    <div className="relative -translate-y-16 mb-[-55px]">
                        <div className="absolute inset-0 bg-blue-500/20 blur-2xl rounded-full"></div>
                        <img src="/planets/mars.png" className="size-32 object-contain relative z-10 drop-shadow-2xl transition-transform hover:scale-110" alt="profile" />
                    </div>
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-white tracking-tight">สวัสดี, <span className="text-blue-300">Explorer Name</span></h1>
                        <p className="text-[10px] text-blue-200/50 font-mono mt-1 tracking-[0.3em] uppercase">Status: Pilot Junior</p>
                    </div>
                </div>

                {/* เส้นประหัวลูกศรคั่นส่วนข้อมูล */}
                <div className="flex items-center gap-2 my-5">
                    <div className="size-2 bg-blue-400 rounded-full shadow-[0_0_8px_#60a5fa] animate-ping"></div>
                    <div className="flex-grow border-t-2 border-dashed border-blue-400/30"></div>
                    <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-[10px] border-l-blue-400"></div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="text-center bg-black/20 py-2 rounded-xl border border-white/5">
                        <p className="text-[9px] text-slate-400 uppercase">ชั่วโมงบิน</p>
                        <p className="text-white font-mono text-sm">1 ชม.</p>
                    </div>
                    <div className="text-center bg-black/20 py-2 rounded-xl border border-white/5">
                        <p className="text-[9px] text-slate-400 uppercase">ตำแหน่ง</p>
                        <p className="text-yellow-400 font-mono text-sm">นักบินฝึกหัด</p>
                    </div>
                </div>
            </div>
        </>
    )
}