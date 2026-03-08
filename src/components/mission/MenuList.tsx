import Link from "next/link";

export default function MenuList() {
    return (
        <>
            <div className="w-full max-w-sm grid grid-cols-3 gap-2 mb-8">
                {[
                    { label: 'ตั้งค่า', icon: '⚙️', href: "/mission/settings" },
                    { label: 'เพื่อน', icon: '🧑‍🤝‍🧑', href: "/mission/friends" },
                    { label: 'ความสำเร็จ', icon: '🏆', href: "/mission/achivement" },
                ].map((item, idx) => (
                    <Link href={item.href} key={idx} className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl py-3 transition-all flex flex-col items-center gap-1 active:scale-95">
                        <span className="text-xl">{item.icon}</span>
                        <span className="text-[10px] text-slate-300">{item.label}</span>
                    </Link>
                ))}
            </div>
        </>
    )
}