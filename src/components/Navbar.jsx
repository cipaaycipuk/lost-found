import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar({ onSearch }) {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value)
    if (onSearch) onSearch(e.target.value)
  }

  return (
    <header className="sticky top-4 z-50 mx-auto w-full max-w-7xl px-4">
      {/* Container Kapsul Hitam Utama */}
      <div className="flex items-center justify-between gap-3 rounded-full bg-black px-3 py-3.5 text-white shadow-xl lg:px-4">
        
        {/* KIRI: Logo Navbar Khusus & Search Bar */}
        <div className="flex flex-1 items-center gap-3">
          {/* Logo khusus Navbar */}
          <Link to="/" className="flex-shrink-0 transition hover:opacity-90">
            <img
              src="/solo.png"
              alt="Lost & Found"
              className="h-10 w-10 rounded-full object-cover"
            />
          </Link>

          {/* Search Bar Kapsul Abu-abu */}
          <div className="flex w-full max-w-sm items-center rounded-full bg-[#4a4a4a] px-3.5 py-2.5 text-sm text-white lg:max-w-md">
            {/* Icon Hamburger Menu */}
            <svg className="mr-2.5 h-4 w-4 flex-shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>

            {/* Input Text */}
            <input
              type="text"
              placeholder="Hinted search text"
              value={searchQuery}
              onChange={handleSearchChange}
              className="w-full bg-transparent text-sm text-white placeholder-gray-300 outline-none"
            />

            {/* Icon Kaca Pembesar */}
            <svg className="ml-2 h-4 w-4 flex-shrink-0 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        {/* KANAN: Tombol Laporan & Icon Menu */}
        <div className="flex items-center gap-3 lg:gap-4">
          {/* Tombol Orange "+ buat laporan" */}
          <Link
            to="/buat-laporan"
            className="flex items-center gap-1 rounded-full bg-[#e0531c] px-3 py-2 text-xs font-semibold text-white transition hover:bg-[#c84615] active:scale-95 sm:text-sm lg:px-4"
          >
            + buat laporan
          </Link>

          {/* Icon Notifikasi */}
          <button className="relative p-1 text-gray-300 transition hover:text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="absolute right-1 top-1 h-1.5 w-1.5 rounded-full bg-[#e0531c]" />
          </button>

          {/* Icon User / Profil */}
          <Link to="/profil" className="p-1 text-gray-300 transition hover:text-white">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </Link>
        </div>

      </div>
    </header>
  )
}