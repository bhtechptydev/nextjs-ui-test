'use client'
 import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

export default function SearchBar({value, onChange,}: {value: string onChange: (val: string) => void }) {
  return (
    <div className="w-full flex justify-center px-4">
      <div className="relative w-full max-w-xl">
        <input
          type="text" placeholder="Buscar productos..." value={value} onChange={(e) => onChange(e.target.value)}
          className="w-full px-4 py-2 pr-12 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all bg-white text-gray-800 placeholder-gray-400"
        />
        <button type="submit" className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-2 rounded-full hover:bg-black transition-colors">
          <MagnifyingGlassIcon className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
