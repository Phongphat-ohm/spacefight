export default function ProfileCard() {
    return (
        <>
            {/* --- 1. Top Card: Profile & Greeting --- */}
            <div className="w-full max-w-sm bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 shadow-2xl p-6 pt-0 relative mb-6">
                <div className="absolute top-5 right-5">
                    <button className="p-2 bg-red-500/10 border border-red-500/20 rounded-full hover:bg-red-500/30 transition-all group active:scale-90 shadow-lg shadow-red-950/20">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="size-4 text-red-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
                        </svg>
                    </button>
                </div>
                <div className="flex flex-col items-center">
                    <div className="relative -translate-y-16 -mb-13.75">
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
                    <div className="grow border-t-2 border-dashed border-blue-400/30"></div>
                    <div className="w-0 h-0 border-y-[6px] border-y-transparent border-l-10 border-l-blue-400"></div>
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