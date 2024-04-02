import { Search, MoreHorizontal, ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react'

export function AttendeeList() {
    return (
        <div className='flex flex-col gap-4'>
            <div className="flex gap-3">
                <div className="text-2xl font-bold">Participantes</div>
                <div className="w-72 px-3 py-1.5 border border-white/10 rounded-lg flex items-center gap-3">
                    <Search className='size-4 text-emerald-300' />

                    <input
                        type="text"
                        placeholder="Buscar participante"
                        className="bg-transparent flex-1 outline-none border-0 p-0 text-sm"
                    />
                </div>
            
            </div>

            <div className='border border-white/10 rounded-lg'>
                <table className='w-full'>
                    <thead className='border-b border-white/10'>
                        <tr>
                            <th style={{ width: 48 }} className='py-3 px-4 text-sm font-semibold text-left'>
                                <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                            </th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Código</th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Participantes</th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Data de inscrição</th>
                            <th className='py-3 px-4 text-sm font-semibold text-left'>Data do check-in</th>
                            <th style={{ width: 64 }} className='py-3 px-4 text-sm font-semibold text-left'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 8 }).map((_ , i) => {
                            return (
                                <tr key={i} className='border-b border-white/10 hover:bg-white/5'>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>
                                        <input type="checkbox" className='size-4 bg-black/20 rounded border border-white/10' />
                                    </td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>123587</td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>
                                        <div className='flex flex-col gap-1'>
                                            <span className='font-semibold text-white'>Alan Gonçalves</span>
                                            <span>lnjnr9215@gmail.com</span>
                                        </div>
                                    </td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>7 Dias atrás</td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>3 Dias atrás</td>
                                    <td className='py-3 px-4 text-sm text-zinc-300'>
                                        <button className='bg-black/20 border border-white/10 rounded-md p-1.5'>
                                            <MoreHorizontal className='size-4' />
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan={3} className='py-3 px-4 text-sm text-zinc-300'>
                                Mostrando 10 de 228 items
                            </td>
                            <td colSpan={3} className='py-3 px-4 text-sm text-zinc-300 text-right'>
                                <div className='inline-flex items-center gap-8'>
                                    <span>Página 1 de 23</span>

                                    <div className='flex gap-1.5'>
                                        <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                            <ChevronsLeft className='size-4' />
                                        </button>
                                        <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                            <ChevronLeft className='size-4' />
                                        </button>
                                        <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                            <ChevronRight className='size-4' />
                                        </button>
                                        <button className='bg-white/10 border border-white/10 rounded-md p-1.5'>
                                            <ChevronsRight className='size-4' />
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}