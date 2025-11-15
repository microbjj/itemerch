import clsx from 'clsx'
import { useState } from 'react'
import { MdClear } from 'react-icons/md'
import { LuSearch } from 'react-icons/lu'
import { useDebounceSearch } from './hooks/use-debounce-search'

export function Search() {
    const { searchTerm, setSearchTerm } = useDebounceSearch()
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className="relative flex items-center">
            <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Поиск..."
                className={clsx(
                    'mr-2 rounded border py-1 pr-7 pl-2 text-sm opacity-100 transition-all duration-100 ease-linear',
                    isOpen
                        ? 'w-52 rounded border px-2 py-1 text-sm opacity-100'
                        : 'w-0 border-0 px-0 py-0 opacity-0',
                )}
            />
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="mt-0.5 flex cursor-pointer items-center justify-center hover:text-fuchsia-800"
            >
                <LuSearch size={22} />
            </button>
            {searchTerm && (
                <button
                    onClick={() => setSearchTerm('')}
                    className="hover:text-dark absolute right-9 text-gray-500"
                >
                    <MdClear size={20} />
                </button>
            )}
        </div>
    )
}
