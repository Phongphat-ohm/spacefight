"use client"
import MenuList from '@/components/mission/MenuList';
import Mission from '@/components/mission/Mission';
import ProfileCard from '@/components/mission/ProfileCard';

export default function SpaceMissionDashboard() {
    return (

        <div className="bg-linear-to-b from-violet-950 via-blue-900 to-slate-950 w-full min-h-screen pt-20 pb-10 flex flex-col items-center px-4 overflow-x-hidden">
            <ProfileCard />
            <MenuList />
            <Mission />
        </div >
    );
}