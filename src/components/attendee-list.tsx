import { Search } from 'lucide-react'

export function AttendeeList() {
    return (
        <div className="flex gap-3">
            <div className="text-2xl font-bold">Participantes</div>
            <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg text-sm flex items-center gap-3">
                <Search className='size-4 text-emerald-300' />

                <input
                    type="text"
                    placeholder="Buscar participante"
                    className="bg-transparent flex-1 outline-none"
                />
            </div>
            
        </div>
    )
}