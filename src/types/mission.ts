export interface CrewMember {
    id: number;
    name: string;
    rank: string;
    planet: string;
    status: 'Online' | 'Offline';
    bio: string;
}